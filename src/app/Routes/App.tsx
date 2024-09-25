import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home';
import Achievements from '../../pages/Achievements';
import Reviews from '../../pages/Reviews';
import Catalog from '../../pages/Catalog';
import Product from '../../pages/Product';


function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/achievements' element={<Achievements />} />
            <Route path='/reviews' element={<Reviews />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/catalog/product' element={<Product />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
