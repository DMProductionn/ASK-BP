import { useState, useEffect } from 'react';
import style from '../../../../app/Css/Sliders/sliders.module.css';

const SliderMain = () => {
  const images = [
    './img/others/main-slide-1.jpg',
    './img/others/main-slide-2.jpg',
    './img/others/main-slide-2.jpg',
  ];

  const texts = ['Антикоррозионная защита', 'Модифицированные клеи', 'Нефтяная промышленность'];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 2000);

    return () => clearInterval(intervalId);
  }, [isTransitioning]);

  return (
    <div className="relative" style={{ textAlign: 'center' }}>
      <div
        style={{ wordBreak: 'break-word' }}
        className={`${style.slide} w-full max-w-[580px] h-[490px] relative  ${
          isTransitioning ? style.fade : ''
        }`}>
        <div
          className={`${style.slide} ${style.slide_main} w-[580px] h-[490px] ${
            isTransitioning ? `${style.fade}` : ''
          }`}>
          <img
            className="w-full h-full object-cover"
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
          />
          <p className={style.text}>{texts[currentIndex]}</p>
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
    </div>
  );
};

export default SliderMain;
