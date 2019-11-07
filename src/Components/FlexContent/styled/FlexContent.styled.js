import styled from 'styled-components';

export const FlexStyled = styled.div`
  display: flex;
  align-items: ${props => props.align};
  flex-direction: ${props => (props.direction ? props.direction : 'inherit')}
  justify-content: ${props => props.justify};
`;
