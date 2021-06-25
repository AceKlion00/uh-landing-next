import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FreeDesignConsultationForm } from './type';
import { TextArea } from '../../ui-kit/input/textarea';
import { PhotoUploader } from '../../ui-kit/input/photo-uploader';
import { noop } from '../../../core/types';
import { useEffect } from 'react';

interface Props {
  consultationValue: FreeDesignConsultationForm,
  next: (values: any) => void,
  back: () => void,
}

export function ProjectSummaryForm({ consultationValue, next, back }: Props) {
  const schema = Yup.object().shape({
    yardComment: Yup.string().required('Required'),
    attachments: Yup.array().required('Required'),
  });
  const form = useFormik({
    initialValues: {
      yardComment: consultationValue.yardComment || '',
      attachments: consultationValue.attachments || []
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
      <h5 className="text-light-500 text-center text-18 font-medium mt-20 px-0 md:px-50">Step 3: Tell us what you have now</h5>
      <form className="mt-30" onSubmit={form.handleSubmit}>
        <div className="pretty-scroll max-h-70vh overflow-y-auto px-20">
          <TextArea name="yardComment" label="Tell us about your yard" placeholder="(Soil type, property grade, machine access)" rows={4} value={form.values.yardComment} onChange={form.handleChange} />
          <p className="text-primary text-18 font-medium text-center my-20">Attachments</p>
          <p className="text-center mb-20">Upload a photo(s) of area or feel free to upload examples you like.</p>
          <PhotoUploader name="attachments" align="center" value={form.values.attachments} onChange={form.handleChange}/>
        </div>
        <div className="flex justify-center py-10">
          <button className="text-warning bg-white border-0 focus:ring-0 focus:outline-none font-medium cursor-pointer btn-sm-block px-30 mr-20" onClick={back}>Back</button>
          <button className="btn btn-warning btn-md btn-sm-block px-30" disabled={!form.isValid}>Next</button>
        </div>
      </form>
    </div>
  );
}

ProjectSummaryForm.defaultProps = {
  next: noop
}
