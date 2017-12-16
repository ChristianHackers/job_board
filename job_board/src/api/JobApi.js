import axios from 'axios';
const baseURL = 'https://1n1lomniwa.execute-api.us-east-1.amazonaws.com/dev';

export function getAllJobs() {
  const url = baseURL + '/jobPosts';
  return axios.get(url);
}

export function getJobById(id) {
  const url = baseURL + '/jobPosts/' + id;
  return axios.get(url);
}

export function postAJob(job) {
  const url = baseURL + '/jobPost';
  return axios.post(url, job);
}