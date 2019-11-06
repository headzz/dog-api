import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageStyled = styled.div`
  svg {
    height: 3.5rem;
    padding-top: 0.8rem;
    width: 3.5rem;
  }
`;

const Image = ({ children }) => <ImageStyled>{children}</ImageStyled>;

export default Image;

Image.propTypes = { children: PropTypes.element.isRequired };
