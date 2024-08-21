import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import InfoSection from './components/InfoSection';
import LatestNews from './components/LatestNews';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoSection />
      <LatestNews />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
