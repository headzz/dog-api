import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexStyled = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`;

const FlexContent = ({ children, justify, align }) => (
  <FlexStyled justify={justify} align={align}>
    {children}
  </FlexStyled>
);

FlexContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  justify: PropTypes.string,
  align: PropTypes.string,
};

FlexContent.defaultProps = {
  justify: '',
  align: '',
};

export default FlexContent;
