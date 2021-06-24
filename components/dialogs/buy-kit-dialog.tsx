import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Input } from '../ui-kit/input/input';
import { PhoneInput } from '../ui-kit/input/phone-input';
import { AddressInput } from '../ui-kit/input/address-input';
import Spinner from '../ui-kit/common/spinner';
import { leadApiService } from '../../core/api-services/lead-api.service';
import useAlert from '../ui-kit/dialog/use-alert';
import Icon from '../ui-kit/icon';

interface Props {
  kitName: string;
  onClose: () => void,
  closeDialog: () => void, // DO NOT USE THIS. INTERNAL USE ONLY
}

export function BuyKitDialog({ kitName, onClose, closeDialog }: Props) {
  const alertService = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = Yup.object().shape({
    kitName: Yup.string().required('Required'),
    fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    latitude: Yup.number().required('Required'),
    longitude: Yup.number().required('Required'),
  });
  const form = useFormik({
    initialValues: {
      kitName,
      fullName: '',
      email: '',
      phone: '',
      address: '',
      latitude: null,
      longitude: null,
      agree: false,
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        setIsLoading(true);
        await leadApiService.buyKit(values as any);
        alertService.alert('Thank You!', 'One of our Hardscape Consultants will be in touch soon to schedule the consultation.', 'Ok')
          .then(() => {
            closeDialog();
          });
      } catch (e) {
        alertService.alert('Request Failed', e.message || 'Request failed. Please try again.', 'Ok');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (<div className="w-410 p-20">
    <div className="flex justify-end">
      <button className="px-5 pt-5" onClick={() => { onClose(); closeDialog(); }}><Icon name="close" color="#2c2c2c" size={14} /></button>
    </div>
    <h5 className="text-primary text-center text-22 font-medium mb-15">Buy Kit</h5>
    <p className="text-light-500 text-16 font-normal text-center mb-30">We will contact you to confirm the purchase.</p>

    <form className="w-300 mx-auto" onSubmit={form.handleSubmit}>
      <Input name="kitName" label="Kit Name" placeholder="" value={form.values.kitName} onChange={form.handleChange} readonly={true} />
      <Input name="fullName" label="Full Name" placeholder="Walter White" value={form.values.fullName} onChange={form.handleChange} />
      <Input type="email" name="email" label="Email" placeholder="walter@example.com" value={form.values.email} onChange={form.handleChange} />
      <PhoneInput name="phone" label="Phone Number" placeholder="(123) 456 7890" value={form.values.phone} onChange={form.handleChange} />
      <AddressInput
        name="address"
        label="Address"
        placeholder="Select your address"
        value={form.values.address}
        onChange={form.handleChange}
        onLatLngChange={(latitude, longitude) => {
          form.setFieldValue('latitude', latitude);
          form.setFieldValue('longitude', longitude);
        }} />
      <div className="flex justify-center pt-10">
        <button className="btn btn-warning btn-md" disabled={!(form.isValid && form.dirty)}>Submit</button>
      </div>
    </form>
    <Spinner isLoading={isLoading} />
  </div>);
}

BuyKitDialog.defaultProps = {
  onClose: () => {},
  closeDialog: () => {},
}
