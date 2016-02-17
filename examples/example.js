import React from 'react';
import ReactDOM from 'react-dom';
import { MatchMedia } from '../src';

const testDivStyles = {
  backgroundColor: '#ccc',
  color: 'red',
  lineHeight: '100px',
  fontSize: '50px',
  marginTop: '50px',
  textAlign: 'center'
}

ReactDOM.render(
  <div className="example">
    <div>Content below is only rendered on screen size bigger than 500px </div>
    <MatchMedia mediaQuery={'(min-width: 500px)'}>
      <div style={testDivStyles}>I am rendered</div>
    </MatchMedia>
  </div>,
  document.getElementById('root')
);
