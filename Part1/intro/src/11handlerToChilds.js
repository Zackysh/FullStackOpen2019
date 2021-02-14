import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

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
    <>
      {value}
      <Button handleClick={() => setToValue(1000)} text="thousand" /> {/* First method */}
      <Button handleClick={() => setToValue(0)} text="reset" /> {/* First method */}
      <Button handleClick={setToValueToo(value + 1)} text="increment" /> {/* First method */}
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)