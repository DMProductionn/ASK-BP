import style from '../../../app/Css/Header/header.module.css';

const MenuCategory = () => {
  return (
    <div className={style.menu_category}>
      <div className="flex flex-col justify-between w-[310px]">
        <button className={style.category_btn}>
          Малярные товары
          <svg
            className={style.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
            className={style.arrow_path}
              d="M9 5L16 12L9 19"
              stroke="black"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={style.category_btn}>
          Малярные товары
          <svg
            className={style.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
            className={style.arrow_path}
              d="M9 5L16 12L9 19"
              stroke="black"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className={style.category_btn}>
          Малярные товары
          <svg
            className={style.arrow}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
            className={style.arrow_path}
              d="M9 5L16 12L9 19"
              stroke="black"
              stroke-width="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
