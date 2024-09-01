import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import PageTitle from "../components/PageTitle";
import Wrapper from "../layouts/Wrapper";
import { BaseUrlContext } from "../../BaseUrlContext";
import { useContext } from "react";

const CoursesStudents = () => {
  const [coursesStudents, setCoursesStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const baseUrl = useContext(BaseUrlContext);

  useEffect(() => {
    const getCoursesStudents = async () => {
      try {
        const response = await fetch(`${baseUrl}/courses/courses-students`);
        const data = await response.json();
        setCoursesStudents(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    getCoursesStudents();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error...</p>;

  return (
    <>
      <PageTitle text="All Courses and Students" />
      <Wrapper>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Course</th>
                <th>Student</th>
              </tr>
            </thead>
            <tbody>
              {coursesStudents.map((info) => {
                return (
                  <tr key={nanoid()}>
                    <td>{info.course_name}</td>
                    <td>{info.student_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </>
  );
};

export default CoursesStudents;
