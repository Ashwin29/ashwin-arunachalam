import React from 'react';
import './Timeline.scss';

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  iconclassName: string; // Icon className for each timeline event
  type: string; // Type for styling each timeline event (e.g., type1, type2, type3)
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline: React.FC = () => {
  return (
    <ul className='timeline'>
      <li className='event' data-date='12:30 - 1:00pm'>
        <h3>Registration</h3>
        <p>
          Get here on time, it's first come first serve. Be late, get turned
          away.
        </p>
        <p>
          Get here on time, it's first come first serve. Be late, get turned
          away.
        </p>
        <p>
          Get here on time, it's first come first serve. Be late, get turned
          away.
        </p>
      </li>
      <li className='event' data-date='2:30 - 4:00pm'>
        <h3>Opening Ceremony</h3>
        <p>
          Get ready for an exciting event, this will kick off in amazing fashion
          with MOP & Busta Rhymes as an opening show.
        </p>
      </li>
      <li className='event' data-date='5:00 - 8:00pm'>
        <h3>Main Event</h3>
        <p>
          This is where it all goes down. You will compete head to head with
          your friends and rivals. Get ready!
        </p>
      </li>
      <li className='event' data-date='8:30 - 9:30pm'>
        <h3>Closing Ceremony</h3>
        <p>
          See how is the victor and who are the losers. The big stage is where
          the winners bask in their own glory.
        </p>
      </li>
    </ul>
  );
};

export { Timeline };
