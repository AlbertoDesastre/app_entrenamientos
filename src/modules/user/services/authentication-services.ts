import {
  deleteItemInStorage,
  getItemFromStorage,
  saveInStorage,
} from '@/modules/common/services/localStorageService'
import type { User } from '../types'

const login = () => {
  saveInStorage({ name: 'active-session', data: 'true' })
}

const logoff = () => {
  deleteItemInStorage({ name: 'active-session' })
}

const userExists = ({ user, username }: { user: User; username: string }) => {
  if (user.username === username) return true

  return false
}

const isPasswordRight = ({ user, password }: { user: User; password: string | null }) => {
  if (user.password === password) return true

  return false
}

/* Esta función es feísima y caótica. Ayuda. */
const isSessionActive = (): boolean => {
  let session

  try {
    session = getItemFromStorage({ name: 'active-session' })
  } catch (error: unknown) {
    console.error('There is no active session for this user. ' + error)
  }

  if (!session) {
    return false
  } else {
    return true
  }
}

const getUsername = (): string | null => {
  if (!isSessionActive()) return null

  /* Si la sesión está activa es que hay un usuario guardado si o si. */
  const data = localStorage.getItem('user-info') as string
  const { username } = JSON.parse(data) as User

  return username
}

export { login, logoff, userExists, isPasswordRight, isSessionActive, getUsername }
