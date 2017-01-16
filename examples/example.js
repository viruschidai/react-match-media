import React from 'react';
import ReactDOM from 'react-dom';
import InfoPanel from './InfoPanel';

ReactDOM.render(
  <div className="example">
    <div>Content below is only rendered on screen size bigger than 500px </div>
    <InfoPanel />
  </div>,
  document.getElementById('root')
);
