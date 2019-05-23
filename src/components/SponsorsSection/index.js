import React from 'react';
import Sponsors from './Sponsors';

function SponsorsSection(){
  return (
    <section className="sponsors-section">
      <div className="sponsors-section__content layout">
        <Sponsors
          title="حامیان"
          sponsors={
            [
              {
                image: 'evand.png',
                title: 'title',
              },
              {
                id: 1,
                image: 'evand.png',
                title: 'title',
              },
            ]
          }
        />
        <Sponsors
          title="حامیان رسانه‌ای"
          sponsors={
            [
              {
                image: 'img1.png',
                title: 'title',
              },
            ]
          }
        />
      </div>
    </section>
  );
}

export default SponsorsSection;