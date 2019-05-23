import React from 'react';

import TeamSection from './TeamSection';
import SocialsSection from './SocialsSection';

import './style.scss';

function FooterSection(){
  return (
    <section className="footer-section">
      <div className="layout">
        <TeamSection />
        <SocialsSection />
      </div>
    </section>
  );
}

export default FooterSection;