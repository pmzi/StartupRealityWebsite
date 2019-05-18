import React from 'react';

import Speakers from './Speakers';

import './style.scss'

function SpeakersSection(){
  return (
    <section className="speakers-section">
      <header className="speakers-section__header">
        <h2 className="speakers-section__title">
          سخنرانان
        </h2>
      </header>
      <div className="layout">
        <Speakers />
      </div>
    </section>
  );
}

export default SpeakersSection;