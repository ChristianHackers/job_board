import React from 'react';
import JobList from './JobList';

export default (props) => {
  console.log(props.router);
  const jobs = [
    {
      id: 1,
      title: 'Frontend Engineer',
      shortDescription: 'I\'m a pretty little job posting. You make good sites we pay you good money',
    },
    {
      id: 2,
      title: 'Backend Engineer',
      shortDescription: 'Needed: Software developer to make an awesome architecture and get none of the glory.'
    },
    {
      id:3,
      title: 'Coffee Fetcher',
      shortDescription: 'You are the lifeblood of the company. You will provide the life giving liquid to sustain our company'
    },
    {
      id: 4,
      title: 'Scrum Master',
      shortDescription: 'Need a master of all the scrums. Must have yoda-like aptitude for wrangling stray developers to get stuff done'
    }
  ];
  return (
    <div >
      <h1 style={{textAlign: 'center'}}>
        Feed
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}