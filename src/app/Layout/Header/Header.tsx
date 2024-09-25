import { useState } from 'react';
import BurgerBlock from '../../../widgets/Header/BurgerBlock';
import Nav from '../../../widgets/Header/Nav';
import Search from '../../../widgets/Header/Search';
import ModalOrderCall from '../../../widgets/Header/Modal/ModalOrderCall';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-black">
      <div className="bg-gray">
        <div className=" py-[20px] text-white px-[15px] max-w-[1270px] w-full mx-auto">
          <div className="max-w-[700px] w-full flex justify-between items-center">
            <div>Logo</div>
            <div>
              <button className="bg-orange w-auto h-[30px] px-[10px] flex justify-center items-center rounded-[4px]">
                Отправить заявку
              </button>
              <ModalOrderCall show={showModal} onClose={() => setShowModal(false)} />
            </div>
            <div>
              <p className="text-[18px] font-[bold]">+7(499) 703-34-15</p>
              <button
                className="bg-none text-orange hover:bg-transparent"
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
