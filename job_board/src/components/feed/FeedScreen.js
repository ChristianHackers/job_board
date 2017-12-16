import React from 'react';
import JobList from './JobList';

export default () => {
  const jobs = [{ title: 'Frontend Engineer' }, { title: 'Backend Engineer' }, { title: 'Coffee Fetcher' }];
  return (
    <div>
      <h1>
        Feed
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}