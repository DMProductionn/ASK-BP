import { useState } from 'react';
import '../../../app/Css/Header/nav-mobile.css';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Scroll } from 'react-scroll';

const NavMobile = () => {
  const location = useLocation();
  const [active, setActive] = useState(false);

  const onClickBurger = () => {
    setActive(!active);
  };

  const onClickNavItem = () => {
    setActive(!active);
  };

  return (
    <div onClick={onClickBurger} className={'nav_mobile' + 'hidden'}>
      <ul
        onClick={() => setActive(!active)}
        className={active ? 'nav_mobile_burger active' : 'nav_mobile_burger hidden'}>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className={active ? 'nav_mobile_overlay active' : 'nav_mobile_overlay'}>
        <div className="relative">
          <ul onClick={() => setActive(!active)} className={'nav_mobile_burger_overlay'}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <nav>
            <ul className="flex flex-col absolute left-[30px] top-[80px] gap-[30px]">
              <li className='cursor-pointer'>
                <Link
                  onClick={onClickNavItem}
                  className={
                    location.pathname === '/'
                      ? 'text-orange text-[20px]'
                      : 'hover:text-orange text-[20px]'
                  }
                  to="/">
                  Главная
                </Link>
              </li>
              <li className="cursor-pointer">
                <Scroll to="aboutUs" spy={true} smooth={true} duration={500}>
                  <Link
                    onClick={onClickNavItem}
                    className="hover:text-orange text-[20px]"
                    to="/#aboutUs">
                    О компании
                  </Link>
                </Scroll>
              </li>
              <li className="cursor-pointer">
                <Link
                  onClick={onClickNavItem}
                  className={
                    location.pathname === '/reviews'
                      ? 'text-orange text-[20px]'
                      : 'hover:text-orange text-[20px]'
                  }
                  to="/reviews">
                  Отзывы
                </Link>
              </li>
              <li className="cursor-pointer">
                <Scroll to="partnersAndDealers" spy={true} smooth={true} duration={500}>
                  <Link
                    onClick={onClickNavItem}
                    className="hover:text-orange text-[20px]"
                    to="/#partnersAndDealers">
                    Партнёры
                  </Link>
                </Scroll>
              </li>
              <li className="cursor-pointer">
                <Link
                  onClick={onClickNavItem}
                  className={
                    location.pathname === '/achievements'
                      ? 'text-orange text-[20px]'
                      : 'hover:text-orange text-[20px]'
                  }
                  to="/achievements">
                  Достижения
                </Link>
              </li>
              <li className="cursor-pointer">
                <Scroll to="partnersAndDealers" spy={true} smooth={true} duration={500}>
                  <Link
                    onClick={onClickNavItem}
                    className="hover:text-orange text-[20px]"
                    to="/#partnersAndDealers">
                    Дилеры
                  </Link>
                </Scroll>
              </li>
              <li className="cursor-pointer">
                <Link
                  onClick={onClickNavItem}
                  className={
                    location.pathname === '/catalog'
                      ? 'text-orange text-[20px]'
                      : 'hover:text-orange text-[20px]'
                  }
                  to="/catalog">
                  Продукция
                </Link>
              </li>
              {/* <li>Контакты</li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
