import React from 'react';

import './style.scss';

function LandingSection(){
  return (
    <section className="location-section">
      <div className="location-section__content">
        <h2 className="location-section__title">
          محل برگذاری
        </h2>
        <img
          className="location-section__image"
          alt="محل برگذاری"
          src="assets/map.png"
        />
        <div className="location-section__location">
          <i className="material-icons">
            location_on
          </i>
          <span>
            کرج٬ جهانشهر٬روبروی بانک ملی شعبه جهانشهر٬ تالار شهیدان نژاد فلاح٬ سالن اصلی
          </span>
        </div>
      </div>
    </section>
  );
}

export default LandingSection;