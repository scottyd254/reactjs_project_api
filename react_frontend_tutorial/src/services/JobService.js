import axios from "axios";

const API_URL = 'http://localhost:8000/api/';

export const getJobs = () => {
    return axios.get(API_URL + 'get/jobs/');
};

export const getJob = (id) => {
    return axios.get(API_URL + `get/job/${id}/`);
};

export const createJob = (data) => {
    return axios.post(API_URL + 'create_job/job/', data);
};

export const updateJob = (id, data) => {
    return axios.put(API_URL + `job/update/${id}/`, data);
};

export const deleteJob = (id) => {
    return axios.delete(API_URL + `job/delete/${id}/`);
};
