import React from 'react';

import Conductor from './Conductor';

import './style.scss';

function ConductorSection(){
  return (
    <section className="conductor-section">
      <div className="layout">
        <Conductor />
      </div>
    </section>
  );
}

export default ConductorSection;