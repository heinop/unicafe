import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Result = ({ label, value }) => {
  return (
    <>
      <span>{label} {value}</span>
      <br />
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  if (total === 0) {
    return (<span>No feedback given</span>)
  }

  const calculateAverage = () => (good - bad) / total;
  const calculatePositive = () => (good / total) * 100 + '%';

  return (
    <>
      <Result label='good' value={good} />
      <Result label='neutral' value={neutral} />
      <Result label='bad' value={bad} />
      <Result label='all' value={good + neutral + bad} />
      <Result label='average' value={calculateAverage()} />
      <Result label='positive' value={calculatePositive()} />
    </>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Title text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
