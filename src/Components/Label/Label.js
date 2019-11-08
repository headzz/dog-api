import React from 'react';
import PropTypes from 'prop-types';
import { LabelStyled } from './styled/Label.styled';

const Label = ({ children }) => <LabelStyled>{children}</LabelStyled>;
export default Label;
Label.propTypes = {
  children: PropTypes.string.isRequired,
};
