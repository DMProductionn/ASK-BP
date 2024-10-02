import { useDispatch, useSelector } from 'react-redux';
import ShowMore from '../features/ShowMore';
import Category from '../widgets/Catalog/Category';
import Product from '../widgets/Catalog/Product';
import { RootState } from '../app/redux/store';
import { useEffect, useState } from 'react';
import Loader from '../shared/Loader';
import { getParentCategoryProduct } from '../app/services/product.service';
import { setProductIsArrayCategory } from '../app/redux/Slices/product.slice';
import useGetCategory from '../app/hooks/Category/useGetCategory';
import style from '../app/Css/Catalog/catalog.module.css';

const Catalog = () => {
  const [isLoadingLimit, setIsLoadingLimit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggleRequest, setToggleRequest] = useState('');
  const [firstCategoryId, setFirstCategoryId] = useState<number | null>(null);
  const { productIsArrayCategory } = useSelector((state: RootState) => state.productSlice);
  const dispatch = useDispatch();

  const { data: CategoriesData } = useGetCategory();

  useEffect(() => {
    if (CategoriesData && CategoriesData.length > 0) {
      setFirstCategoryId(CategoriesData[0].id);
    }
  }, [CategoriesData]);

  useEffect(() => {
    if (firstCategoryId) {
      setIsLoading(true);
      getParentCategoryProduct(firstCategoryId, 6)
        .then((res) => {
          setToggleRequest('parent');
          dispatch(setProductIsArrayCategory(res));
        })
        .finally(() => setIsLoading(false));
    }
  }, [firstCategoryId, dispatch]);

  return (
    <>
      <h1 className="text-[30px] font-bold mb-[30px]">Продукция</h1>
      <Category CategoriesData={CategoriesData} setToggleRequest={setToggleRequest} />
      <div className="w-full bg-white h-auto gap-[20px] pt-[60px] pb-[40px] text-center px-[15px]">
        {isLoading ? (
          <div className='w-full min-h-[420px] h-full flex justify-center items-center'>
            <Loader />
          </div>
        ) : (
          <div className={style.catalog}>
            {productIsArrayCategory.products?.length === 0 ? (
              <div className="w-full h-[300px] flex justify-center items-center">
                <p className="font-medium text-[20px]">Нет товаров</p>
              </div>
            ) : (
              productIsArrayCategory.products?.map((product) => (
                <Product key={product.id} product={product} />
              ))
            )}
          </div>
        )}
        {isLoadingLimit ? (
          <div className="mt-[50px]">
            <Loader />
          </div>
        ) : (
          productIsArrayCategory?.has_more && isLoading === false && (
            <ShowMore toggleRequest={toggleRequest} setIsLoadingLimit={setIsLoadingLimit} />
          )
        )}
      </div>
    </>
  );
};

export default Catalog;
