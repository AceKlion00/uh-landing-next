import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../ui-kit/input';
import { PhoneInput } from '../ui-kit/phone-input';
import { AddressInput } from '../ui-kit/address-input';

interface Props {
  onClose: () => void,
}

export function ScheduleConsultationDialog({ onClose }: Props) {
  const schema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    latitude: Yup.number().required('Required'),
    longitude: Yup.number().required('Required'),
  });
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      latitude: null,
      longitude: null,
    },
    validationSchema: schema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (<div className="w-410">
    <div className="flex justify-end">
      <button className="px-5 pt-5" onClick={onClose}><Image src="/assets/images/icons/close-dark.svg" width={14} height={14} alt="close"/></button>
    </div>
    <h5 className="text-primary text-center text-22 font-medium mb-15">Book A Free Consultation</h5>
    <p className="text-light-500 text-16 font-normal text-center mb-30">We will contact you to confirm the day and the time of the consultation.</p>

    <form className="w-300 mx-auto" onSubmit={form.handleSubmit}>
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
          console.log('lat lng update: ', latitude, longitude);
          form.setFieldValue('latitude', latitude);
          form.setFieldValue('longitude', longitude);
        }} />
      <div className="flex justify-center pt-10">
        <button className="btn btn-warning btn-md" disabled={!(form.isValid && form.dirty)}>Submit</button>
      </div>
    </form>
  </div>);
}

ScheduleConsultationDialog.defaultProps = {
  onClose: () => {},
}
