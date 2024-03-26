import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { FormRow } from '../../components';

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

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventdefault();

    if (!position || !company || !jobLocation) {
      toast.error('please fill out all the fields');
      return;
    }
  };

  return (
    <Wrapper>
      <form className="form">
        <h3>{isEditing ? 'edit job' : 'Add Job'}</h3>
        <div className="form-center">
          {/* POSITION */}
          <FormRow
            label="position"
            type="text"
            name="position"
            value={position}
            handleChange={handleInputChange}
          />
          {/* COMPANY */}
          <FormRow
            label="company"
            type="text"
            name="company"
            value={company}
            handleChange={handleInputChange}
          />
          {/* JOB LOCATION */}
          <FormRow
            label="job location"
            type="text"
            name="job-location"
            value={jobLocation}
            handleChange={handleInputChange}
          />
          {/* STATUS */}
          <div className="form-row">
            <label htmlFor="status" className="form-label">
              status
            </label>
            <select
              name="status"
              id="status"
              className="form-select"
              onChange={handleInputChange}
            >
              {statusOptions.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>

          {/* JOB TYPE */}

          {/* BUTTONS */}
          <div className="button-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => console.log('Clear Values')}
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
