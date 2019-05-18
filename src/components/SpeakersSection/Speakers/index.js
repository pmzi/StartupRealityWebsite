import React from 'react';

import Speaker from './Speaker';

import './style.scss';

class Speakers extends React.PureComponent{
  state = {
    speakers: [
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
      {
        image: 'pouya.jpg',
        name: 'پویا مظفرمقام',
        desc: 'رئیس هیئت مدیره سازمان فلان',
      },
    ]
  }

  getSpeakers(){
    const reactSpeakers = [];
    const { speakers } = this.state;

    speakers.forEach(({ image, name, desc }) =>{
      reactSpeakers.push(
        <Speaker
          className="speakers__speaker"
          key={image}
          image={image}
          name={name}
          desc={desc}
        />
      );
    })

    return reactSpeakers;
  }

  render(){
    return (
      <div className="speakers">
        { this.getSpeakers() }
      </div>
    );
  }
}

export default Speakers;