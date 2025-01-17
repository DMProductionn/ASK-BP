import { useNavigate } from 'react-router-dom';
import { TypeProduct } from '../../../app/types/product.type';
import { useDispatch } from 'react-redux';
import { setProduct } from '../../../app/redux/Slices/product.slice';

const Product = ({ ...product }: {product: TypeProduct}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickProduct = () => {
    dispatch(setProduct(product?.product));
    navigate(`/catalog/product/${product?.product?.id}`)
  }

  return (
    <div className="w-[310px] flex flex-col justify-between h-[320px] bg-[#F2F5F7]">
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-[200px] h-[200px]">
          <img className="w-full h-full object-cover" src={product?.product?.img} alt="product" />
        </div>
      </div>
      <button onClick={onClickProduct} className="h-[50px] w-full rounded-none rounded-b-[4px] bg-orange hover:bg-black transition-all">{product?.product?.name}</button>
    </div>
  );
};

export default Product;
