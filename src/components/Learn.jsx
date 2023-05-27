import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import CourseCard from "./CourseCard";

const Learn = () => {
    const [courseList, setCourseList] = useState({ courses: [] })

    // useEffect(() => {
    //     fetch('/courses').then(res => res.json()).then(data => {
    //         setCourseList(data)
    //         console.log('courseList:', courseList)
    //     })
    // }, [])

    // const getCourses = async () => {

    // }

    useEffect(() => {
        const getCourses = async () => {
            let req = await fetch('/courses')
            let res = await req.json()

            setCourseList(res)
        }
        getCourses();
    }, [])

    if (courseList.length === 0) {
        return 'loading...'
    }

    return (
        <div >
            <Navbar />
            <h1>Learning Center</h1>
            <div className="learningCenter">



                {
                    courseList['courses'].map((course) => {
                        return (
                            <CourseCard
                                key={course.name}
                                course={course}
                            />
                        )
                    })
                }

                {/* <CourseCard />
                <CourseCard />
                <CourseCard /> */}
            </div>
        </div>
    )
}


export default Learn;