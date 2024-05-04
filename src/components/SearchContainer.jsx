import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { clearInputs, updateInput } from '../features/allJobs/allJobsSlice';
import FormRow from './FormRow';
import FormRowSelect from './FormRowSelect';

const SearchContainer = () => {
  const {
    isLoading,
    search,
    status,
    statusOptions,
    jobType,
    jobTypeOptions,
    sort,
    sortOptions,
  } = useSelector((state) => state.allJobsState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // if (isLoading) return;
    dispatch(updateInput({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* SEARCH */}
          <FormRow
            label="search"
            type="text"
            name="search"
            value={search}
            handleChange={handleChange}
          />
          {/* STATUS */}
          <FormRowSelect
            label="status"
            name="status"
            value={status}
            list={statusOptions}
            handleChange={handleChange}
          />
          {/* JOB TYPE */}
          <FormRowSelect
            label="job type"
            name="jobType"
            value={jobType}
            list={jobTypeOptions}
            handleChange={handleChange}
          />
          {/* SORT */}
          <FormRowSelect
            label="sort"
            name="sort"
            value={sort}
            handleChange={handleChange}
            list={sortOptions}
          />
          {/* CLEAR FILTERS */}
          <button
            type="button"
            disabled={isLoading}
            className="btn btn-block btn-danger"
            onClick={() => dispatch(clearInputs())}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  h5 {
    font-weight: 700;
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`;

export default SearchContainer;
