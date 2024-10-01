import { Element } from 'react-scroll';
import style from '../../../app/Css/Home/partners_and_dealers.module.css';

const PartnersAndDealers = () => {
  return (
    <Element name='partnersAndDealers' id='partnersAndDealers'>
      <section className={style.section}>
        <div>
          <p className="font-bold text-[24px] w-full text-center mb-[20px]">Наши партнёры</p>
          <ol className={style.ol}>
            <li className="list-disc leading-[200%]">ООО "Пермский картон" г. Пермь,</li>
            <li className="list-disc leading-[200%]">
              ОАО "Комбинат магнезит" г.Сатка (Челябинская область),
            </li>
            <li className="list-disc leading-[200%]">"Факел" (Удмуртская республика),</li>
            <li className="list-disc leading-[200%]">"Стеклотех" г. Тюмень,</li>
            <li className="list-disc leading-[200%]">
              Коркинский стеклотарный завод г. Коркино (Челябинская область),
            </li>
            <li className="list-disc leading-[200%]">
              Коркинский завод теплоизоляционных материалов г. Коркино (Челябинская область)
            </li>
            <li className="list-disc leading-[200%]">АО Гипсополимер г. Пермь,</li>
            <li className="list-disc leading-[200%]">ООО ЛЛК Интернешнл "Лукойл" г. Пермь,</li>
            <li className="list-disc leading-[200%]">ПЗСП г. Пермь.</li>
          </ol>
        </div>
        <div className={style.line}></div>
        <div>
          <p className="font-bold text-[24px] w-full text-center mb-[20px]">Дилеры</p>
          <ol className={style.ol}>
            <li className="list-disc leading-[200%]">
              ООО Техкомсервис г.Пермь ул.Пермская 8. тел. +7(342) 237-68-00
            </li>
            <li className="list-disc leading-[200%]">
              ЗАО Уральский Промышленный Центр г. Екатеринбург ул.Татищева 53 тел. +7(343) 345-94-84
            </li>
            <li className="list-disc leading-[200%]">
              ООО ТД Инвекс г.Екатеринбург ул.Артинская 39 тел. +7(343) 288-79-90
            </li>
          </ol>
        </div>
      </section>
    </Element>
  );
};

export default PartnersAndDealers;
