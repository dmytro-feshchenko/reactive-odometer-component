import React, {Component} from 'react'
import {render} from 'react-dom'

import ReactiveOdometer from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Reactive Odometer Demo</h1>
      <ReactiveOdometer start={0} end={6789} time={5000}/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'));
