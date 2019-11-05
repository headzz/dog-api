import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { SelectStyled } from './styled/Select.styled';

const Select = memo(({ data }) => (
  <SelectStyled>
    <option value={data}>{data}</option>
  </SelectStyled>
));

Select.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Select;
