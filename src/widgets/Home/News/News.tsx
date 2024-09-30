import NewsItem from './NewsItem';
import ReactPaginate from 'react-paginate';
import style from '../../../app/Css/Home/news.module.css';
import { useState } from 'react';
import useGetNewsAll from '../../../app/hooks/News/useGetNewsAll';

const News = () => {
  const { data: newsData } = useGetNewsAll();

  const [currentPage, setCurrentPage] = useState(0);
  const newsPerPage = 2;

  const indexOfLastNews = (currentPage + 1) * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = newsData?.slice(indexOfFirstNews, indexOfLastNews);
  const totalNewsCount = newsData?.length || 0;

  const handlePageClick = (data: { selected: number }) => {
    setCurrentPage(data.selected);
  };

  return (
    <div className="flex justify-between gap-[50px] my-[100px]">
      <div className="w-[460px]">
        <h3 className="text-[30px] font-bold mb-[5px]">Новости</h3>
        <p className="mb-[30px]">
          Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
          форма организации предприятия, при которой его правосубъектность отличается
          от правосубъектности лиц, в нем участвующих. Компании имеют статус юридического лица.
        </p>
      </div>
      <div className="flex flex-wrap gap-[20px] w-full relative">
        {currentNews?.map((item) => {
          return <NewsItem item={item} />;
        })}
        <div className="absolute -bottom-[70px] w-full">
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={Math.ceil(totalNewsCount / newsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={style.pagination}
            pageClassName={style.page_item}
            pageLinkClassName={style.page_link}
            previousClassName={style.page_item}
            previousLinkClassName={style.page_link}
            nextClassName={style.page_item}
            nextLinkClassName={style.page_link}
            breakClassName={style.page_item}
            breakLinkClassName={style.page_link}
            activeClassName={style.active}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
