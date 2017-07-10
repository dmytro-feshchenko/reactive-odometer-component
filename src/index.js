import React, {Component} from 'react';
import Rx from 'rx';
import { rxConnect } from 'rx-connect';
import PropTypes from 'prop-types';

@rxConnect(() => {
  return Rx.Observable.timer(0, 10).startWith(10).takeWhile(val => val <= 1000).timestamp()
})
class Odometer extends React.PureComponent {
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
