import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
import { withTranslation } from 'react-i18next';

function TimeLine({ timeline, t }) {
  const timeItemsArray = timeline.map((item, index) => {
    const paragraphArray = item.paragraphs.map((text, index) => <p key={index}>{t(text)}</p>);
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

export default withTranslation()(TimeLine);