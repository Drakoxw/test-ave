import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/core/constants';
import { LayoutMain } from '@/core/Layouts';
import { SpinnerPages } from '@/components';

const Home = lazy(() => import('@/pages/Home'));
const Login = lazy(() => import('@/pages/Login'));

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Suspense fallback={<SpinnerPages />}>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
            <Route path={ROUTES.login} element={<Login />} />
          </Routes>
        </Suspense>
      </LayoutMain>
    </BrowserRouter>
  );
}

export default App;
