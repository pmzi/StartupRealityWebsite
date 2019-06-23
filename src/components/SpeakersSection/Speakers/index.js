import React from 'react';

import Speaker from './Speaker';

import './style.scss';

class Speakers extends React.PureComponent{
  state = {
    speakers: [
      //{
      //  id: 1,
      //  image: 'jhubin.jpg',
      //  name: 'ژوبین علاقه‌بند',
      //  desc: 'مدیرعامل اسنپ',
       // linkedin: '',
     // },
      {
        id: 4,
        image: 'bahar.jpg',
        name: 'بهار یارمحمد',
        desc: 'معاون سرمایه‌گذاری فیروزه',
        linkedin: 'https://www.linkedin.com/in/bahar-yarmohammad-691a1853/',
      },
      {
        id: 5,
        image: 'farhad.jpg',
        name: 'فرهاد فاطمی',
        desc: 'هم‌بنیان‌گذار و مدیر فنی ابرآروان',
        linkedin: 'https://www.linkedin.com/in/farhad-fatemi-2632a233/',
      },
      {
        id: 6,
        image: 'pouria.jpg',
        name: 'پوریا کاویانی',
        desc: 'معاون ارشد مهندسی کافه بازار و دیوار',
        linkedin: 'https://www.linkedin.com/in/pooria-kaviani-20b99792/',
      },
     // {
      //  id: 7,
      //  image: 'farshid.jpg',
      //  name: 'فرشید هندی',
      //  desc: 'مدیر سرمایه‌گذاری رهنما',
      //  linkedin: '',
     // },
      {
        id: 9,
        image: 'aysan.jpg',
        name: 'آیسان سبایی',
        desc: 'مدیر بازاریابی آچاره',
        linkedin: 'https://www.linkedin.com/in/aysansabaei/',
      },
      {
        id: 9,
        image: 'shervin.jpg',
        name: 'شروین مشایخ',
        desc: 'مدیر محصول بانک آینده',
        linkedin: 'https://www.linkedin.com/in/shervinmashayekh/',
      },
      {
        id: 9,
        image: 'sina.jpg',
        name: 'سینا مومنی',
        desc: 'مدیر بازاریابی سازمانی یکتانت',
        linkedin: 'https://www.linkedin.com/in/sina-momeni-35078b146/',
      },
      {
        id: 9,
        image: 'ehsan.jpg',
        name: 'احسان کریم‌خانی',
        desc: 'قائم مقام مدیرعامل سرمایه‌گذاری آوند',
        linkedin: 'https://www.linkedin.com/in/ehsan-karimkhani/',
      },
      {
        id: 13,
        image: '1.jpg',
        name: '?',
        desc: '?',
      },
      {
        id: 13,
        image: '1.jpg',
        name: '?',
        desc: '?',
      },
      {
        id: 14,
        image: '2.jpg',
        name: '?',
        desc: '?',
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