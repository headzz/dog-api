import styled from 'styled-components';
import { WHITE_COLOR } from '../../Color/Color';

export const InputStyled = styled.input`
  background-color: ${WHITE_COLOR};
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 4px 1px;
  :focus {
    outline: none;
  }
  width: calc(100% - 4px);
`;

export const OptionStyled = styled.option`
  font-family: ${props => (props.value ? props.value : 'sans-serif')};
  padding: 1em;
`;
