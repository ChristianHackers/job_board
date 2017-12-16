import React, { Component } from 'react';

import {
  getJobById,
} from '../../api/JobApi';

export default class DetailsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      job: null
    }
  };

  componentWillMount() {
    const job = getJobById(this.props.match.params.id);
    console.log(job);
    this.setState({
      job,
    });
  }

  render() {
    const job = this.state.job;
    if (job !== null) {
      return (
        <div>
          <h1 style={{textAlign: 'center'}}>
            {job.title}
          </h1>
          <p>{job.shortDescription}</p>
          <p>{job.longDescription}</p>
          <p>{job.longDescription}</p>
          <p>{job.longDescription}</p>
          <p>{job.longDescription}</p>
        </div>
      );
    } else {
      return (
        <div>
          <p>Please wait....</p>
        </div>
      );
    }
  }
}
