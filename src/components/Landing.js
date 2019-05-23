import React from 'react';

import Nav from './Nav';
import Header from './Header';
import SpeakersSection from './SpeakersSection';
import ConductorSection from './ConductorSection';
import SponsorsSection from './SponsorsSection';

function Landing(){
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <SpeakersSection />
      <ConductorSection />
      <SponsorsSection />
    </React.Fragment>
  );
}

export default Landing;