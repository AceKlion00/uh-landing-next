import { useState } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';

import { Input } from '../ui-kit/input/input';
import { PhoneInput } from '../ui-kit/input/phone-input';
import Spinner from '../ui-kit/common/spinner';
import useAlert from '../ui-kit/dialog/use-alert';
import Icon from '../ui-kit/icon';
import { leadApiService } from '../../core/api-services/lead-api.service';

interface Props {
  onClose: () => void,
  closeDialog: () => void, // DO NOT USE THIS. INTERNAL USE ONLY
}

export function SupplierRequestDialog({ onClose, closeDialog }: Props) {
  const alertService = useAlert();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    companyName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
  });
  const form = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      email: '',
      phone: ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        setIsLoading(true);
        await leadApiService.joinSuppliers(values);
        alertService.notify(
          'Application Sent!',
          'Thank you for applying for the United Hardscapes Authorized Contractor Network! We will review your company\'s information and contact you within 48 hours with any additional questions.',
          'View Our Signature Kits')
          .then(() => {
            closeDialog();
            router.push('/kits');
          });
      } catch (e) {
        alertService.notify('Request Failed', e.message || 'Request failed. Please try again.', 'Ok');
      } finally {
        setIsLoading(false);
      }
    }
  });

  return (<div className="w-680 p-20">
    <div className="flex justify-end">
      <button className="px-5 pt-5" onClick={() => {
        onClose();
        closeDialog();
      }}><Icon name="close" color="#2c2c2c" size={14} /></button>
    </div>
    <h5 className="text-primary text-center text-22 font-medium mb-35">Please fill in your contact details below</h5>
    <p className="text-light-500 text-16 font-normal text-center mb-50">Reach out to United Hardscapes to see how your
      company can join our network as a local supplier.</p>

    <form className="w-full mx-auto" onSubmit={form.handleSubmit}>
      <Input name="firstName" label="First Name" placeholder="Walter" value={form.values.firstName} onChange={form.handleChange} />
      <Input name="lastName" label="Last Name" placeholder="White" value={form.values.lastName} onChange={form.handleChange} />
      <Input name="companyName" label="Company Name" placeholder="John's Products" value={form.values.companyName} onChange={form.handleChange} />
      <Input type="email" name="email" label="Email" placeholder="walter@example.com" value={form.values.email} onChange={form.handleChange} />
      <PhoneInput name="phone" label="Phone Number" placeholder="(123) 456 7890" value={form.values.phone} onChange={form.handleChange} />
      <div className="flex justify-center pt-10">
        <button className="btn btn-warning btn-md" disabled={!(form.isValid && form.dirty)}>Submit</button>
      </div>
    </form>
    <Spinner isLoading={isLoading}/>
  </div>);
}

SupplierRequestDialog.defaultProps = {
  onClose: () => {
  },
  closeDialog: () => {
  },
}
