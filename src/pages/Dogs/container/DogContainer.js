import React from 'react';
import Template from '../../../Components/Template/index';
import Header from '../components/Header/Header';
import Body from '../components/Body/Body';
import { API_GET_DOG } from '../../../config/constants';
import useFetch from '../../../utils/hooks/useFetch';

const DogContainer = () => {
  const fetch = useFetch(API_GET_DOG);
  return (
    <>
      <Template.Header>
        <Header />
      </Template.Header>
      <Template.Body>
        <Body fetch={fetch} />
      </Template.Body>
    </>
  );
};

export default DogContainer;
