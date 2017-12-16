import React from 'react';
import JobList from './JobList';

export default () => {
  const jobs = [
    {
      title: 'Frontend Engineer',
      shortDescription: 'I\'m a pretty little job posting. You make good sites we pay you good money',
    },
    {
      title: 'Backend Engineer',
      shortDescription: 'Needed: Software developer to make an awesome architecture and get none of the glory.'
    },
    {
      title: 'Coffee Fetcher',
      shortDescription: 'You are the lifeblood of the company. You will provide the life giving liquid to sustain our company'
    },
    {
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