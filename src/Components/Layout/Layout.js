import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { WrapperStyled } from './styled/Layout.styled';

const Wrapper = memo(({ children }) => (
  <WrapperStyled>{children}</WrapperStyled>
));

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Wrapper;
