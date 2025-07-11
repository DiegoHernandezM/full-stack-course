const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Total parts={props.parts[0]} />
      <Part part={props.parts[1]} /> 
      <Total parts={props.parts[1]} />
      <Part part={props.parts[2]} />
      <Total parts={props.parts[2]} />
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.part.name}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Total de ejercicios: {props.parts.exercises}</p>
    </div>
  )
}

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
      <Content parts={parts} />
    </div>
  )
}

export default App