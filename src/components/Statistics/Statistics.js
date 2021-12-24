import React from 'react';
import PropTypes from 'prop-types';
import { StatItem } from './Statistics.styled';
import { ListItem } from './Statistics.styled';

const Statistics = ({ data }) => {
  return (
    <ListItem>
      {Object.keys(data).map(item => (
        <StatItem key={item}>
          {item}: {data[item]}
        </StatItem>
      ))}
    </ListItem>
  );
};

Statistics.propTypes = {
  data: PropTypes.object,
};

export default Statistics;
