import { useNavigate } from 'react-router-dom';
import { TypeNews } from '../../../../app/types/news.type';

const NewsItem = ({ item }: { item: TypeNews }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/news/${item.id}`)} className="w-[420px]">
      <div className='max-w-[420px] w-full h-[260px]'>
        <img className="cursor-pointer w-full h-full object-cover" src={item?.img} alt="news" />
      </div>
      <p className="font-bold mt-[10px]">{item?.name}</p>
      <p>{item?.created_at}</p>
    </div>
  );
};

export default NewsItem;
