export interface ResponseApplications {
  rows: Event[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface Event {
  showInCalendar?: boolean;
  validators: any[];
  _id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  externalUrl?: null | string;
  address: Address;
  tags?: Tag[] | null;
  optionLabel?: null | string;
  detail?: string;
  endTime?: string;
  firebaseIdEvent?: null;
  locations?: any[];
  sendFirebase?: boolean;
}

export interface Address {
  streetName: string;
  streetNumber: StreetNumber;
  city: string;
  departmentNumber?: string | null;
  postalCode?: string | null;
  administrativeAreaLevel1?: string | null;
  administrativeAreaLevel2?: string | null;
  country?: string | null;
  latitude?: number | null;
  longitude?: number | null;
}

export type StreetNumber = number | string;

export interface Tag {
  tag?: string;
}
