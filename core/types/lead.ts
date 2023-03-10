export interface RequestConsultation {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}

export interface ContactUs {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
  sourceFoundUs: string;
  message: string;
}

export interface JoinSupplier {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
}

export interface BuyKit {
  kitName: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  latitude: number;
  longitude: number;
}
