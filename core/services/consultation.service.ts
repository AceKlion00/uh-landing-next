import { RequestConsultation } from '../types';
import { doPost } from './http';

const apiUrl = (url: string): string => `${process.env.api}${url}`;

export const consultationService = {
  requestConsultation: (body: RequestConsultation) => {
    return doPost(apiUrl('/consultation'), body);
  }
};
