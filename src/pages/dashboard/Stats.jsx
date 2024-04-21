import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { getStats } from '../../features/stats/statsSlice';

const Stats = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  return <h1>Stats</h1>;
};

export default Stats;
