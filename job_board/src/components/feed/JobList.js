import React from 'react';

import JobItem from './JobItem';

const styles = {
  listStyle: {
    listStyle: 'none',
  }
};

export default ({ jobs }) => {


  const comps = jobs.map((job, index) => {
    return <JobItem key={index} job={job} />
  });

  return (
    <ul style={styles.listStyle} >
      {comps}
    </ul>
  );
};