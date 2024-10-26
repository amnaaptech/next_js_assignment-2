// pages/index.tsx
import Head from 'next/head';
import Hero from './hero/page';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const HomePage = () => {
  return (
    <>

        <Header />
        <Hero />
        <Footer />
    </>
  );
};

export default HomePage;
