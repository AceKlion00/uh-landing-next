import { useState } from 'react';
import Head from 'next/head';
import * as Yup from 'yup';
import { useFormik } from 'formik';

import { Layout } from '../components/layout/layout';
import Spinner from '../components/ui-kit/common/spinner';
import { Input } from '../components/ui-kit/input/input';
import { AddressInput } from '../components/ui-kit/input/address-input';
import { DropdownSelect } from '../components/ui-kit/input/dropdown-select';
import { SourceFoundUs } from '../core/types/marketing';
import { TextArea } from '../components/ui-kit/input/textarea';
import { enumToOptions } from '../components/ui-kit/utils';
import { PhoneInput } from '../components/ui-kit/input/phone-input';
import { leadApiService } from '../core/api-services/lead-api.service';
import useAlert from '../components/ui-kit/dialog/use-alert';

export default function ContactUs() {
  const alertService = useAlert();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sourceFoundUsOptions = enumToOptions<SourceFoundUs>(SourceFoundUs);

  const schema = Yup.object().shape({
    fullName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    latitude: Yup.number().required('Required'),
    longitude: Yup.number().required('Required'),
    sourceFoundUs: Yup.string().required('Required'), // TODO: enum validation
    message: Yup.string().min(10, 'Too Short!').required('Required'),
  });
  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      latitude: 0,
      longitude: 0,
      sourceFoundUs: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: async values => {
      try {
        setIsLoading(true);
        await leadApiService.contactUs(values);
        alertService.alert('Thank You!', 'Thank you for contacting United Hardscapes, we will respond to your inquiry within 24 hours. Thank you for your patience.', 'Ok');
      } catch (e) {
        alertService.alert('Message not sent!', `We are unable to connect to customer service at this moment. Please try again later.`, 'Ok');
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (<>
      <Head>
        <title>Contact Us - United Hardscapes</title>
        <meta name="description" content="Choose from a variety of patio, walkway, driveway, retaining wall, and stair kits for any budget and taste to create the perfect outdoor living space." />
      </Head>
      <Layout>
        <section className="pt-65 pb-80">
          <div className="container mx-auto">
            <h2 className="text-secondary font-normal mb-70 text-45 text-center">Contact Us</h2>
            <Spinner isLoading={isLoading} />
            <form className="w-full md:w-3/5 mx-auto" onSubmit={form.handleSubmit}>
              <Input name="fullName" placeholder="Walter White" label="Full Name" value={form.values.fullName} onChange={form.handleChange} />
              <Input type="email" name="email" placeholder="someone@example.com" value={form.values.email} label="Email Address" onChange={form.handleChange} />
              <PhoneInput name="phone" placeholder="(123) 456 7890" label="Phone Number" value={form.values.phone} onChange={form.handleChange} />
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
              <DropdownSelect name="sourceFoundUs" options={sourceFoundUsOptions} label="How did you find our company?" placeholder="Nothing Selected" value={form.values.sourceFoundUs} onChange={form.handleChange} />
              <TextArea name="message" placeholder="Write down your message here." label="Comment" rows={4} value={form.values.message} onChange={form.handleChange} />
              <div className="flex justify-center pt-30">
                <button className="btn btn-warning btn-md" disabled={!(form.isValid && form.dirty)}>Submit</button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}
