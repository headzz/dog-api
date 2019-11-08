import React from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './styled/Input.styled';

const Input = ({ value, onChange }) => (
  <InputStyled value={value} onChange={onChange} />
);

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
