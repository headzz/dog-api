import styled from 'styled-components';
import { WHITE_COLOR } from '../../Color/Color';

export const SelectStyled = styled.select`
  background-color: ${WHITE_COLOR};
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 4px 1px;
  :focus {
    outline: none;
  }
  width: 100%;
`;

export const OptionStyled = styled.option`
  padding: 1em;
`;
