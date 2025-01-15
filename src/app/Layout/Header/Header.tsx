import { useState } from 'react';
import BurgerBlock from '../../../widgets/Header/BurgerBlock';
import Nav from '../../../widgets/Header/Nav';
import Search from '../../../widgets/Header/Search';
import ModalOrderCall from '../../../widgets/Header/Modal/ModalOrderCall';
import { Link } from 'react-router-dom';
import style from '../../Css/Header/header.module.css';
import NavMobile from '../../../widgets/Header/Nav/NavMobile';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-black">
      <div className="bg-gray h-auto">
        <div className="py-[20px] text-black px-[15px] max-w-[1270px] w-full mx-auto">
          <div className="max-w-[700px] w-full gap-[20px] flex flex-wrap justify-between items-center">
            <Link className='w-[250px] overflow-hidden flex justify-center items-center'to="/">
              <img src="./img/Logo/Logo.png" alt="logo" />
            </Link>
            <div className={style.send_request}>
              <Link
                className="bg-orange text-white w-auto h-[40px] px-[10px] flex justify-center items-center rounded-[4px]"
                to="/send">
                Отправить заявку
              </Link>
              <ModalOrderCall show={showModal} onClose={() => setShowModal(false)} />
            </div>
            <div className={style.send_call}>
              <a href="tel:+74997033415" className="text-[18px] block font-[bold] hover:underline">
                +7(499) 703-34-15
              </a>
              <button
                className="bg-none text-orange hover:underline hover:bg-transparent"
                onClick={() => setShowModal(true)}>
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.header_down}>
        <NavMobile />
        <BurgerBlock />
        <Nav />
        <Search />
      </div>
    </header>
  );
};

export default Header;
