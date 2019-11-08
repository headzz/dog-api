import React from 'react';
import PropTypes from 'prop-types';
import { FlexStyled } from './styled/FlexContent.styled';

const FlexContent = ({ children, justify, align, direction }) => (
  <FlexStyled justify={justify} align={align} direction={direction}>
    {children}
  </FlexStyled>
);

FlexContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.bool,
  ]).isRequired,
  align: PropTypes.string,
  direction: PropTypes.string,
  justify: PropTypes.string,
};

FlexContent.defaultProps = {
  align: '',
  direction: '',
  justify: '',
};

export default FlexContent;
