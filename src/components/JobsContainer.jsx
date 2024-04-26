import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getAllJobs } from '../features/allJobs/allJobsSlice';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
  const { isLoading, jobs, totalJobs } = useSelector(
    (state) => state.allJobsState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading center />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="jobs">
        <h2>No jobs to display...</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} {jobs.length > 1 ? 'jobs' : 'job'} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default JobsContainer;
