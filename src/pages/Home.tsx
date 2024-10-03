import { Helmet } from 'react-helmet';
import AboutUs from '../widgets/Home/AboutUs';
import News from '../widgets/Home/News/News';
import PartnersAndDealers from '../widgets/Home/PartnersAndDealers';

const Home = () => {
  return (
    <>
      <AboutUs />
      <News />
      <PartnersAndDealers />
      <Helmet>
        <title>ASK-BP</title>
        <meta
          name="description"
          content="Качественные смазочные материалы для надежной защиты узлов и деталей вашего оборудования. Обеспечьте долговечность и эффективность работы вашего оборудования."
        />
      </Helmet>
    </>
  );
};

export default Home;
