import React, { memo } from 'react';

import {
  BodyStyled,
  ContentStyled,
  HeaderStyled,
} from './styled/Template.styled';

export const Body = memo(({ children }) => {
  <BodyStyled>{children}</BodyStyled>;
});

export const Header = memo(({ children }) => {
  <HeaderStyled>{children}</HeaderStyled>;
});

export const Content = memo(({ childre }) => {
  <ContentStyled>{children}</ContentStyled>;
});
