import { useLocation } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { Link as Scroll } from 'react-scroll';
import style from '../../../app/Css/Header/nav.module.css'

const Nav = () => {
  const location = useLocation();

  return (
    <nav className={style.nav}>
      <ul className="flex gap-[50px]">
        <li className="cursor-pointer">
          <Scroll to="aboutUs" spy={true} smooth={true} duration={500}>
            <Link to="/#aboutUs">О компании</Link>
          </Scroll>
        </li>
        <li className="cursor-pointer">
          <Link className={location.pathname === '/reviews' ? 'text-orange' : ''} to="/reviews">Отзывы</Link>
        </li>
        <li className="cursor-pointer">
          <Scroll to="partnersAndDealers" spy={true} smooth={true} duration={500}>
            <Link to="/#partnersAndDealers">Партнёры</Link>
          </Scroll>
        </li>
        <li className="cursor-pointer">
          <Link className={location.pathname === '/achievements' ? 'text-orange' : ''} to="/achievements">Достижения</Link>
        </li>
        <li className="cursor-pointer">
          <Scroll to="partnersAndDealers" spy={true} smooth={true} duration={500}>
            <Link to="/#partnersAndDealers">Дилеры</Link>
          </Scroll>
        </li>
        <li className="cursor-pointer">
          <Link className={location.pathname === '/catalog' ? 'text-orange' : ''} to="/catalog">Продукция</Link>
        </li>
        {/* <li>Контакты</li> */}
      </ul>
    </nav>
  );
};

export default Nav;
