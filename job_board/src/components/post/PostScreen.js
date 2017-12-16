import React, { Component } from 'react';

import {
  getAllJobs,
  postAJob,
} from '../../api/JobApi';

export default class PostScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      shortDescription: '',
      longDescription: '',
    }
  }

  updateField(fieldName, value) {
    let newState = {};
    newState[fieldName] = value;
    this.setState(newState);
  }

  submitAJob() {
    const jobs = getAllJobs();
    const job = {
      id: jobs.length + 1,
      title: this.state.title,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription,
    };
    postAJob(job);
    this.clearState();
    alert('Thank you for submitting your post!');
  }

  clearState() {
    this.setState({
      title: '',
      shortDescription: '',
      longDescription: '',
    });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>
          Create A New Job
        </h1>
        <form style={{display: 'flex', flexDirection: 'column'}}>
          <label>
            Job Title:
            <input value={this.state.title} onChange={(event) => this.updateField('title', event.target.value)} />
          </label>
          <label>
            Short Description:
            <textarea value={this.state.shortDescription} onChange={(event) => this.updateField('shortDescription', event.target.value)} />
          </label>
          <label>
            Long Description:
            <textarea value={this.state.longDescription} onChange={(event) => this.updateField('longDescription', event.target.value)} />
          </label>
          <button style={{ width: '10%',}} onSubmit={() => this.submitAJob()}>Submit</button>
        </form>
      </div>
    );
  }
}