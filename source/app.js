import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      who: "React"
    }
  }
  render () {
    return (
      <div>
        {`Hello ${this.state.who}`}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
