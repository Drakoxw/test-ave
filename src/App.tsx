import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages';
import { ROUTES } from '@/core/constants';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
