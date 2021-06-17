import { RequestConsultation } from '../types';
import { doPost } from './http';

export const consultationService = {
  requestConsultation: (body: RequestConsultation) => {
    return doPost('/consultation', body);
  }
};
