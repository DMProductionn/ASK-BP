
const CompletedCall = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center gap-[60px]">
      <p className="text-black w-full text-center text-[24px] font-medium">Ваша заявка принята</p>
      <p className="text-black font-medium text-center text-[18px]">Спасибо за заявку! Мы свяжемся <br /> с вами в ближайщее время</p>
      <button className="h-[50px] w-[170px]">НА ГЛАВНУЮ</button>
    </div>
  )
}

export default CompletedCall