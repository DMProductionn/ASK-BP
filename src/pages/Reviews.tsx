import { Helmet } from 'react-helmet';
import useGetReaviews from '../app/hooks/Reaviews/useGetReaviews';
import { TypeReaviews } from '../app/types/reaviews.type';
import Loader from '../shared/Loader';

const Reviews = () => {
  const { data: reaviewsData, isLoading } = useGetReaviews();

  return (
    <>
      <h1 className="font-bold text-[30px] w-full text-center mb-[45px]">Отзывы</h1>
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center min-h-[300px]">
            <Loader />
          </div>
        ) : (
          reaviewsData?.map((reaview: TypeReaviews) => (
            <img
              key={reaview.id}
              className="max-w-[1000px] w-full h-auto"
              src={reaview.img}
              alt="reaview"
            />
          ))
        )}
      </div>
      <Helmet>
        <title>Отзывы</title>
        <meta
          name="description"
          content="Качественные смазочные материалы для надежной защиты узлов и деталей вашего оборудования. Обеспечьте долговечность и эффективность работы вашего оборудования."
        />
      </Helmet>
    </>
  );
};

export default Reviews;
