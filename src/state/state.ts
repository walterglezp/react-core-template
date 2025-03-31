const fallbackLanguage: AppLanguage = ['en', 'es'].includes(window.navigator.language.slice(0, 2))
  ? (window.navigator.language.slice(0, 2) as AppLanguage)
  : 'en'

interface AppUser {
  isAuthenticated: boolean
  birthDate?: string
  created?: string
  firstName?: string
  gender?: string
  language?: AppLanguage
  lastLogin?: string
  lastName?: string
  phoneNumber?: string
  phoneNumberConfirmed?: boolean
  housesRole?: false
  carsRole?: false
  restaurantRole?: false
  marketRole?: false
  agentRole?: false
  businessRole?: false
}

export type AppStateProps = {
  setting: {
    language: AppLanguage
  }
  account: AppUser
}

export const initialAppState: AppStateProps = {
  setting: {
    language: fallbackLanguage,
  },
  account: {
    isAuthenticated: false,
  },
}
