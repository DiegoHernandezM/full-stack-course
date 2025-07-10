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
            {props.part.map(part => {
                return (
                    <>
                        <p>{part.name} {part.exercises}</p>
                    </>
                    
                )
            })}

        </div>
    )
}


export default Course