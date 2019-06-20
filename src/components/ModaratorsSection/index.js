import React from 'react';

import Speakers from './Speakers';

import './style.scss'

function ModaratorsSection(){
  return (
    <section className="speakers-section">
      <header className="speakers-section__header">
        <h2 className="speakers-section__title">
          راهبران
        </h2>
      </header>
      <div className="layout">
        <Speakers />
      </div>
    </section>
  );
}

export default ModaratorsSection;