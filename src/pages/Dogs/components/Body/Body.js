import React, { memo } from 'react';
import Select from '../../../../Components/Select/Select';
import ContentStyled from './styled/Body.styled';
import FlexContent from '../../../../Components/FlexContent/FlexContent';
import useFetch from '../../../../utils/hooks/useFetch';

const fonts = [
  'ZCOOL XiaoWei',
  'Montserrat',
  'Staatliches',
  'Supermercado One',
  'Big Shoulders',
];

const Body = memo(() => {
  const fetch = useFetch();
  return (
    <ContentStyled>
      {!fetch.loading && (
        <FlexContent justify="center" align="center" direction="column">
          <Select data={fonts} />
        </FlexContent>
      )}
    </ContentStyled>
  );
});

export default Body;
