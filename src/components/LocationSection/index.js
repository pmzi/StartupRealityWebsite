import React from 'react';

import './style.scss';

function LandingSection(){
  return (
    <section className="location-section">
      <div className="location-section__content">
        <header>
          <h2 className="location-section__title">
            محل برگزاری
          </h2> 
        </header>
        <a
          href="https://goo.gl/maps/B4tm4kuQdYzsrEDe6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="location-section__image"
            alt="محل برگزاری"
            src="assets/map.png"
          />
        </a>
        <div className="location-section__location">
          <i className="material-icons">
            location_on
          </i>
          <span>
            کرج، جهانشهر، روبروی بانک ملی شعبه جهانشهر، تالار شهیدان نژاد فلاح، سالن اصلی
          </span>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;