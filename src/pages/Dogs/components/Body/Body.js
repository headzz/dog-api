import React, { memo } from 'react';
import PropTypes from 'prop-types';
import UserInput from '../UserInput/UserInput';
import ContentStyled from './styled/Body.styled';
import FlexContent from '../../../../Components/FlexContent/FlexContent';
import Loading from '../../../../Components/Loading/Loading';

const Body = memo(({ fetch }) => (
  <ContentStyled>
    <FlexContent justify="center" align="center" direction="column">
      {fetch.loading && <Loading />}
      {!fetch.loading && <UserInput dogData={fetch.dogData} />}
    </FlexContent>
  </ContentStyled>
));

Body.propTypes = {
  fetch: PropTypes.shape({
    loading: PropTypes.bool,
    dogData: PropTypes.arrayOf(PropTypes.node),
    error: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

export default Body;
