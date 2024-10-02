import { useState } from 'react';
import style from '../../../app/Css/Header/header.module.css';
import { Link } from 'react-router-dom';
import useGetCategory from '../../../app/hooks/Category/useGetCategory';
import { useDispatch } from 'react-redux';
import { setSubCategory } from '../../../app/redux/Slices/category.slice';
import { setLimit } from '../../../app/redux/Slices/limit.slice';

const MenuCategory = ({setVisible} : {setVisible: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const [visibleSubCategoryIndex, setVisibleSubCategoryIndex] = useState<null | number>(null);
  const dispatch = useDispatch();

  const { data: CategoriesData } = useGetCategory();

  const handleMouseEnter = (index: null | number) => {
    setVisibleSubCategoryIndex(index);
  };

  const handleMouseLeave = () => {
    setVisibleSubCategoryIndex(null);
  };

  const onClickCategory = (sab_category: string, sub_id: number) => {
    dispatch(setSubCategory({ id: sub_id, title: sab_category }));
    dispatch(setLimit(6));
  };

  return (
    <div className={style.menu_category}>
      <div className={`${style.menu_block} flex flex-col justify-between w-[310px]`}>
        <div>
          {CategoriesData?.map((category, index) => (
            <div
              className="relative"
              key={category.id}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}>
              <Link
                to={`/catalog/parent-category/${category.id}`}
                onClick={() => onClickCategory(category.name, category.id)}
                className={style.category_btn}>
                <p className={style.category_title_parent}>{category.name}</p>
                {category.subcategories.length > 0 && (
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </Link>
              {visibleSubCategoryIndex === index && category.subcategories.length > 0 && (
                <div className={`${style.sub_category} flex`}>
                  {category.subcategories.map((subItem) => (
                    <Link
                      onClick={() => {onClickCategory(subItem.name, subItem.id), setVisible(false)}}
                      to={`/catalog/sub-category/${subItem.id}`}
                      key={subItem.id}
                      className={style.sub_category_item}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
