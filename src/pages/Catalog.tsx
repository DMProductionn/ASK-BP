import ShowMore from '../features/ShowMore';
import Category from '../widgets/Catalog/Category';
import Product from '../widgets/Catalog/Product';

const Catalog = () => {
  return (
    <>
      <h1 className="text-[30px] font-bold mb-[30px]">Каталог</h1>
      <Category />
      <div className="w-full bg-white h-auto gap-[20px] pt-[60px] pb-[40px] text-center">
        <div className="max-w-[970px] w-full mx-auto flex flex-wrap gap-[20px]">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <ShowMore />
      </div>
    </>
  );
};

export default Catalog;
