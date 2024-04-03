import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getAllJobs } from '../features/allJobs/allJobsSlice';

const JobsContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [dispatch]);

  return <h2>Jobs Container</h2>;
};

export default JobsContainer;
