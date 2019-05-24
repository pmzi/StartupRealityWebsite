import React from 'react';
import CountDownItem from './CountDownItem';

import './style.scss'

class CountDown extends React.PureComponent{
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount(){
    setInterval(()=>{
      this.calculateTime();
    }, 1000);

  }

  calculateTime(){
    const { time } = this.props;
    const now = Date.now();

    let toTime = parseInt((time - now) / 1000);

    if(toTime < 0){
      return;
    }

    const daysSeconds = 60 * 60 * 24;
    const hoursSeconds = 60 * 60;
    const minutesSeconds = 60;

    const days = parseInt(toTime / daysSeconds);
    toTime -= (days * daysSeconds)
    const hours = parseInt(toTime / hoursSeconds);
    toTime -= (hours * hoursSeconds)
    const minutes = parseInt(toTime / minutesSeconds);
    toTime -= (minutes * minutesSeconds)
    const seconds = toTime;

    this.setState({
      days: this.toPersianDigits(days),
      hours: this.toPersianDigits(hours),
      minutes: this.toPersianDigits(minutes),
      seconds: this.toPersianDigits(seconds),
    });
  }

  toPersianDigits = (text) => {
    var id= ['۰','۱','۲','۳','۴','۵','۶','۷','۸','۹'];
    return String(text).replace(/[0-9]/g, function(w){
        return id[+w]
    });
} 

  render(){
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="count-down">
        <CountDownItem value={days}>
          روز
        </CountDownItem>
        <CountDownItem value={hours}>
          ساعت
        </CountDownItem>
        <CountDownItem value={minutes}>
          دقیقه
        </CountDownItem>
        <CountDownItem value={seconds}>
          ثانیه
        </CountDownItem>
      </div>
    );
  }
}

export default CountDown;