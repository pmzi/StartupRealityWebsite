import React from 'react';

import Nav from './Nav';
import Header from './Header';
import SpeakersSection from './SpeakersSection';
import ConductorSection from './ConductorSection';

function Landing(){
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <SpeakersSection />
      <ConductorSection />
    </React.Fragment>
  );
}

export default Landing;