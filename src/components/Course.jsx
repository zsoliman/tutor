import Navbar from "./Navbar";

const Course = ({ course }) => {
    { console.log('course:', course) }
    return (
        <div>
            <Navbar />
            <h1>Course Page</h1>
            {/* <h2>{course.name}</h2> */}
        </div>
    )
}

export default Course;