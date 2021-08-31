import { Profile } from './profile'

export interface Session {
  id: string
  emails: [
    {
      address: string
      verified: boolean
    }
  ]
  profile: Profile
  roles: [string]
  services: {
    authToken: string
    expiresAt: any
    userToken: string
  }
}
