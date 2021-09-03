import { Capacitor } from '@capacitor/core'
import { WebStorage } from './webStorage'
import { CapacitorStorage } from './capacitorStorage'

export const AppStorage = Capacitor.isPluginAvailable('Storage')
  ? CapacitorStorage
  : WebStorage
