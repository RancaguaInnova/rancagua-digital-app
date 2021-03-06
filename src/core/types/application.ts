import { Application } from 'core/interfaces/applications'

interface Payload {
  listApplication: Application[]
  application: Application
}

export interface IApplication {
  type: any
  payload: Payload
}
