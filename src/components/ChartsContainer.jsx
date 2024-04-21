import { useState } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';

import AreaChart from './AreaChart';
import BarChart from './BarChart';

const ChartsContainer = () => {
  const [isBarChart, setIsBarChart] = useState(true);
  const { monthlyApplications: chartData } = useSelector(
    (state) => state.statsState
  );

  return (
    <Wrapper>
      <h4>monthly applications</h4>
      <button type="button" onClick={() => setIsBarChart(!isBarChart)}>
        {isBarChart ? 'Bar Chart' : 'Area Chart'}
      </button>
      {isBarChart ? (
        <BarChart chartData={chartData} />
      ) : (
        <AreaChart chartData={chartData} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default ChartsContainer;
