import { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import InstructorRow from "../components/InstructorRow";

const Instructors = () => {
  const [instructorsInfo, setInstructorsInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getInstructors = async () => {
      try {
        const response = await fetch("http://localhost:3000/instructors");
        const data = await response.json();
        console.log(data);

        setInstructorsInfo(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getInstructors();
  }, []);

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>An error occurred.</div>;

  return (
    <>
      <PageTitle text="Instructors" />
      <div className="overflow-x-auto shadow-md rounded-md">
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
            {instructorsInfo.map((inst) => {
              return (
                <InstructorRow key={inst.id} instructorName={inst.inst_name} />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Instructors;
