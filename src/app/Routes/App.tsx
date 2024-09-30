import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Home from '../../pages/Home';
import Achievements from '../../pages/Achievements';
import Reviews from '../../pages/Reviews';
import Catalog from '../../pages/Catalog';
import Product from '../../pages/Product';
import SendRequest from '../../pages/SendRequest';
import News from '../../pages/News';
import CatalogWithSubCategory from '../../pages/CatalogWithSubCategory';
import CatalogWithParentCategory from '../../pages/CatalogWithParentCategory';


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
            <Route path='/catalog/sub-category/:categoryId' element={<CatalogWithSubCategory />} />
            <Route path='/catalog/parent-category/:categoryId' element={<CatalogWithParentCategory />} />
            <Route path='/send' element={<SendRequest />} />
            <Route path='/catalog/product/:productId' element={<Product />} />
            <Route path='/news/:newsId' element={<News />} />
            <Route path="*" element={<div>404</div>} />
          </Route>
        </Routes>
      }
    </>
  );
}

export default App;
