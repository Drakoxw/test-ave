import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider as ProviderFire } from 'react-firebase'
import { initializeApp } from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBpRlTFCbo0OUoNvGTYD4ZFHRRXeEkdnBc',
  authDomain: 'ave-test-10746.firebaseapp.com',
  projectId: 'ave-test-10746',
  storageBucket: 'ave-test-10746.appspot.com',
  messagingSenderId: '281698179056',
  appId: '1:281698179056:web:c83f9a81cf6ad0ff0a6f35',
  measurementId: 'G-HWH7MS1CLG',
}

const firebaseApp = initializeApp(firebaseConfig)

import { ROUTES } from '@/core/constants'
import { LayoutMain } from '@/core/Layouts'
import { SpinnerPages } from '@/components'

const Home = lazy(() => import('@/pages/Home'))
const Login = lazy(() => import('@/pages/Login'))
const Logout = lazy(() => import('@/pages/Logout'))

function App(): JSX.Element {
  return (
    <ProviderFire firebaseApp={firebaseApp}>
      <BrowserRouter>
        <LayoutMain>
          <Suspense fallback={<SpinnerPages />}>
            <Routes>
              <Route path={ROUTES.home} element={<Home />} />
              <Route path={ROUTES.login} element={<Login />} />
              <Route path={ROUTES.logout} element={<Logout />} />
            </Routes>
          </Suspense>
        </LayoutMain>
      </BrowserRouter>
    </ProviderFire>
  )
}

export default App
