import style from '../../../app/Css/Header/header.module.css'
import MenuCategory from '../MenuCategory'


const BurgerBlock = () => {
  return (
    <div className={style.burger_block}>
      <div className={style.burger}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p>Каталог товаров</p>
      <MenuCategory />
    </div>
  )
}

export default BurgerBlock