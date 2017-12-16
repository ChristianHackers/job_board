import React, { Component } from 'react';

import { getAllJobs } from '../../api/JobApi';
import JobList from './JobList';

export default class FeedScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
  }

  componentWillMount() {
    getAllJobs().then((response) => {
      console.log(response.data);
      this.setState({
        jobs: response.data
      });
    });
  }

  render() {
    return (
      <div >
        <h1 style={{textAlign: 'center'}}>
          Feed
        </h1>
        <JobList jobs={this.state.jobs} />
      </div>
    );
  }
}
