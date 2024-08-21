import React from 'react';
import '../Newsletter.css';
import BackgroundSVG from '../assets/newsletter-sec.svg';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-text">
        <h2>We verbeteren onze woningen</h2>
        <p>
          Bij KnusWonen zetten we ons in om onze woningen energiezuiniger en duurzamer te maken. 
          We verbeteren de isolatie met dubbelglas en plaatsen moderne cv-ketels en zonnepanelen. 
          Hierdoor stijgt het wooncomfort, dalen de energiekosten, en verminderen we de CO2-uitstoot.
          Ons doel is dat al onze huurders kunnen genieten van een warme, veilige en toekomstbestendige woning.
        </p>
        <p>Wilt u meer weten over onze energiebesparende maatregelen?</p>
        <button className="gradient-button-news">Lees meer</button>
      </div>
      <div className="news-image-container">
        <img src="/src/assets/newsletter.png" alt="Newsletter" className="newsletter-image" />
        <img src={BackgroundSVG} alt="Background SVG" className="background-svg" />
      </div>
    </section>
  );
};

export default Newsletter;
