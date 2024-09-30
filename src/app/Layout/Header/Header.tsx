import { useState } from 'react';
import BurgerBlock from '../../../widgets/Header/BurgerBlock';
import Nav from '../../../widgets/Header/Nav';
import Search from '../../../widgets/Header/Search';
import ModalOrderCall from '../../../widgets/Header/Modal/ModalOrderCall';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-black">
      <div className="bg-gray">
        <div className=" py-[20px] text-white px-[15px] max-w-[1270px] w-full mx-auto">
          <div className="max-w-[700px] w-full flex justify-between items-center">
            <Link to='/'>Logo</Link>
            <div>
              <Link
                className="bg-orange w-auto h-[30px] px-[10px] flex justify-center items-center rounded-[4px]"
                to="/send">
                Отправить заявку
              </Link>
              <ModalOrderCall show={showModal} onClose={() => setShowModal(false)} />
            </div>
            <div>
              <a href='tel:+74997033415' className="text-[18px] block font-[bold] hover:underline">+7(499) 703-34-15</a>
              <button
                className="bg-none text-orange hover:underline hover:bg-transparent"
                onClick={() => setShowModal(true)}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black w-full h-[90px] flex justify-between items-center text-white px-[15px] max-w-[1270px] mx-auto">
        <BurgerBlock />
        <Nav />
        <Search />
      </div>
    </header>
  );
};

export default Header;
