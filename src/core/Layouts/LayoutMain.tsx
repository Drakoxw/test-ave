import NavBar from '@/components/app/Navbar'
import { useStoreApp } from '../stores/app'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../constants'

type Props = {
  children: JSX.Element
}

export default function LayoutMain({ children }: Props): JSX.Element {
  const store = useStoreApp()
  const navigate = useNavigate()

  useEffect(() => {
    if (store.token == '') {
      return navigate(ROUTES.login)
    }
  }, [store])
  
  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-700 text-white ">
      <header className='w-full'>
        <NavBar />
      </header>
      <main className='w-full p-8 flex flex-col gap-8'>{children}</main>
    </div>
  )
}
