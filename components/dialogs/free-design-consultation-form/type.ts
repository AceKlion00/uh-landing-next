import { ProjectAccessoryType, ProjectLocationType } from '../../../core/types';

export enum FreeDesignConsultationStep {
  PersonalInformation = 1,
  ProjectBrief = 2,
  ProjectSummary = 3
}

export interface FreeDesignConsultationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  accessories: ProjectAccessoryType[];
  projectLocation: ProjectLocationType;
  projectType: any;
  projectComment: string;
  yardComment: string;
  attachments: string[];
}
