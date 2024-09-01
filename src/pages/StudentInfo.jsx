import PageTitle from "../components/PageTitle";
import { BaseUrlContext } from "../../BaseUrlContext";
import InfoCard from "../components/InfoCard";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { deleteStudent } from "../crud_services/studentCrud";

const StudentInfo = () => {
  const { studentId, studentName } = useParams();
  const [registeredCourses, setRegisteredCourses] = useState([]);
  const baseUrl = useContext(BaseUrlContext);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetch(
          `${baseUrl}/students/all-courses/${studentId}`
        );
        const data = await response.json();
        setRegisteredCourses(data);
      } catch (error) {
        console.log(error);
      }
    };
    getCourses();
  }, []);

  registeredCourses && console.log(registeredCourses);
  const noCourses = "This student is not taking any courses.";

  return (
    <main>
      <PageTitle text="Student Info" />
      <InfoCard
        name={studentName}
        updateLink={`../update-student/${studentId}/${studentName}`}
        deleteFunction={deleteStudent}
        deleteTarget={studentId}
        deleteWarning="Are you sure you want to delete this student?"
        backTarget="../students"
      >
        {registeredCourses.length > 0 ? (
          <>
            <h2 className="font-bold text-xl decoration-solid">
              Registered Courses
            </h2>
            <ul className="list-disc ml-4">
              {registeredCourses.map((course) => {
                return <li key={course.id}>{course.course_name}</li>;
              })}
            </ul>
          </>
        ) : (
          <p>{noCourses}</p>
        )}
      </InfoCard>
    </main>
  );
};

export default StudentInfo;
