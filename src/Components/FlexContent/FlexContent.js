import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexStyled = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const FlexContent = ({ children }) => <FlexStyled>{children}</FlexStyled>;

FlexContent.propTypes = {
  children: PropTypes.string.isRequired,
};

export default FlexContent;
