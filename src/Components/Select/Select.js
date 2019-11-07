import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SelectStyled, OptionStyled } from './styled/Select.styled';

const Select = memo(({ data }) => (
  <SelectStyled>
    {data.map((item, index) => (
      <OptionStyled value={item} key={index.toString()}>
        {item}
      </OptionStyled>
    ))}
  </SelectStyled>
));

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
