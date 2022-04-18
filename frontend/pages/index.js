import styles from '../styles/Home.module.scss';

import { Navbar } from '../components';
import { About, Footer, Header, Skills, Testimonial, Work } from '../containers';

const Home = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
