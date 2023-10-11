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
      <Content data1 = {parts[0]} data2 = {parts[1]} data3 = {parts[2]}/>
      <Total data1 = {parts[0]} data2 = {parts[1]} data3 = {parts[2]}/>
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
      <Part part = {props.data1}/> 
      <Part part = {props.data2}/> 
      <Part part = {props.data3}/> 
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

const ex1 = props.data1.exercises
const ex2 = props.data2.exercises
const ex3 = props.data3.exercises
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