import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { SelectFontStyled, OptionStyled } from './styled/SelectFont.styled';

const SelectFont = memo(({ data, onChange }) => (
  <SelectFontStyled onChange={onChange}>
    {data.map((item, index) => (
      <OptionStyled value={item} key={index.toString()}>
        {item}
      </OptionStyled>
    ))}
  </SelectFontStyled>
));

SelectFont.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectFont;
