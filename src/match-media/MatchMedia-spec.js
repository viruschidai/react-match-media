import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MatchMedia from './MatchMedia';

describe('MatchMedia', function () {
  let page;

  beforeEach(function () {
    page = ReactTestUtils.renderIntoDocument(
      <MatchMedia className="testClass" mediaQuery={'(min-width: 0px)'}>
        <div className="testDiv" />
      </MatchMedia>);
  });

  it('allows to add custom class names to the container', function () {
    let testElement = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'testClass');
    expect(testElement).toBeDefined();
  });
});
