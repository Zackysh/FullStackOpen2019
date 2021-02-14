import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = ({ title, value }) => {
  return (
    <tr>
      <td>
        {title}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = all > 0 ? (good - bad) / all : 0;
  const positive = all > 0 ? (good / all) * 100 : 0;
  if (all > 0) {
    return (
      <table>
        <Statistic title="good" value={good} />
        <Statistic title="neutral" value={neutral} />
        <Statistic title="bad" value={bad} />
        <Statistic title="all" value={all} />
        <Statistic title="average" value={average} />
        <Statistic title="positive" value={`${positive}%`} />
      </table>
    )
  }
  return <p>No feedback given</p>;
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <>
      <h1>Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)