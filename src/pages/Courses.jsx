import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CourseRow from "../components/CourseRow";
import PageTitle from "../components/PageTitle";
import Wrapper from "../layouts/Wrapper";

const Courses = () => {
  const [coursesInfo, setCoursesInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/courses");
        const data = await response.json();
        setCoursesInfo(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getCourses();
  }, []);

  if (isLoading) return <p>Loading</p>;
  if (isError) return <p>An error occured.</p>;

  return (
    <main>
      <PageTitle text="Courses" />
      <Wrapper>
        <main>
          <table className="table">
            <thead>
              <tr className="bg-primary-content">
                {/* <th>Course ID</th> */}
                <th>Name</th>
                <th>Instructor</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {coursesInfo?.map((course) => {
                return (
                  <CourseRow
                    key={course.id}
                    courseId={course.id}
                    courseName={course.course_name}
                    instructorName={course.inst_name}
                    instructorId={course.instructor_id}
                    coursesInfo={coursesInfo}
                    setCoursesInfo={setCoursesInfo}
                  />
                );
              })}
            </tbody>
          </table>
        </main>
      </Wrapper>
      <div className="flex justify-center gap-2 my-4">
        <Link to={"/new-course"}>
          <button className="btn btn-primary">Add Course</button>
        </Link>
        <Link to={"/courses-students"}>
          <button className="btn btn-accent">All Courses & Students</button>
        </Link>
      </div>
    </main>
  );
};

export default Courses;
