import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FormRow, FormRowSelect } from '../../components';
import {
  clearInputs,
  createJob,
  updateInput,
} from '../../features/job/jobSlice';

import Wrapper from './wrappers/FormStyles';

const AddJob = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    statusOptions,
    status,
    jobTypeOptions,
    jobType,
    isEditing,
  } = useSelector((state) => state.jobState);
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch(updateInput({ name, value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all the fields');
      return;
    }

    dispatch(
      createJob({
        position: position,
        company: company,
        jobLocation: jobLocation,
        status: status,
        jobType: jobType,
      })
    );
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(updateInput({ name: 'jobLocation', value: user?.location }));
    }
  }, [dispatch, user?.location, isEditing]);

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className="form-center">
          {/* POSITION */}
          <FormRow
            label="position"
            type="text"
            name="position"
            value={position}
            handleChange={handleChange}
          />
          {/* COMPANY */}
          <FormRow
            label="company"
            type="text"
            name="company"
            value={company}
            handleChange={handleChange}
          />
          {/* JOB LOCATION */}
          <FormRow
            label="job location"
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleChange}
          />
          {/* STATUS */}
          <FormRowSelect
            label="status"
            name="status"
            handleChange={handleChange}
            value={status}
            list={statusOptions}
          />
          {/* JOB TYPE */}
          <FormRowSelect
            label="job type"
            name="jobType"
            handleChange={handleChange}
            value={jobType}
            list={jobTypeOptions}
          />
          {/* BUTTONS */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearInputs())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
