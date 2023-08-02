import { NavLink } from 'react-router-dom'

import { ROUTES } from '@/core/constants'

const routes = [
  {
    path: ROUTES.home,
    title: 'Inicio',
  },
  {
    path: ROUTES.login,
    title: 'Iniciar Sesión',
  },
]

export default function NavBar() {
  return (
    <nav className='bg-gray-500 border-gray-200 '>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <NavLink to={ROUTES.home}>
          <div className='flex items-center'>
            <img
              src='https://app.aveonline.co/app/img_informer/Logo.svg'
              className='h-8 mr-3'
              alt='Ave Logo'
            />
          </div>
        </NavLink>
        <div className=' block w-auto' id='navbar-default'>
          <ul className='font-medium flex flex-colp-0 border-gray-100 rounded-lg flex-row space-x-8 mt-0 border-0'>
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
