import { ContactUs, JoinSupplier, RequestConsultation } from '../types';
import { doPost } from './http';

export const leadApiService = {
  requestConsultation: (body: RequestConsultation) => {
    return doPost('/request-consultation', body);
  },
  contactUs: (body: ContactUs) => {
    return doPost('/contact', body);
  },
  joinSuppliers: (body: JoinSupplier) => {
    return doPost('/join-as-supplier', body);
  }
};
