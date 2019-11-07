import React from 'react';
import FlexContent from '../../../../Components/FlexContent/FlexContent';
import Image from '../../../../Components/Image/Image';
import Logo from '../../../../../public/asset/dogitos.svg';

const Header = () => (
  <FlexContent justify="center" align="center">
    <p>Dogitos</p>
    <Image>
      <Logo />
    </Image>
  </FlexContent>
);

export default Header;
