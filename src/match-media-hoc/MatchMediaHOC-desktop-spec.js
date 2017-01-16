import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import MatchMediaHOC from './MatchMediaHOC';

describe('MatchMediaHOC', function () {
  let page;

  beforeEach(function () {
    const ComposedComponent = () => {
      return <div className="composed-div"></div>;
    };

    const ComponentWillRender = MatchMediaHOC(ComposedComponent, '(min-width: 500px)');
    page = ReactTestUtils.renderIntoDocument( <ComponentWillRender />);
  });

  it('renders when window size >= 500px', function () {
    const testDiv = ReactTestUtils.findRenderedDOMComponentWithClass(page, 'composed-div');
    expect(testDiv).toBeDefined();
  });
});
