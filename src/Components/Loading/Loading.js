import React from 'react';
import { ContentStyled, LoadingStyled } from './styled/Loading.styled';

const Loading = () => (
  <ContentStyled>
    <p>Loading</p>
    <LoadingStyled delay="0s" />
    <LoadingStyled delay="0.2s" />
    <LoadingStyled delay="0.3s" />
  </ContentStyled>
);

export default Loading;
