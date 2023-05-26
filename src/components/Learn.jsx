import Navbar from "./Navbar"
import CourseCard from "./CourseCard";

const Learn = () => {
    return (
        <div >
            <Navbar />
            <h1>Learning Center</h1>
            <div className="learningCenter">

                <CourseCard />
                <CourseCard />
                <CourseCard />
            </div>
        </div>
    )
}

export default Learn;