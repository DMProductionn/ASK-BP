import { Helmet } from 'react-helmet';
import style from '../app/Css/Home/news.module.css';
import useGetNewsDetail from '../app/hooks/News/useGetNewsDetail';
import { useParams } from 'react-router-dom';
const News = () => {
  const { newsId } = useParams();
  const id = Number(newsId);
  const { data: newsData } = useGetNewsDetail(id);

  return (
    <>
      <section className={style.section_news_title + 'px-[15px]'}>
        <div className="max-w-[1000px] mb-[15px] w-full mx-auto overflow-auto break-words">
          <div className="relative">
            <h1 className="text-[30px] font-black">{newsData?.name}</h1>
            <p className="mb-[10px] font-[600]">{newsData?.created_at}</p>
          </div>
          <p>{newsData?.text}</p>
        </div>
        <div className="flex justify-center">
          <img src={newsData?.img} alt="news" />
        </div>
      </section>
      <Helmet>
        <title>{newsData?.name}</title>
        <meta name="description" content={newsData?.text} />
      </Helmet>
    </>
  );
};

export default News;
