import styled from 'styled-components';
import { WHITE_COLOR } from '../../../../../Components/Color/Color';

export const SelectFontStyled = styled.select`
  background-color: ${WHITE_COLOR};
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 4px 1px;
  text-transform: capitalize;
  :focus {
    outline: none;
  }
  width: 100%;
`;

export const OptionStyled = styled.option`
  font-family: ${props => (props.value ? props.value : 'sans-serif')};
  padding: 1em;
  text-transform: capitalize;
`;
