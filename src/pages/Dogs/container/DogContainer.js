import React from 'react';
import Template from '../../../Components/Template/index';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';

const DogContainer = () => (
  <>
    <Template.Header>
      <Header />
    </Template.Header>
    <Template.Body>
      <Body />
    </Template.Body>
  </>
);

export default DogContainer;
