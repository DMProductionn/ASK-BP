import { useState } from "react";
import style from '../../../../app/Css/Sliders/sliders.module.css';


const SlidersTwoSmall = () => {

  const images = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ];

  const images_two = [
    'https://via.placeholder.com/600x300?text=Slide+1',
    'https://via.placeholder.com/600x300?text=Slide+2',
    'https://via.placeholder.com/600x300?text=Slide+3',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [currentIndexTwo, setCurrentIndexTwo] = useState(0);
  const [isTransitioningTwo, setIsTransitioningTwo] = useState(false);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlideTwo = () => {
    if (isTransitioningTwo) return;
    setIsTransitioningTwo(true);
    setCurrentIndexTwo((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsTransitioningTwo(false), 500);
  };

  return (
    <div className="flex flex-col gap-[20px]">

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
  )
}

export default SlidersTwoSmall