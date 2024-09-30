const CompletedCall = ({onClose}: {onClose: () => void}) => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-[60px] bg-white max-w-[620px] max-h-[570px] relative">
      <button
        className="bg-transparent hover:bg-transparent absolute top-[15px] right-[15px]"
        onClick={onClose}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 6L6 18"
            stroke="#8A8A8A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#8A8A8A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <p className="text-black w-full text-center text-[24px] font-medium">Ваша заявка принята</p>
      <p className="text-black font-medium text-center text-[18px]">
        Спасибо за заявку! Мы свяжемся <br /> с вами в ближайщее время
      </p>
      <button className="h-[50px] w-[170px]">НА ГЛАВНУЮ</button>
    </div>
  );
};

export default CompletedCall;
