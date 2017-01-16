import React from 'react';
import { MatchMediaHOC } from '../src';

const styles = {
  backgroundColor: '#ccc',
  color: 'red',
  lineHeight: '100px',
  fontSize: '50px',
  marginTop: '50px',
  textAlign: 'center'
};

const InfoPanel = () => {
  return <div style={styles}>I am rendered</div>;
};

export default MatchMediaHOC(InfoPanel, '(min-width: 500px)');
