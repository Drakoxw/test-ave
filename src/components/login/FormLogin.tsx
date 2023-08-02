import { User } from '@/core/interfaces'
import { useAuth } from '@/hooks'
import { useState } from 'react'

export default function FormLogin() {
  const { Autenticate } = useAuth()
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const Auth = () => {
    if (!user && !password) {
      return alert('Usuario o contraseña requeridos')
    }
    const payload: User = {
      user,
      password,
    }
    Autenticate(payload)
  }

  return (
    <>
      <form className="w-full">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Usuario
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email o Usuario"
            value={user}
            onChange={(event) => {
              setUser(event.target.value)
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value)
            }}
            required
          />
        </div>
        <button
          type="submit"
          onClick={() => Auth()}
          className="button-blue sm:min-w-[12rem]"
        >
          Inicia sesion
        </button>
      </form>
    </>
  )
}
