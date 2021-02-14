import React from 'react'

const Course = ({ course }) => {
    const exercises = course.parts.map(part => part.exercises).reduce((a, b) => a + b)
    const parts = course.parts?.map(
        (part) => <p key={part.id}>{part.name} {part.exercises}</p>
    );
    return (
        <>
            <h2>{course.name}</h2>
            <div>{parts}</div>
            {<strong>Total of exercises: {exercises}</strong>}
        </>
    )
}

export default Course;