import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Input } from '../../ui-kit/input/input';
import { PhoneInput } from '../../ui-kit/input/phone-input';
import { FreeDesignConsultationForm } from './type';
import { noop } from '../../../core/types';
import { useEffect } from 'react';

interface Props {
  consultationValue: FreeDesignConsultationForm,
  next: (values: any) => void
}

export function PersonalInformationForm({ consultationValue, next }: Props) {
  const schema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    phone: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    address: Yup.string().required('Required')
  });
  const form = useFormik({
    initialValues: {
      firstName: consultationValue.firstName || '',
      lastName: consultationValue.lastName || '',
      phone: consultationValue.phone || '',
      email: consultationValue.email || '',
      address: consultationValue.address || ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      next(values);
    }
  });

  useEffect(() => {
    form.validateForm();
  }, []);

  return (
    <div>
      <h5 className="text-light-500 text-center text-18 font-medium mt-20 px-0 sm:px-50">Step 1: Tell us about yourself</h5>
      <form className="mt-30" onSubmit={form.handleSubmit}>
        <div className="pretty-scroll max-h-70vh overflow-y-auto px-20">
          <Input name="firstName" label="First Name" placeholder="John" value={form.values.firstName} onChange={form.handleChange} />
          <Input name="lastName" label="Last Name" placeholder="Doe" value={form.values.lastName} onChange={form.handleChange} />
          <PhoneInput name="phone" label="Phone Number" placeholder="(123) 456 7890" value={form.values.phone} onChange={form.handleChange} />
          <Input name="email" label="Email Address" placeholder="someone@example.com" value={form.values.email} onChange={form.handleChange} />
          <Input name="address" label="Address (please mention at least your city or town)" placeholder="Select your address" value={form.values.address} onChange={form.handleChange} />
        </div>
        <div className="flex justify-center py-10">
          <button className="btn btn-warning btn-md btn-sm-block px-30" disabled={!form.isValid}>Next</button>
        </div>
      </form>
    </div>
  );
}

PersonalInformationForm.defaultProps = {
  next: noop
}
