import React from 'react';
import './TestCard.scss';
import { Card } from '../Card';

const cardData = [
  {
    image: 'https://picsum.photos/200/300',
    title: 'Project Title 1',
    description: 'This is a brief description of Project 1.',
    actionLabel: 'Learn More',
  },
  {
    image: 'https://picsum.phtos/200/300',
    title: 'Project Title 2',
    description: 'This is a brief description of Project 2.',
    actionLabel: 'View Details',
  },
  {
    image: 'https://picsum.photos/200/300',
    title: 'Project Title 3',
    description: 'This is a brief description of Project 3.',
    actionLabel: 'Explore',
  },
];

const CardGrid: React.FC = () => {
  return (
    <div className='card-grid'>
      {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          actionLabel={card.actionLabel}
        />
      ))}
    </div>
  );
};

export default CardGrid;
