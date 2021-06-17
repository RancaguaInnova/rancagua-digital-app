export interface ResponseApplications {
  rows: Application[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

export interface Application {
  developerInfo: DeveloperInfo
  userFields: string[]
  roles: string[]
  name: string
  description: string
  approved: boolean
  applicationURL?: string
  appToken?: string
  isPrivate: boolean
  ownerId?: string
  appMovil?: boolean
  urlApp?: string
  appName?: string
  appStoreId?: number
  appStoreLocale?: string
  playStoreId?: string
  _id?: string
}

export interface DeveloperInfo {
  address?: Address
  phone: Phone
  firstName?: string
  lastName?: string
  email?: string
  url?: string
}

export interface Address {
  streetName?: string
  streetNumber?: number
  departmentNumber?: null | string
  city?: AdministrativeAreaLevel2
  postalCode?: null | string
  formatted_address?: string
  place_id?: string
  latitude?: number
  longitude?: number
  administrativeAreaLevel1?: string
  administrativeAreaLevel2?: AdministrativeAreaLevel2
  country?: string
}

export enum AdministrativeAreaLevel2 {
  AdministrativeAreaLevel2Rancagua = "rancagua",
  Rancagua = "Rancagua",
  Santiago = "Santiago",
}

export interface Phone {
  areaCode?: number | null
  number?: null | string
  mobilePhone?: string
}
