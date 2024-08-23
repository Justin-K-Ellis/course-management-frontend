import { useEffect, useState } from "react";
import CourseRow from "../components/CourseRow";
import PageTitle from "../components/PageTitle";

const Courses = () => {
  const [coursesInfo, setCoursesInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/courses");
        const data = await response.json();
        console.log(data);
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
    <>
      <PageTitle text="Courses" />
      <div className="overflow-x-auto shadow-md rounded-md">
        <table className="table">
          <thead>
            <tr className="bg-primary-content">
              <th>Course ID</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {coursesInfo?.map((course) => {
              return (
                <CourseRow
                  key={course.id}
                  courseId={course.id}
                  courseName={course.course_name}
                  instructor={course.inst_name}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Courses;
