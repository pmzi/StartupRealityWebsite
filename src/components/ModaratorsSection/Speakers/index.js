import React from 'react';

import Speaker from './Speaker';

import './style.scss';

class Speakers extends React.PureComponent{
  state = {
    speakers: [
      {
        id: 10,
        image: 'siavash.jpg',
        name: 'سیاوش صفاریان‌پور',
        desc: 'ژورنالیست علم و فناوری',
        linkedin: '#',
      },
      {
        id: 10,
        image: 'arash.jpg',
        name: 'آرش برهمند',
        desc: 'سردبیر ماهنامه پیوست',
        linkedin: 'https://www.linkedin.com/in/arash-barahmand-b9b48a48/',
      },
      {
        id: 11,
        image: 'azali.jpg',
        name: 'محمدرضا ازلی',
        desc: 'هم‌بنیان‌گذار تکراسا و استارت‌آپ جاده ابریشم',
        linkedin: 'https://www.linkedin.com/in/mohammadrezaazali/',
      },
      {
        id: 12,
        image: 'alireza.jpg',
        name: 'علیرضا شیخ‌الملوکی',
        desc: 'توسعه‌دهنده نرم‌افزار TheatreJS',
        linkedin: 'https://www.linkedin.com/in/alireza-sheikholmolouki/',
      },
      
    ]
  }

  getSpeakers(){
    const reactSpeakers = [];
    const { speakers } = this.state;

    speakers.forEach(({ id, image, name, desc, linkedin }) =>{
      reactSpeakers.push(
        <Speaker
          className="speakers__speaker"
          key={id}
          image={image}
          name={name}
          desc={desc}
          linkedin={linkedin}
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