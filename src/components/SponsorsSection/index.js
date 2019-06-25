import React from 'react';
import Sponsors from './Sponsors';

import './style.scss';

function SponsorsSection(){
  return (
    <section className="sponsors-section">
      <div className="sponsors-section__content layout">
        <Sponsors
          title="حامیان"
          sponsors={
            [
              {
                id: 0,
                image: 'shahrdari.png',
                title: 'شهرداری کرج',
                link: '#',
              },
              {
                id: 1,
                image: 'yektanet.png',
                title: 'یکتانت',
                link: 'http://yektanet.com/',
              },
              {
                id: 3,
                image: 'arvan.png',
                title: 'ابرآروان',
                link: 'http://arvancloud.com/'
              },
              {
                id: 4,
                image: 'khanestartup.png',
                title: 'خانه استارت‌آپ',
                link: 'http://Khanestartup.ir/',
              },
            ]
          }
        />
        <Sponsors
          title="حامیان رسانه‌ای"
          sponsors={
            [
              {
                image: 'techrasa.png',
                title: 'تکراسا',
                link: 'http://Techrasa.com/',
              },
              {
                image: 'shanbe.png',
                title: 'شنبه',
                link: 'https://shanbemag.com/',
              },
            ]
          }
        />
      </div>
    </section>
  );
}

export default SponsorsSection;