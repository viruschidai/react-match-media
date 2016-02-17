import React, { Component } from 'react';

export default class MatchMedia extends Component {

  constructor(props) {
    super(props);
    this.state = {show: false};
    this.mql = null;
    this.onMatch = (mql) => this._onMatch(mql);
  }

  componentDidMount() {
    this.mql = window.matchMedia(this.props.mediaQuery);
    this.mql.addListener(this.onMatch);
    this.onMatch(this.mql);
  }

  componentWillUnmount() {
    this.mql && this.mql.removeListener(this.onMatch);
  }

  _onMatch(mql) {
    let show = !!mql.matches;
    this.setState({show});
  }

  render() {
    if (!this.props.children || !isClient() || !this.state.show) return false;

    return(
      <div className="match-media">
        {this.props.children}
      </div>
    );
  }
}

MatchMedia.propTypes = {
  mediaQuery: React.PropTypes.string.isRequired
};

function isClient() {
  return typeof window !== 'undefined';
}
