// import { useState, useEffect } from "react"

const CourseCard = ({ course }) => {



    return (
        <div className="courseCard">
            {/* {console.log('course:', course)} */}



            <h2>{course.name}</h2>
            <div>{course.references}</div>
        </div>
    )
}

export default CourseCard;