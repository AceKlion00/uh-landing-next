export const noop = () => {};

export interface Workflow {
  image: string;
  title: string;
  description: string;
  width: number;
  height: number;
}

export enum HomePageType {
  Home = 'HOME',
  Consultation = 'CONSULTATION'
}

export interface RequestConsultation {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}
