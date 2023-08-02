import { useLocation, useNavigate } from 'react-router-dom'

import { ROUTES } from '@/core/constants'
import { User } from '@/core/interfaces'
import { useActions } from '@/core/stores/app'
import { loginApi, logoutApi } from '@/services'

const LoginUser = async (payload: User) => {
  const res = await loginApi(payload)
  return res.data.token
}
const LogoutUser = async (payload: User) => {
  const res = await logoutApi(payload)
  return res.data.token
}

export function useAuth() {
  const action = useActions()
  const location = useLocation()
  const navigate = useNavigate()

  console.log(location.pathname)

  const Autenticate = async (payload: User) => {
    if (location.pathname === ROUTES.login) {
      LoginUser(payload).then((token) => {
        action?.setToken(token)
        return navigate('/')
      })
    }

    LogoutUser(payload).then((token) => {
        action?.setToken(token)
        return navigate('/')
    }) 

  }

  return { Autenticate }
}
