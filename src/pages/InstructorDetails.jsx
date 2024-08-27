import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const InstructorDetails = () => {
  const { id } = useParams();
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInstructorDetails = async (instructorId) => {
      try {
        const url = `http://localhost:3000/instructors/courses/${instructorId}`;
        const response = await fetch(url);
        const data = await response.json();
        setInstructorDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getInstructorDetails(id);
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main>
      <div className="card bg-base-100 w-96 shadow-xl mt-4 pb-4 pr-4 mx-auto">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            {instructorDetails[0].inst_name}
          </h2>
          <h3 className="font-bold">Courses taught:</h3>
          <ul className="list-disc ml-4">
            {instructorDetails.map((details) => {
              return <li key={details.id}>{details.course_name}</li>;
            })}
          </ul>
        </div>
        <div className="card-actions justify-end">
          <a className="btn btn-primary update-btn">Update</a>
          <a className="btn btn-warning delete-btn">Delete</a>
        </div>
      </div>
    </main>
  );
};

export default InstructorDetails;
