import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ROUTES } from '@/core/constants';
import { LayoutMain } from '@/core/Layouts';
import { SpinnerPages } from '@/components';

const Home = lazy(() => import('@/pages/Home'));

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <LayoutMain>
        <Suspense fallback={<SpinnerPages />}>
          <Routes>
            <Route path={ROUTES.home} element={<Home />} />
          </Routes>
        </Suspense>
      </LayoutMain>
    </BrowserRouter>
  );
}

export default App;
