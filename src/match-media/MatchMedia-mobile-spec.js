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

  it('should not render on window size less than 500px', function () {
    let testElements = ReactTestUtils.scryRenderedDOMComponentsWithClass(page, 'testDiv');
    expect(testElements.length).toBe(0);
  });
});
