import { useParams } from 'react-router-dom';
import Loader from '../shared/Loader';
import useGetProductDetail from '../app/hooks/Product/useGetProductDetail';
import { Helmet } from 'react-helmet';

const Product = () => {
  const { productId } = useParams();
  const id = String(productId);
  const { data: productData, isLoading } = useGetProductDetail(id);

  return (
    <div className="flex flex-col items-center bg-white py-[80px] px-[15px]">
      {isLoading ? (
        <div className="w-full flex justify-center items-center min-h-[360px]">
          <Loader />
        </div>
      ) : (
        <>
          <h1 className="mb-[20px] text-[30px] font-bold max-w-[600px] w-full mx-auto break-words text-center">{productData?.name}</h1>
          <div className="max-w-[360px] w-full max-h-[360px] h-full mb-[20px]">
            <img className="w-full h-full object-cover" src={productData?.img} alt="product" />
          </div>
          {productData?.description && <p className='max-w-[600px] w-full text-center mx-auto break-words'>{productData?.description}</p>}
        </>
      )}
      <Helmet>
        <title>{productData?.name}</title>
        <meta name="description" content={productData?.description} />
      </Helmet>
    </div>
  );
};

export default Product;
