import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MatchMediaHOC from './MatchMediaHOC';

describe('MatchMediaHOC', function () {
  let page;

  beforeEach(function () {
    const ComposedComponent = () => {
      return <div className="composed-div" />;
    };

    const Component = MatchMediaHOC(ComposedComponent, '(min-width: 500px)');
    page = ReactTestUtils.renderIntoDocument(
      <Component />);
  });

  it('should not render on window size less than 500px', function () {
    const testDiv = ReactTestUtils.scryRenderedDOMComponentsWithClass(page, 'composed-div');
    expect(testDiv.length).toBe(0);
  });
});
