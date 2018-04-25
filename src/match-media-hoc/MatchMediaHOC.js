import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MatchMediaHOC = (ComposedComponent, mediaQuery) => class extends Component {
  constructor(props) {
    super(props);
    this.state = {show: false};
    this.mql = null;
    this.onMatch = (mql) => this._onMatch(mql);
  }

  componentDidMount() {
    if ( !window.matchMedia ) return;

    this.mql = window.matchMedia(mediaQuery);
    this.mql.addListener(this.onMatch);
    this.onMatch(this.mql);
  }

  componentWillUnmount() {
    this.mql && this.mql.removeListener(this.onMatch);
  }

  _onMatch(mql) {
    const show = !!mql.matches;
    this.setState({show});
  }

  render() {
    if (!this.state.show) return false;
    return <ComposedComponent {...this.props} />;
  }
};

MatchMediaHOC.propTypes = {
  mediaQuery: PropTypes.string.isRequired
};

export default MatchMediaHOC;
