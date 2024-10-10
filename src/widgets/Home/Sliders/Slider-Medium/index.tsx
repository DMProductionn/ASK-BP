import { useEffect, useState } from 'react';
import style from '../../../../app/Css/Sliders/sliders.module.css';

const SliderMedium = () => {
  const images = [
    './img/others/medium-slide-1.jpg',
    './img/others/medium-slide-3.jpg',
    './img/others/small-slide-4.jpg',
  ];

  const texts = [
    'Антикоррозионная защита',
    'Модифицированные клеи',
    'Нефтяная промышленность',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false); 
    }, 700); 
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000); 

    return () => clearInterval(intervalId);
  }, [isTransitioning]); 

  return (
    <>
      <div className={`${style.medium} relative`} style={{ textAlign: 'center' }}>
        <div
        style={{wordBreak: 'break-word'}}
          className={`${style.slide} ${style.slide_medium} relative w-[310px] h-[490px] ${
            isTransitioning ? `${style.fade}` : ''
          }`}>
          <img
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}}`}
          />
          <p className='absolute left-[20px] text-start top-[20px] text-white font-medium text-[24px] pr-[20px]'>{texts[currentIndex]}</p>
        </div>
        <div>
          <button
            className="absolute rounded-tr-[4px] rounded-none bottom-0 left-0 w-[60px] h-[58px] flex items-center justify-center bg-black"
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
    </>
  );
};

export default SliderMedium;
