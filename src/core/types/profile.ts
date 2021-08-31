import { Address } from './address'
import { Phone } from './phone'

export interface Profile {
  address: Address
  birthdate?: string
  educationalLevel?: string
  firstName?: string
  gender?: string
  identifier?: string
  lastName?: string
  phone: Phone
}
