import PageTitle from "../components/PageTitle";
import StudentRow from "../components/StudentRow";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import { BaseUrlContext } from "../../BaseUrlContext";

const Students = () => {
  const [studentList, setStudentList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const baseUrl = useContext(BaseUrlContext);

  useEffect(() => {
    const getStudentList = async () => {
      try {
        const response = await fetch(`${baseUrl}/students`);
        const data = await response.json();
        setStudentList(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getStudentList();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong</p>;

  return (
    <main>
      <PageTitle text="Students" />
      <Wrapper>
        <table className="table">
          <thead>
            <tr className="bg-primary-content">
              <th>Name</th>
              <th>Info</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {studentList.map((student) => {
              return (
                <StudentRow
                  key={student.id}
                  studentName={student.student_name}
                  studentId={student.id}
                  studentList={studentList}
                  setStudentList={setStudentList}
                />
              );
            })}
          </tbody>
        </table>
      </Wrapper>
      <section className="flex justify-center my-4">
        <Link to={"../new-student"}>
          <button className="btn btn-primary">Add Student</button>
        </Link>
      </section>
    </main>
  );
};

export default Students;
