import Product from '../widgets/Catalog/Product';
import ShowMore from '../features/ShowMore';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/redux/store';
import { useEffect, useState } from 'react';
import { getSubCategoryProduct } from '../app/services/product.service';
import { setProductIsArray } from '../app/redux/Slices/product.slice';
import Loader from '../shared/Loader';
import style from '../app/Css/Catalog/catalog.module.css';


const CatalogWithSubCategory = () => {
  const [toggleRequest, _] = useState('sub');
  const { limit } = useSelector((state: RootState) => state.limitSlice);
  const { subCategory } = useSelector((state: RootState) => state.categorySlice);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLimit, setIsLoadingLimit] = useState(false);
  const { productIsArray } = useSelector((state: RootState) => state.productSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    getSubCategoryProduct(subCategory?.id, limit)
      .then((res) => dispatch(setProductIsArray(res)))
      .finally(() => setIsLoading(false));
  }, [subCategory?.id]);

  return (
    <>
      <h1 className="text-center w-full text-[30px] font-medium mb-[30px]">{subCategory?.title}</h1>
      <div className="w-full bg-white h-auto gap-[20px] pt-[60px] pb-[40px] text-center">
        {isLoading && (
          <div className="w-full h-full flex justify-center items-center min-h-[300px]">
            <Loader />
          </div>
        )}
        {productIsArray?.products?.length === 0 ? (
          <div className="w-full h-full flex justify-center items-center min-h-[300px] text-[24px] font-medium">
            <p>Нет товаров</p>
          </div>
        ) : null}
        <div className={style.catalog}>
          {productIsArray?.products?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
        {isLoadingLimit ? <div className='mt-[50px]'><Loader /></div> : productIsArray?.has_more && <ShowMore toggleRequest={toggleRequest} setIsLoadingLimit={setIsLoadingLimit}/>}
      </div>
    </>
  );
};

export default CatalogWithSubCategory;
