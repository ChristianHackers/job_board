import React from 'react';

const styles = {
  containerStyle: {
    padding: '16px',
    border: '0px',
    borderStyle: 'solid',
    borderBottomWidth: '1px',
    borderColor: '#333'
  },
  titleStyle: {

  },
  timeStampStyle: {
    fontSize: '14px',
    fontWeight: '100',
    textAlign: 'right'
  }
};

export default ({ job }) => {
  return (
    <li style={styles.containerStyle}>
      <h3>{job.title}</h3>
      <p style={styles.descriptionStyle}>{job.shortDescription}</p>
      <p style={styles.timeStampStyle}>1h</p>
    </li>
  );
};