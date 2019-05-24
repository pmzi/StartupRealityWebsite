import React from 'react';

import Speaker from './Speaker';

import './style.scss';

class Speakers extends React.PureComponent{
  state = {
    speakers: [
      {
        id: 1,
        image: '1.jpg',
        name: '?',
        desc: '?',
      },
      {
        id: 2,
        image: '1.jpg',
        name: '?',
        desc: '?',
      },
      {
        id: 3,
        image: '1.jpg',
        name: '?',
        desc: '?',
      },
      {
        id: 4,
        image: '1.jpg',
        name: '?',
        desc: '?',
      },
      {
        id: 5,
        image: '2.jpg',
        name: '?',
        desc: '?',
      },
    ]
  }

  getSpeakers(){
    const reactSpeakers = [];
    const { speakers } = this.state;

    speakers.forEach(({ id, image, name, desc }) =>{
      reactSpeakers.push(
        <Speaker
          className="speakers__speaker"
          key={id}
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