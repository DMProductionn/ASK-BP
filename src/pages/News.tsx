import { useLocation } from 'react-router-dom';
import style from '../app/Css/News/news.module.css';
import useGetNewsDetail from '../app/hooks/News/useGetNewsDetail';
import Loader from '../shared/Loader';

const News = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const id = Number(pathSegments[pathSegments.length - 1]);
  const { data: newsData, isLoading } = useGetNewsDetail(id);

  return (
    <>
      <section className={style.section_news_title}>
        {isLoading ? (
          <div className="w-full h-full flex justify-center items-center min-h-[360px]">
            <Loader />
          </div>
        ) : (
          <>
            <div className="max-w-[650px] overflow-auto break-words">
              <div className="relative">
                <h1 className="text-[30px] font-black">{newsData?.name}</h1>
                <p className="mb-[10px] font-[600]">{newsData?.created_at}</p>
              </div>
              <p>{newsData?.text}</p>
            </div>
            <div className="flex justify-center max-w-[450px] w-full max-h-[450px] h-full">
              <img className={style.news_img} src={newsData?.img} alt="news" />
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default News;
