import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import style from '../../../app/Css/Home/aboutUs.module.css'

const AboutUs = () => {
  return (
    <Element name="aboutUs" id="aboutUs">
      <div className={style.aboutUs}>
        <div className={style.img_block}><img className='w-full h-full object-cover' src="./img/others/1.jpg" alt="" /></div>
        <div className={style.text_block}>
          <h2 className="mb-[25px] text-[30px] font-bold">О нас</h2>
          <p className="mb-[40px]">
            Торговое или промышленное предприятие, торгово-промышленное объединение
            предпринимателей, форма организации предприятия, при которой его правосубъектность
            отличается от правосубъектности лиц, в нем участвующих. Торговое или промышленное
            предприятие, торгово-промышленное объединение предпринимателей, форма организации
            предприятия
          </p>
          <Link to="/catalog">
            <button className="px-[30px] py-[12px] text-white bg-orange hover:bg-black transition-all">ПЕРЕЙТИ В КАТАЛОГ</button>
          </Link>
        </div>
      </div>
    </Element>
  );
};

export default AboutUs;
