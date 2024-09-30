import useGetAhievements from '../app/hooks/Achievements/useGetAchievements';
import { TypeAchievements } from '../app/types/achievements.type';
import Loader from '../shared/Loader';

const Achievements = () => {
  const { data: achievementsData, isLoading } = useGetAhievements();

  return (
    <>
      <h1 className="font-bold text-[30px] w-full text-center mb-[45px]">Наши Достижения</h1>
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        {isLoading ? (
          <div className='w-full h-full flex justify-center items-center min-h-[300px]'><Loader /></div>
        ) : (
          achievementsData?.map((achievement: TypeAchievements) => (
            <img
              key={achievement.id}
              className="max-w-[1000px] w-full h-auto"
              src={achievement.img}
              alt="achievement"
            />
          ))
        )}
      </div>
    </>
  );
};

export default Achievements;
