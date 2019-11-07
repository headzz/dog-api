import styled from 'styled-components';
import { YELLOW_BACKGROUND_COLOR } from '../../Color/Color';

export const BodyStyled = styled.div`
  background-color: ${YELLOW_BACKGROUND_COLOR};
  @media (min-width: 600px) {
    padding: 4em;
  }
`;

export const ContentStyled = styled.div`
  padding: 1rem 2rem;
`;

export const HeaderContent = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');
  font-family: Oswald, sans-serif;
  font-size: 2rem;
  padding: 0rem 1rem;
`;
