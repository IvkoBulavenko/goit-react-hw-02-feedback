import React from 'react';
import PropTypes from 'prop-types';
import { Containercss } from './Container.styled';

const Container = ({ children }) => {
  return <Containercss>{children}</Containercss>;
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
