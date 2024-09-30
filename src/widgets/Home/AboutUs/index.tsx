import { Element } from "react-scroll";

const AboutUs = () => {
  return (
    <Element name="aboutUs" id="aboutUs">
    <div className="flex justify-between gap-[130px]">
      <img src="./img/others/1.jpg" alt="" />
      <div>
        <h2 className="mb-[25px] text-[30px] font-bold">О нас</h2>
        <p className="mb-[40px]">
          Торговое или промышленное предприятие, торгово-промышленное объединение предпринимателей,
          форма организации предприятия, при которой его правосубъектность отличается
          от правосубъектности лиц, в нем участвующих. Торговое или промышленное предприятие,
          торгово-промышленное объединение предпринимателей, форма организации предприятия
        </p>
        <button className="px-[30px] py-[12px]">ПЕРЕЙТИ В КАТАЛОГ</button>
      </div>
    </div>
    </Element>
  );
};

export default AboutUs;
