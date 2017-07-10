import React, {Component} from 'react';
import Rx from 'rx';
import { rxConnect } from 'rx-connect';
import PropTypes from 'prop-types';

@rxConnect(
    Rx.Observable.timer(0, 1000).timestamp()
)
class Odometer extends React.PureComponent {

  constructor() {
    super();
    // this.state = {
    //   value: 0
    // };
    // this.subscription = undefined;
  }

  componentWillMount() {
    // this.subscription = Rx.Observable.timer(0, 1000).timestamp().subscribe(::this.setState)
  }

  componentWillUnmount() {
    // this.subscription.dispose();
  }

  render() {
    return <div>{this.props.value}</div>
  }
}

Odometer.propTypes = {
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired
};

export default Odometer;
