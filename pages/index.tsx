import Head from 'next/head';
import Home from '../components/home';
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage = () => (
  <>
    <Head>
      <title>Ian Solano-Kamaiko</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <Home />
    <Footer />
  </>
);

export default HomePage;
