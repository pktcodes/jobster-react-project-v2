import { useSelector } from 'react-redux';

import {
  JobsContainer,
  PaginationContainer,
  SearchContainer,
} from '../../components';

const AllJobs = () => {
  const { numOfPages } = useSelector((state) => state.allJobsState);

  return (
    <>
      <SearchContainer />
      <JobsContainer />
      {numOfPages > 1 && <PaginationContainer />}
    </>
  );
};

export default AllJobs;
