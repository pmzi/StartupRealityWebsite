import React from 'react';

import EventInfoItem from './EventInfoItem';

import './style.scss';

function EventInfo(){
  return (
    <div className="event-info">
      <EventInfoItem
        icon="event_note"
        className="event-info__item"
      >
        ۲۱ تیر ۱۳۹۸
      </EventInfoItem>
      <EventInfoItem
        icon="location_on"
        className="event-info__item"
      >
        کرج سالن نژاد فلاح
      </EventInfoItem>
      <EventInfoItem
        icon="access_time"
        className="event-info__item"
      >
        ۰۹:۰۰ تا ۱۸:۳۰
      </EventInfoItem>
    </div>
  );
}

export default EventInfo;