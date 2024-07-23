import './App.css';
import React, { useState, useEffect } from "react";
import TopSection from './components/TopSection';
import Header from "./components/Header";
import Supporter from "./components/Supporter";
import CleanFoam from "./components/CleanFoam";
import Easy from "./components/Easy";
import HeartFelt from "./components/HeartFelt";
import Spray from "./components/Spray";
import Magic from "./components/Magic";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";
import BackToTopButton from "./components/BackToTopButton";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <TopSection />
      <Header />
      <Supporter />
      <CleanFoam />
      <Easy />
      <HeartFelt />
      <Spray />
      <Magic />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;
