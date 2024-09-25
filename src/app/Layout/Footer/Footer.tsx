const Footer = () => {
  return (
    <footer className="bg-gray min-h-[330px] h-full flex justify-center items-center text-white text-[16px] p-[15px]">
      <div className="flex justify-around gap-[120px] ">
        <ul className="flex flex-col gap-[15px]">
          <li>Редукторные масла</li>
          <li>Смазки</li>
          <li>Антикоррозионная защита</li>
          <li>СОЖ</li>
          <li>Модифицированные клеи</li>
          <li>Нефтяная промышленность</li>
        </ul>
        <ul className="flex flex-col gap-[15px]">
          <li>Сталелитейная промышленность</li>
          <li>Стекольная промышленность</li>
          <li>Целлюлозно-бумажная промышленность</li>
          <li>Моторные масла</li>
          <li>
            Масла для закрытых зубчатых передач <br /> и высоконагруженных подшипников
          </li>
        </ul>
        <nav className="flex flex-col gap-[15px]">
          <li>О компании</li>
          <li>Контакты</li>
          <li>Достижения</li>
          <li>Дилеры</li>
          <li>Отзывы</li>
          <li>Партнёры</li>
        </nav>
        <ul className="flex flex-col gap-[30px]">
          <li>Logo</li>
          <li>+7(499) 703-34-15</li>
          <li>Соглашение пользователя <br /> «Copyright © ASK-BP {new Date().getFullYear()}»</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;