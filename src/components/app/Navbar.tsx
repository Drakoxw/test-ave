import { NavLink } from 'react-router-dom'

import { ROUTES } from '@/core/constants'
import { useStoreApp } from '@/core/stores/app'

const routesPublic = [
  {
    path: ROUTES.login,
    title: 'Iniciar Sesión',
  },
  {
    path: ROUTES.logout,
    title: 'Registrate',
  },
]

const routesPrivates = [
  {
    path: ROUTES.home,
    title: 'Inicio',
  },
]

export default function NavBar() {
  const store = useStoreApp()
  const routes = store.token ? routesPrivates : routesPublic

  return (
    <nav className="bg-gray-500 border-gray-200 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <img
            src="https://app.aveonline.co/app/img_informer/Logo.svg"
            className="h-8 mr-3"
            alt="Ave Logo"
          />
        </div>
        <div className=" block w-auto" id="navbar-default">
          <ul className="font-medium flex flex-colp-0 border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0">
            {routes.map(({ path, title }) => {
              return (
                <NavLink
                  to={path}
                  key={path}
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'activeLink' : ''
                  }
                >
                  {title}
                </NavLink>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
