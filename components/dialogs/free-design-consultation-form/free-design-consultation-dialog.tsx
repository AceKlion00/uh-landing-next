import { useState } from 'react';

import { FreeDesignConsultationForm, FreeDesignConsultationStep } from './type';
import Icon from '../../ui-kit/icon';
import { PersonalInformationForm } from './personal-information-form';
import { ProjectBriefForm } from './project-brief-form';
import { ProjectSummaryForm } from './project-summary-form';
import { ProjectAccessoryType, ProjectLocationType } from '../../../core/types';
import { leadApiService } from '../../../core/api-services/lead-api.service';
import useAlert from '../../ui-kit/dialog/use-alert';
import Spinner from '../../ui-kit/common/spinner';
import useGAService from '../../../core/app-services/ga-service';

interface Props {
  onClose: (showThankYou: boolean) => void,
  closeDialog: () => void, // DO NOT USE THIS. INTERNAL USE ONLY
}

export function FreeDesignConsultationDialog({ onClose, closeDialog }: Props) {
  const gaService = useGAService();
  const [step, setStep] = useState<FreeDesignConsultationStep>(FreeDesignConsultationStep.PersonalInformation);
  const [loading, setLoading] = useState<boolean>(false);
  const [consultationValue, setConsultationValue] = useState<FreeDesignConsultationForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: undefined,
    latitude: undefined,
    longitude: undefined,
    accessories: [ProjectAccessoryType.CleaningSanding],
    projectLocation: ProjectLocationType.BackYard,
    projectType: ProjectAccessoryType.Patio,
    projectComment: '',
    yardComment: '',
    attachments: [],
  });

  const alertService = useAlert();
  const next = async (values: any) => {
    setConsultationValue({ ...consultationValue, ...values });
    if (step === FreeDesignConsultationStep.ProjectSummary) {
      try {
        setLoading(true);
        await leadApiService.requestFreeDesignConsultation(consultationValue);
        const w = window as any;
        w.gtag_report_conversion_free_design_consultation(null);
        gaService.event('Request Submitted', 'Free Design Consultation Form Submitted');
        closeDialog();
        onClose(true);
      } catch (e) {
        await alertService.notify('Request Failed', e.message || 'Request failed. Please try again.', 'Ok');
      } finally {
        setLoading(false);
      }
    } else {
      setStep(step + 1);
    }
  }

  return (
    <div className="max-w-500 py-20 mx-15 md:mx-0">
      <div className="flex justify-end px-20">
        <button className="px-5 pt-5" onClick={() => { closeDialog(); onClose(false); }}><Icon name="close" color="#2c2c2c" size={14} /></button>
      </div>
      <h3 className="text-primary font-medium text-24 text-center mb-15 px-10 md:px-20">Get started with a Hardscape Architect</h3>
      {step === FreeDesignConsultationStep.PersonalInformation && <PersonalInformationForm next={next} consultationValue={consultationValue}/>}
      {step === FreeDesignConsultationStep.ProjectBrief && <ProjectBriefForm next={next} consultationValue={consultationValue} back={() => setStep(FreeDesignConsultationStep.PersonalInformation)}/>}
      {step === FreeDesignConsultationStep.ProjectSummary && <ProjectSummaryForm next={next} consultationValue={consultationValue} back={() => setStep(FreeDesignConsultationStep.ProjectBrief)}/>}
      <Spinner isLoading={loading} />
    </div>
  );
}

FreeDesignConsultationDialog.defaultProps = {
  onClose: (showThankyou: boolean) => {},
  closeDialog: () => {},
}
