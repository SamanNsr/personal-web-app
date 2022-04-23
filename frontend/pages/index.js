import styles from '../styles/Home.module.scss';

import { Navbar } from '../components';
import { About, Footer, Header, Skills, Testimonial, Work } from '../containers';
import Head from 'next/head';

const Home = () => {
  return (
    <div className={styles.app}>
      <div>
        <Head>
          <title>Saman</title>
          <link rel="icon" href="./logo.svg"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      </div>
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
