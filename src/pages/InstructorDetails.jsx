import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { deleteInstructor } from "../crud_services/instructorsCrud";
import InfoCard from "../components/InfoCard";
import { BaseUrlContext } from "../../BaseUrlContext";

const InstructorDetails = () => {
  const { id } = useParams();
  const [instructorDetails, setInstructorDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const baseUrl = useContext(BaseUrlContext);

  useEffect(() => {
    const getInstructorDetails = async (instructorId) => {
      try {
        const url = `${baseUrl}/instructors/courses/${instructorId}`;
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
      <InfoCard
        name={instructorDetails[0].inst_name}
        updateLink={`../update-instructor/${id}`}
        deleteFunction={deleteInstructor}
        deleteTarget={id}
        deleteWarning="Are you sure you want to delete this instructor? Their courses will no longer be accessable."
        backTarget={"../instructors"}
      >
        <h3 className="font-bold">Courses taught:</h3>
        <ul className="list-disc ml-4">
          {instructorDetails.map((details) => {
            return <li key={details.id}>{details.course_name}</li>;
          })}
        </ul>
      </InfoCard>
    </main>
  );
};

export default InstructorDetails;
