import styled, { keyframes } from 'styled-components';

const AnimationAction = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;

export const ContentStyled = styled.div`
  display: flex;
  align-items: flex-end;
  p {
    font-family: 'Oswald', sans-serif;
    font-size: 35px;
  }
`;

export const LoadingStyled = styled.div`
  background-color: black;
  border-radius: 50%;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  animation: ${AnimationAction} 0.8s linear infinite;
  animation-delay: ${props => props.delay};
`;
