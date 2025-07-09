import './App.css'

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

function App() {
  const now = new Date();
  const a = 10;
  const b = 20;
  const name = 'Diego';
  const age = 33;
  console.log(now, a+b);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age}/>
      <Hello name='George' age={20 + 10}/>
      <p>It is {now.toString()}</p>
      <p>plus {b} is {a+b}</p>
      <Footer />
    </div>
  )
}

export default App
