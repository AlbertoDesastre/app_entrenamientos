import { deleteItemInStorage, saveInStorage } from '@/modules/common/services/localStorageService'
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

export { login, logoff, userExists, isPasswordRight }
