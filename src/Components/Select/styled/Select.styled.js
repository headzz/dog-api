import styled from 'styled-components';
import { WHITE_COLOR } from '../../Color/Color';

export const SelectStyled = styled.select`
  background-color: ${WHITE_COLOR};
  border: 1px solid #cfcfcf;
  border-radius: 3px;
  margin-bottom: 0.5rem;
  padding: 2px 1px;
  :focus {
    outline: none;
  }
  width: 100%;
  @media (min-width: 600px) {
    width: 20%;
  }
`;

export const OptionStyled = styled.option`
  font-family: ${props => (props.value ? props.value : 'sans-serif')};
  padding: 1em;
`;
