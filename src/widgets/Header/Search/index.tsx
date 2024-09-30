import { useEffect, useState } from 'react';
import style from '../../../app/Css/Header/header.module.css';
import NoResults from './NoResults';
import { getSearchProduct } from '../../../app/services/product.service';
import { TypeProductSearch } from '../../../app/types/product.type';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [valueProductName, setValueProductName] = useState('');
  const [productsSearch, setProductsSearch] = useState<TypeProductSearch[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsSuccess(false);
    const id = setTimeout(() => {
      if (valueProductName) {
        getSearchProduct(valueProductName).then((res) => {
          setProductsSearch(res);
          setIsSuccess(true);
        });
      }
    }, 500);

    return () => {
      clearTimeout(id);
    };
  }, [valueProductName]);

  const onClickProduct = (product: TypeProductSearch) => {
    navigate(`/catalog/product/${product.id}`);
  };

  return (
    <div className="w-[310px] h-[50px] bg-white rounded-[4px] flex items-center pl-[15px] pr-[10px] gap-[8px] relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke="#8A8A8A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.0004 21L16.6504 16.65"
          stroke="#8A8A8A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        value={valueProductName}
        onChange={(e) => setValueProductName(e.target.value)}
        className="outline-none text-[#8A8A8A]"
        type="text"
        placeholder="Поиск по каталогу"
        onFocus={() =>
          setTimeout(() => {
            setIsFocused(true);
          }, 100)
        }
        onBlur={() =>
          setTimeout(() => {
            setIsFocused(false);
          }, 100)
        }
      />
      {isFocused && isSuccess && productsSearch.length === 0 && valueProductName && <NoResults />}
      <div className={style.search}>
        {isFocused &&
          isSuccess &&
          productsSearch.length > 0 &&
          valueProductName &&
          productsSearch.map((product) => (
            <div
              onClick={() => onClickProduct(product)}
              key={product.id}
              className="flex items-center gap-[10px] hover:bg-[#F2F5F7] transition p-[10px] cursor-pointer">
              <div className="w-[60px] h-[60px]">
                <img className="h-full w-full object-cover" src={product.img} alt="product" />
              </div>
              <p className="font-medium text-black text-[14px]">{product.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
