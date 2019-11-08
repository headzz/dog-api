import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SelectStyled, OptionStyled } from './styled/Select.styled';

const Select = memo(({ data, onChange }) => (
  <SelectStyled onChange={onChange}>
    {data.map((item, index) => (
      <OptionStyled value={item.value} key={index.toString()}>
        {item.description}
      </OptionStyled>
    ))}
  </SelectStyled>
));

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
