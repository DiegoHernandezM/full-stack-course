import React from "react";

const Course = (props) => {
    return (
        <div>
            <Header name={props.course.name} />
            <Content course={props.course} />
        </div>
    )

}

const Header = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.course.parts} />
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <ul>
                {props.part.map(part => {
                    return (
                        <li key={part.id}>{part.name} {part.exercises}</li>
                    )
                })}
            </ul>

        </div>
    )
}


export default Course