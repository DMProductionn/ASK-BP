import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Sliders from '../../widgets/Home/Sliders/Sliders';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {location.pathname === '/' && (
        <div className="bg-black mb-[80px]">
          <div className="max-w-[1270px] w-full mx-auto px-[15px]">
            <Sliders />
          </div>
        </div>
      )}
      <main className="max-w-[1270px] w-full mx-auto flex-1 mt-[30px] mb-[40px] px-[15px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
