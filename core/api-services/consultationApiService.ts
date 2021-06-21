import { RequestConsultation } from '../types';
import { doPost } from './http';

export const consultationApiService = {
  requestConsultation: (body: RequestConsultation) => {
    return doPost('/request-consultation', body);
  }
};
