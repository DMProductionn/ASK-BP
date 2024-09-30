import useGetProductDetail from '../app/hooks/Product/useGetProductDetail';
import { useLocation } from 'react-router-dom';
import Loader from '../shared/Loader';

const Product = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const id = pathSegments[pathSegments.length - 1];

  const { data: productData, isLoading } = useGetProductDetail(id);

  return (
    <div className="flex flex-wrap justify-center gap-[150px] bg-white py-[80px]">
      {isLoading ? (
        <div className='w-full flex justify-center items-center min-h-[360px]'>
          <Loader />
        </div>
      ) : (
        <>
          <div className="w-[360px] h-[360px]">
            <img className="w-full h-full object-cover" src={productData?.img} alt="product" />
          </div>
          <div className="w-[40%]">
            <h1 className="mb-[40px] text-[30px] font-bold">{productData?.name}</h1>
            <p>{productData?.description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
