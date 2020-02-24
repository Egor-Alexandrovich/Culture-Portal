import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

function TimeLine({ timeline }) {
  const timeItemsArray = timeline.map((item, index) => {
    const paragraphArray = item.paragraphs.map((text, index) => <p key={index}>{text}</p>);
    return <TimelineItem
      key={`${index}`}
      dateText={item.dateText}
      style={{ color: '#e86971' }}
    >
      <h3>{item.title}</h3>
      {paragraphArray}
    </TimelineItem>
  });
  return (
    <Timeline lineColor={'#ddd'}>
      {timeItemsArray}
    </Timeline>
  );
}

export default TimeLine;