import { useState } from 'react';
import style from '../../../app/Css/Header/header.module.css';
import MenuCategory from '../MenuCategory';

const BurgerBlock = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={style.burger_block}>
      <div onClick={() => setVisible(!visible)} className={style.burger_block}>
        <div className={style.burger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Каталог товаров</p>
      </div>
      {visible && <MenuCategory setVisible={setVisible}/>}
    </div>
  );
};

export default BurgerBlock;
