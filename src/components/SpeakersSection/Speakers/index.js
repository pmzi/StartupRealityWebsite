import React from 'react';

import Speaker from './Speaker';

import './style.scss';

class Speakers extends React.PureComponent{
  state = {
    speakers: [
      {
        id: 1,
        image: 'bahar.jpg',
        name: 'بهار یارمحمد',
        desc: 'معاون سرمایه‌گذاری فیروزه',
      },
      {
        id: 2,
        image: 'farhad.jpg',
        name: 'فرهاد فاطمی',
        desc: 'هم‌بنیان‌گذار و مدیر فنی ابرآروان',
      },
      {
        id: 3,
        image: 'vahid.jpg',
        name: 'وحید معصومی',
        desc: 'معاون مهندسی کافه بازار',
      },
      {
        id: 2,
        image: 'aysan.jpg',
        name: 'آیسان سبایی',
        desc: 'مدیر بازاریابی آچاره',
      },
      {
        id: 4,
        image: 'arash.jpg',
        name: 'آرش برهمند',
        desc: 'سردبیر ماهنامه پیوست',
      },
      {
        id: 5,
        image: 'azali.jpg',
        name: 'محمدرضا ازلی',
        desc: 'هم‌بنیان‌گذار تکراسا و استارت‌آپ جاده ابریشم',
      },
      {
        id: 1,
        image: 'alireza.jpg',
        name: 'علیرضا شیخ‌الملوکی',
        desc: 'توسعه‌دهنده نرم‌افزار TheatreJS',
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