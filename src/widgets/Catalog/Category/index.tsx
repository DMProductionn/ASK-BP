import { useState } from 'react';
import {
  getParentCategoryProduct,
  getSubCategoryProduct,
} from '../../../app/services/product.service';
import { useDispatch, useSelector } from 'react-redux';
import { setProductIsArrayCategory } from '../../../app/redux/Slices/product.slice';
import { RootState } from '../../../app/redux/store';
import { TypeCategories } from '../../../app/types/category.type';
import { setActiveParentCategory } from '../../../app/redux/Slices/category.slice';
import { setLimit } from '../../../app/redux/Slices/limit.slice';

const Category = ({
  setToggleRequest,
  CategoriesData,
}: {
  setToggleRequest: (toggleRequest: string) => void;
  CategoriesData: TypeCategories[] | undefined;
}) => {
  const [visibleSubCategoryIndex, setVisibleSubCategoryIndex] = useState<null | number>(null);
  const { limit } = useSelector((state: RootState) => state.limitSlice);
  const { activeParentCategory } = useSelector((state: RootState) => state.categorySlice);
  const dispatch = useDispatch();

  const handleMouseEnter = (index: null | number) => {
    setVisibleSubCategoryIndex(index);
  };

  const handleMouseLeave = () => {
    setVisibleSubCategoryIndex(null);
  };

  const onClickCategoryParent = (id: number, index: number) => {
    dispatch(setLimit(6));
    setToggleRequest('parent')
    dispatch(setActiveParentCategory(index));
    getParentCategoryProduct(id, limit).then((res) => dispatch(setProductIsArrayCategory(res)));
  };

  const onClickCategorySub = (id: number, index: number) => {
    setVisibleSubCategoryIndex(null);
    dispatch(setLimit(6));
    setToggleRequest('sub')
    dispatch(setActiveParentCategory(index));
    getSubCategoryProduct(id, limit).then((res) => dispatch(setProductIsArrayCategory(res)));
  };

  return (
    <div className="w-full flex flex-wrap gap-[5px] mb-[5px]">
      {CategoriesData?.map((category, index) => (
        <div
          key={category.id}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-[410px] w-full">
          <button
            onClick={() => onClickCategoryParent(category.id, index)}
            className={
              activeParentCategory === index
                ? 'bg-orange rounded-none text-white w-full px-[10px] h-[60px]'
                : 'w-full hover:text-white bg-white text-black px-[10px] h-[60px] rounded-none'
            }>
            {category.name}
          </button>
          {visibleSubCategoryIndex === index && (
            <div className={`absolute top-[60px] z-[999] left-0 w-full bg-gray text-white flex`}>
              {category.subcategories.map((subItem) => (
                <button
                  onClick={() => onClickCategorySub(subItem.id, index)}
                  key={subItem.id}
                  className={`w-full text-white bg-gray px-[10px] h-[60px] rounded-none`}>
                  {subItem.name}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Category;
