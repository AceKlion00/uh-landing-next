import * as Yup from 'yup';
import { useFormik } from 'formik';

import { FreeDesignConsultationForm } from './type';
import { DropdownSelect } from '../../ui-kit/input/dropdown-select';
import { Option } from '../../ui-kit/models';
import { ProjectAccessoryType, ProjectLocationType } from '../../../core/types';
import { enumToOptions } from '../../ui-kit/utils';
import { accessoryTypes } from '../../../core/data/home';
import { TextArea } from '../../ui-kit/input/textarea';
import { ImageCardSelector } from '../../ui-kit/input/image-card-selector';

interface Props {
  consultationValue: FreeDesignConsultationForm,
  next: (values: any) => void
}

export function ProjectBriefForm({ consultationValue, next }: Props) {
  const projectAccessoryTypes: Option<ProjectAccessoryType>[] = enumToOptions<ProjectAccessoryType>(ProjectAccessoryType);
  const projectLocationTypes: Option<ProjectLocationType>[] = enumToOptions<ProjectLocationType>(ProjectLocationType);

  const schema = Yup.object().shape({
    projectType: Yup.string().required('Required'),
    projectLocation: Yup.string().required('Required'),
    accessories: Yup.string().required('Required'),
    projectComment: Yup.string().required('Required')
  });
  const form = useFormik({
    initialValues: {
      projectType: consultationValue.projectType || '',
      projectLocation: consultationValue.projectLocation || '',
      accessories: consultationValue.accessories || [],
      projectComment: consultationValue.projectComment || ''
    },
    validationSchema: schema,
    onSubmit: async values => {
      next(values);
    }
  });
  return (<div className="pretty-scroll">
    <h5 className="text-primary text-center text-22 font-medium mt-20 px-0 md:px-50">Tell us about your project</h5>
    <form className="mx-auto mt-30" onSubmit={form.handleSubmit}>
      <DropdownSelect name="projectType" options={projectAccessoryTypes} label="Project Type" placeholder="Patio" value={form.values.projectType} onChange={form.handleChange} />
      <DropdownSelect name="projectLocation" options={projectLocationTypes} label="Areas of focus (Eg: Front/Back)" placeholder="Backyard" value={form.values.projectLocation} onChange={form.handleChange} />
      <div className="relative">
        <p className="text-center">Select what will be included in your hardscaping project</p>
        // TODO: Information tooltip missed
      </div>
      <ImageCardSelector name="accessories" options={accessoryTypes} onChange={form.handleChange}/>
      <TextArea name="projectComment" label="Tell us about your dream project" rows={4} value={form.values.projectComment} onChange={form.handleChange} />

      <div className="flex justify-center">
        <button className="btn btn-warning btn-md" disabled={!(form.isValid && form.dirty)}>Next</button>
      </div>
    </form>
  </div>);
}