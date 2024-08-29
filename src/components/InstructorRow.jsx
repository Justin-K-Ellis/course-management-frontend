import SmallButton from "./SmallButton";
// import InstructorInfo from "./InstructorInfo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteInstructor } from "../crud_services/instructorsCrud";

const InstructorRow = ({
  instructorName,
  instructorId,
  instructorList,
  setInstructorList,
}) => {
  const [instructorDetails, setInstructorDetails] = useState([]);

  useEffect(() => {
    const getInstructorDetails = async (instructorId) => {
      const url = `http://localhost:3000/instructors/courses/${instructorId}`;
      const response = await fetch(url);
      const data = await response.json();
      setInstructorDetails(data);
    };
    getInstructorDetails(instructorId);
  }, []);
  console.log(instructorDetails);

  const handleDelete = (instructorId) => {
    const reply = confirm(
      "Are you sure you want to delete this instructor? Their courses will no longer be accessable."
    );
    if (reply) {
      deleteInstructor(instructorId);
      const newInstructorList = instructorList.filter(
        (id) => id !== instructorId
      );
      setInstructorList(newInstructorList);
    }
  };

  return (
    <tr className="hover">
      <td>{instructorName}</td>
      <td>
        <Link to={`../instructor-details/${instructorId}`}>
          <SmallButton style="primary" text="Info" />
        </Link>
      </td>
      <td>
        <Link to={`../update-instructor/${instructorId}`}>
          <SmallButton style="accent" text="Update" />
        </Link>
      </td>
      <td onClick={() => handleDelete(instructorId)}>
        <SmallButton style="warning" text="Del" />
      </td>
    </tr>
  );
};

export default InstructorRow;
