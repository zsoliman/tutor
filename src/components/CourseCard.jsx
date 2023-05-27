import Course from "./Course"
// import { Link } from 'react-router-dom'

const CourseCard = ({ course }) => {

    const openCourse = () => {

    }

    return (
        <div className="courseCard">
            {console.log('course:', course)}

            {/* <Link
                className='Link'
                to='/course'>
            </Link> */}

            {/* <h2 onClick={openCourse}>{course.name}</h2> */}
            <a href="http://localhost:3000/course">{course.name}</a>

            <div>{course.references}</div>

            <div
                className="hidden"
            >
                <Course course={course} />
            </div>

            {/* <Link
                className='Link'
                to='/'>
                <h3>Home</h3>
            </Link> */}



        </div>
    )
}

export default CourseCard;