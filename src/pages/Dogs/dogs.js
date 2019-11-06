import React from 'react';
import Wrapper from '../../Components/Layout/Layout';
import Template from '../../Components/Template/index';
import FlexContent from '../../Components/FlexContent/FlexContent';
import Image from '../../Components/Image/Image';
import Card from '../../Components/Card/Card';
import Logo from '../../../public/asset/dogitos.svg';

const Dogs = () => (
  <Wrapper>
    <Template.Header>
      <FlexContent justify="center" align="center">
        <p>Dogitos</p>
        <Image>
          <Logo />
        </Image>
      </FlexContent>
    </Template.Header>
    <FlexContent justify="space-evenly">
      <div>test</div>
      <div>test</div>
    </FlexContent>
    <Card />
  </Wrapper>
);

export default Dogs;
