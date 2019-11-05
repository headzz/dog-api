import React, { memo } from 'react';

import Card from './Components/Card/Card';
import FlexContent from './Components/FlexContent/FlexContent';

const App = memo(() => (
  <>
    <FlexContent>
      <div>test</div>
      <div>test</div>
    </FlexContent>
    <Card />
  </>
));
export default App;
