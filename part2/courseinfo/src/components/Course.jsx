import React from 'react';

const Course = (props) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {props.courses.map(course => (
        <React.Fragment key={course.id}>
          <Header name={course.name} />
          <Content course={course.parts} />
          <Total course={course.parts} />
        </React.Fragment>
      ))}
    </div>
  );
};

const Header = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  )
}

const Content = (props) => {
  return (
    <>
      {props.course.map(part => (
        <Part key={part.id} part={part} />
      ))}
    </>
  );
};


const Part = (props) => {
  return (
    <div>
      <ul>
        <li>{props.part.name} {props.part.exercises}</li>
      </ul>
    </div>
  );
};

const Total = ({ course }) => {
  const total = course.reduce((sum, part) => sum + part.exercises, 0);
  return <p><strong>Total of {total} exercises</strong></p>;
};


export default Course