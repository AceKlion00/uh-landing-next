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
