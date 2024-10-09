import { useDispatch, useSelector } from 'react-redux';
import {
  getParentCategoryProduct,
  getSubCategoryProduct,
} from '../../app/services/product.service';
import { RootState } from '../../app/redux/store';
import { setProductIsArray, setProductIsArrayCategory } from '../../app/redux/Slices/product.slice';
import { setLimit } from '../../app/redux/Slices/limit.slice';
import { useLocation } from 'react-router-dom';

const ShowMore = ({
  toggleRequest,
  setIsLoadingLimit,
  firstCategoryId,
}: {
  toggleRequest: string;
  setIsLoadingLimit: (arg0: boolean) => void;
  firstCategoryId: number | null;
}) => {
  const { limit } = useSelector((state: RootState) => state.limitSlice);
  const { subCategory } = useSelector((state: RootState) => state.categorySlice);
  const dispatch = useDispatch();
  const location = useLocation();

  const onClickShowMore = () => {
    if (toggleRequest === 'sub') {
      setIsLoadingLimit(true);
      getSubCategoryProduct(subCategory?.id, limit + 6)
        .then((res) => {
          dispatch(setProductIsArray(res));
          dispatch(setProductIsArrayCategory(res));
          dispatch(setLimit(limit + 6));
        })
        .finally(() => setIsLoadingLimit(false));
    } else if (toggleRequest === 'parent') {
      setIsLoadingLimit(true);
      getParentCategoryProduct(subCategory?.id, limit + 6)
        .then((res) => {
          dispatch(setProductIsArray(res));
          dispatch(setProductIsArrayCategory(res));
          dispatch(setLimit(limit + 6));
        })
        .finally(() => setIsLoadingLimit(false));
    }

    if (location.pathname === '/catalog') {
      setIsLoadingLimit(true);
      getParentCategoryProduct(firstCategoryId, limit + 6)
        .then((res) => {
          dispatch(setProductIsArray(res));
          dispatch(setProductIsArrayCategory(res));
          dispatch(setLimit(limit + 6));
        })
        .finally(() => setIsLoadingLimit(false));
    }
  };

  return (
    <button
      onClick={onClickShowMore}
      className="max-w-[970px] w-full bg-transparent border-[1px] hover:bg-transparent border-[#DEDBDB] text-black flex justify-center items-center mx-auto h-[60px] mt-[20px]">
      <svg
        className="mr-[12px]"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M23 4V10H17"
          stroke="#F05A00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.49 14.9999C19.8416 16.8403 18.6127 18.4201 16.9883 19.5013C15.364 20.5825 13.4323 21.1065 11.4843 20.9944C9.53625 20.8823 7.67742 20.1401 6.18787 18.8797C4.69832 17.6193 3.65875 15.9089 3.22578 14.0063C2.79281 12.1037 2.98991 10.1119 3.78738 8.33105C4.58484 6.55019 5.93947 5.07674 7.64717 4.13271C9.35486 3.18868 11.3231 2.82521 13.2553 3.09707C15.1875 3.36892 16.9791 4.26137 18.36 5.63995L23 9.99995"
          stroke="#F05A00"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Показать еще
    </button>
  );
};

export default ShowMore;
