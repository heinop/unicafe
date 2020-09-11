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

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const calculateAverage = () => (good - bad) / (good + neutral + bad);
  const calculatePositive = () => (good / (good + neutral + bad)) * 100 + '%';

  return (
    <div>
      <Title text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Title text='statistics' />
      <Result label='good' value={good} />
      <Result label='neutral' value={neutral} />
      <Result label='bad' value={bad} />
      <Result label='all' value={good + neutral + bad} />
      <Result label='average' value={calculateAverage()} />
      <Result label='positive' value={calculatePositive()} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
