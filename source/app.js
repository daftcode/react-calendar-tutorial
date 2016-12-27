import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
// a localizer for BigCalendar
BigCalendar.momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
require('style!css!react-big-calendar/lib/css/react-big-calendar.css')

class App extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      // React Components in JSX look like HTML tags
      <BigCalendar
        style={{height: '420px'}}
        events={[]}
      />
    )
  }
}

render(<App />, document.getElementById('root'))
