React Match Media
=========================================

A [React](https://github.com/facebook/react) component that allows you to conditionally render your components based on media queries for your responsive website. 

Underline it uses [window.matchMedia](https://developer.mozilla.org/en/docs/Web/API/Window/matchMedia)


![alt tag](https://github.com/viruschidai/react-match-media/blob/master/match-media.gif)

## Usage
### Install
```
npm i react-match-media
```

### Use it in your code (es6 syntax)
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { MatchMedia } from 'react-match-media';

ReactDOM.render(
  <div className="example">
    <SomeElementAlwaysRendered />
    <MatchMedia mediaQuery={'(min-width: 800px)'}>
      <ElementRenderedWhenMatchMediaQuery />
    </MatchMedia>
  </div>,
  document.getElementById('root')
)
```
For more, see the [examples](./examples)

### Supported browsers
  - IE10 and above
  - All other major browsers

For more, see [Can I Use matchMedia](http://caniuse.com/#search=matchMedia)

## Development of this component

### Start the example

```
npm install
npm start
open http://localhost:3000
```
And then you can edit the source code, hotreloading is enabled, so you can see the changes immediatly

### Linting

```
npm run lint
```

### Testing

```
npm run test 
```

### To generate distribution code

```
npm run build
```

### License
MIT
