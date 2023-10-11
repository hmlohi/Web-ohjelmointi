const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
 )
}
const Header = props => {
  return(
    <div>
      <h1>
        {props.course} 
      </h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part = {props.parts[0]}/> 
      <Part part = {props.parts[1]}/> 
      <Part part = {props.parts[2]}/> 
    </div>
  )
}

const Part = (props) => {
  
  const partOlio = props.part
  return(
      <p>
        {partOlio.name} {partOlio.exercises}
      </p>
  )
}

const Total = (props) => {

const ex1 = props.parts[0].exercises
const ex2 = props.parts[1].exercises
const ex3 = props.parts[2].exercises
const sum = ex1 + ex2 + ex3

  return (
    <div>
      <p>
        Number of exercises {sum}
      </p>
    </div>
  )
}
export default App