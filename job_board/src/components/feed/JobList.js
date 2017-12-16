import React from 'react';

import JobItem from './JobItem';

const styles = {
  listStyle: {
    listStyle: 'none',
  }
};

export default ({ jobs }) => {


  const comps = jobs.map((job) => {
    return <JobItem job={job} />
  });

  return (
    <ul style={styles.listStyle} >
      {comps}
    </ul>
  );
};