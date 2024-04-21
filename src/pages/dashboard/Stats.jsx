import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ChartsContainer, Loading, StatsContainer } from '../../components';
import { getStats } from '../../features/stats/statsSlice';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (state) => state.statsState
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  if (isLoading) {
    return <Loading center />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
