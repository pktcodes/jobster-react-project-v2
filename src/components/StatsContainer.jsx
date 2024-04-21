import { FaBug, FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import styled, { StyleSheetManager } from 'styled-components';
import isValidProp from '@emotion/is-prop-valid';

import StatItem from './StatItem';

const StatsContainer = () => {
  const { stats } = useSelector((state) => state.statsState);

  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: '#e9b949',
      background: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      background: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      background: '#ffeeee',
    },
  ];

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return (
          <StyleSheetManager
            enableVendorPrefixes
            shouldForwardProp={(propName) => isValidProp(propName)}
            key={index}
          >
            <StatItem key={index} {...item} />
          </StyleSheetManager>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`;

export default StatsContainer;
