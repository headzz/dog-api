import React from 'react';
import PropTypes from 'prop-types';

import { FontConfigStyled } from './styled/config.styled';

const Config = ({ children }) => (
  <FontConfigStyled>{children}</FontConfigStyled>
);

Config.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Config;
