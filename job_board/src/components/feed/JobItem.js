import React from 'react';

import {
  Link
} from 'react-router-dom';

const styles = {
  containerStyle: {
    padding: '16px',
    border: '0px',
    borderStyle: 'solid',
    borderBottomWidth: '1px',
    borderColor: '#333'
  },
  horizontalContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  timeStampStyle: {
    fontSize: '14px',
    fontWeight: '100',
    textAlign: 'right'
  },
  detailsButton: {
    flex: 1,
  }
};

export default ({ job }) => {
  const route = "/details/" + job.id;
  return (
    <li style={styles.containerStyle}>
      <h3>{job.title}</h3>
      <p style={styles.descriptionStyle}>{job.shortDescription}</p>
      <div style={styles.horizontalContainer}>
        <div style={styles.detailsButton}>
          <Link to={route}>Details</Link>
        </div>
        <span style={styles.timeStampStyle}>1h</span>
      </div>
    </li>
  );
};