import React from 'react';

import Sponsor from './Sponsor';

import './style.scss';

class Sponsors extends React.Component{
  getSponsors(){
    const { sponsors } = this.props;

    const renderedSponsors = [];

    sponsors.forEach(({ image, title, link })=>{
      renderedSponsors.push(
        <Sponsor
          className="sponsors__item"
          key={image}
          title={title}
          image={image}
          link={link}
        />
      );
    });

    return renderedSponsors;
  }

  render(){
    const { title } = this.props;

    return (
      <div className="sponsors">
        <h2 className="sponsors__title">
          { title }
        </h2>
        <div className="sponsors__content">
          { this.getSponsors() }
        </div>
      </div>
    );
  }
}

export default Sponsors;