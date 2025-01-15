import { useEffect, useState } from 'react';
import style from '../../../../app/Css/Sliders/sliders.module.css';

const SlidersTwoSmall = () => {
  const images = [
    './img/others/small-slide-1.jpg',
    './img/others/small-slide-2.jpg',
    './img/others/small-slide-3.jpg',
  ];

  const images_two = [
    './img/others/medium-slide-2.jpg',
    './img/others/small-slide-5.jpg',
    './img/others/small-slide-5.jpg',
  ];

  const texts = [
    'Антикоррозионная защита',
    'Модифицированные клеи',
    'Нефтяная промышленность',
  ];

  const texts_two = [
    'Антикоррозионная защита',
    'Модифицированные клеи',
    'Нефтяная промышленность',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
  const [isTransitioningTwo, setIsTransitioningTwo] = useState(false);

  const nextSlide = () => {
    if (isTransitioningTwo) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 700);
  };

  const nextSlideTwo = () => {
    if (isTransitioningTwo) return;
    setIsTransitioningTwo(true);

    setTimeout(() => {
      setCurrentIndexTwo((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioningTwo(false);
    }, 700);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 7000);

    return () => clearInterval(intervalId);
  }, [isTransitioning]);

  useEffect(() => {
    const intervalIdTwo = setInterval(nextSlideTwo, 7000);
    return () => clearInterval(intervalIdTwo);
  }, [isTransitioningTwo]);

  return (
    <div className={style.sliders_small}>
      <div className="relative" style={{ textAlign: 'center' }}>
        <div
          className={`${style.slide} w-[310px] h-[235px] ${
            isTransitioning ? `${style.fade}` : ''
          }`}>
          <img
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}}`}
          />
          <p className='absolute left-[20px] text-start top-[20px] text-white font-medium text-[24px] pr-[20px]'>{texts_two[currentIndex]}</p>
        </div>
        <div>
          <button
            className="absolute bottom-0 rounded-tr-[4px] rounded-none left-0 w-[60px] h-[58px] flex items-center justify-center bg-black"
            onClick={nextSlide}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12L19 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative" style={{ textAlign: 'center' }}>
        <div
          className={`${style.slide} w-[310px] h-[235px] ${
            isTransitioningTwo ? `${style.fade}` : ''
          }`}>
          <img
            className="w-full h-full object-cover"
            src={images_two[currentIndexTwo]}
            alt={`Slide ${currentIndexTwo + 1}}`}
          />
          <p className='absolute left-[20px] text-start top-[20px] text-white font-medium text-[24px] pr-[20px]'>{texts[currentIndexTwo]}</p>
        </div>
        <div>
          <button
            className="absolute bottom-0 rounded-tr-[4px] rounded-none left-0 w-[60px] h-[58px] flex items-center justify-center bg-black"
            onClick={nextSlideTwo}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5 12L19 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlidersTwoSmall;
