import { useState } from "react"

import "./style.css"

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)
  console.log(good)
  return (
    <div>
      <h1> Please, give feedback: </h1>
      <Button handleClick={increaseGood} text="Good" />
      <Button handleClick={increaseNeutral} text="Neutral" />
      <Button handleClick={increaseBad} text="Bad" />
      <h2> Statistics: </h2>
      <Display good={good} neutral={neutral} bad={bad} />
      <All data1={good} data2={neutral} data3={bad} />
      <Average good={good} neutral={neutral} bad={bad} />
      <Positive good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
const Display = (props) => {
  return (
    <div>
      <Value text="Good:" display={props.good} />
      <Value text="Neutral:" display={props.neutral} />
      <Value text="Bad:" display={props.bad} />
    </div>
  )
}

const Value = (props) => {
  return (
    <p>
      {" "}
      {props.text} {props.display}
    </p>
  )
}

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}
// 1.7 Added All-component to shoe the amount of answers given
const All = (props) => {
  console.log(props)
  return <div> All submissions: {props.data1 + props.data2 + props.data3}</div>
}
// 1.7 Added Average-component to count the average of the answers
const Average = (props) => {
  return (
    <div>
      Average: {1 * props.good + 0 * props.neutral + -1 * props.bad}/{" "}
      {props.good + props.neutral + props.bad}
    </div>
  )
}
//1.7 Added Positive-component to counut the amount of positive feedback compared to all answers
const Positive = (props) => {
  return (
    <div>
      Positive: {props.good} / {props.good + props.bad + props.neutral}{" "}
    </div>
  )
}

export default App
