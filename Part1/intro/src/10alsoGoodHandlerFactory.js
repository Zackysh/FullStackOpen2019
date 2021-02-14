import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [value, setValue] = useState(10)

  /* First method */
  const setToValue = (newValue) => {
    setValue(newValue)
  }
  /* Second method */
  const setToValueToo = (newValue) => () => {
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}> {/* First method */}
        thousand
      </button>
      <button onClick={setToValueToo(0)}> {/* First method */}
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}> {/* Second method */}
        increment
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)