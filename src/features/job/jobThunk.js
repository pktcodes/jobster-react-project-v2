import { customFetch, validateAuthorization } from '../../utils';
import { getAllJobs, hideLoading, showLoading } from '../allJobs/allJobsSlice';
import { clearInputs } from './jobSlice';

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.post('/jobs', job);
    thunkAPI.dispatch(clearInputs());
    return response.data;
  } catch (error) {
    return validateAuthorization(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const response = await customFetch.delete(`/jobs/${jobId}`);
    thunkAPI.dispatch(getAllJobs());
    return response.data;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    return validateAuthorization(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const response = await customFetch.patch(`/jobs/${jobId}`, job);
    thunkAPI.dispatch(clearInputs());
    return response.data;
  } catch (error) {
    return validateAuthorization(error, thunkAPI);
  }
};
