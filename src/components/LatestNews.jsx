import React from 'react';
import '../LatestNews.css';

const newsItems = [
  {
    date: "5 MAART 2024",
    title: "Telefoonstoring",
    description: "Update: Telefoonstoring verholpen",
    image: "/src/assets/telephone.jpg",
    linkText: "Lees meer",
  },
  {
    date: "17 FEBRUARI 2024",
    title: "Energiebesparing - Wat doet KnusWonen?",
    description: "KnusWonen werkt hard aan het energiezuiniger maken van...",
    image: "/src/assets/temperature.jpg",
    linkText: "Lees meer",
  },
  {
    date: "30 JANUARI 2024",
    title: "Energietoeslag: Heeft u er recht op?",
    description: "Steeds meer mensen hebben moeite om hun energierekening te...",
    image: "/src/assets/energy.jpg",
    linkText: "Lees meer",
  },
];

const LatestNews = () => {
  return (
    <section className="latest-news">
    <div className="latest-news-content">
      <h2 className="latest-news-title">Laatste nieuws</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-item" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <span className="news-date">{item.date}</span>
              <h3 className="news-title">{item.title}</h3>
              <p className="news-description">{item.description}</p>
              <a href="#" className="news-link">{item.linkText}</a>
            </div>
          </div>
        ))}
      </div>
      <div className="view-all-wrapper">
        <a href="#" className="view-all-news">Bekijk alle nieuwsberichten</a>
      </div>
      </div>
    </section>
  );
};

export default LatestNews;
