import React from 'react';
import Media from 'react-media';
import Desktop from './Desktop';
import Mobile from './Mobile';

const App = () => {
  return (
    <Media query="(max-width: 799px)">
      {matches =>
        matches ?
          <Mobile/>
          :
          <Desktop/>
      }
    </Media>
  );
}

export default App;
