import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MatchMedia from './MatchMedia';

describe('MatchMedia', function () {
  let page;

  beforeEach(function () {
    page = ReactTestUtils.renderIntoDocument(
      <MatchMedia mediaQuery={'(min-width: 500px)'}>
        <div className="testDiv" />
      </MatchMedia>);
  });

  it('renders when window size >= 500px', function () {
    let testElement = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'testDiv');
    expect(testElement).toBeDefined();
  });
});
