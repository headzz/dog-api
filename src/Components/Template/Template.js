import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  BodyStyled,
  ContentStyled,
  HeaderContent,
} from './styled/Template.styled';

export const Body = memo(({ children }) => <BodyStyled>{children}</BodyStyled>);

Body.propTypes = {
  children: PropTypes.string.isRequired,
};

export const Header = memo(({ children }) => (
  <HeaderContent>{children}</HeaderContent>
));

Header.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Content = memo(({ children }) => (
  <ContentStyled>{children}</ContentStyled>
));

Content.propTypes = {
  children: PropTypes.string.isRequired,
};
