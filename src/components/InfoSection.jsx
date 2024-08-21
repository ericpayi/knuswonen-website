import React from 'react';
import '../InfoSection.css';
import BackgroundSVG from '../assets/info-sec.svg';

const InfoSection = () => {
  return (
    <section className="info-section">
      <div className="info-container">
        <div className="info-image-container">
          <img src="/src/assets/info-sec.png" alt="Housing" className="info-image" />
          <img src={BackgroundSVG} alt="Background SVG" className="background-svg" />
        </div>
        <div className="info-text">
          <h2>We verbeteren onze woningen</h2>
          <p>
            Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. 
            We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. 
            Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot.
            Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
          </p>
          <p>Wilt u meer weten over onze energiebesparende maatregelen?</p>
          <button className="gradient-button-info">Lees meer</button>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
