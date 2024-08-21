import React from 'react';
import HammerIcon from '/src/assets/hammer-icon.svg';
import HandDepositIcon from '/src/assets/hand-deposit-icon.svg';
import ChatIcon from '/src/assets/chats-circle-icon.svg';

const HeroSection = () => {
  return (
    <section className="hero-section bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/src/assets/hero.jpg)', height: '560px', width: '100vw' }}>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4 hero-content">
        <h1 className="hero-heading">Waarmee kunnen we je helpen?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mt-2 hero-buttons">
          <button className="hero-button">
            <img src={HammerIcon} alt="Repair" className="w-6 h-6 mr-2" />
            <span>Reparatie melden</span>
          </button>
          <button className="hero-button">
            <img src={HandDepositIcon} alt="Payment" className="w-6 h-6 mr-2" />
            <span>Huur betalen</span>
          </button>
          <button className="hero-button">
            <img src={ChatIcon} alt="Contact" className="w-6 h-6 mr-2" />
            <span>Contact</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
