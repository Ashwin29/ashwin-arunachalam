import React from 'react';
import { Card } from '../../foundation/card/Card';
import { Grid } from '../../layouts/grid/Grid';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description 1',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description 2',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Description 3',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Description 4',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 5,
      title: 'Project 5',
      description: 'Description 5',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 6,
      title: 'Project 6',
      description: 'Description 6',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 7,
      title: 'Project 7',
      description: 'Description 7',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 8,
      title: 'Project 8',
      description: 'Description 8',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 9,
      title: 'Project 9',
      description: 'Description 9',
      image: 'https://picsum.photos/200/300',
    },
    {
      id: 10,
      title: 'Project 10',
      description: 'Description 10',
      image: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <section>
      <h2>Projects</h2>
      <Grid columns={4} gap='1rem'>
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </Grid>
    </section>
  );
};

export { ProjectsSection };
