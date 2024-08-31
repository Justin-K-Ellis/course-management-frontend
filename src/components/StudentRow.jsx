import SmallButton from "./SmallButton";
import { deleteStudent } from "../crud_services/studentCrud";
import { Link } from "react-router-dom";

const StudentRow = ({
  studentName,
  studentId,
  studentList,
  setStudentList,
}) => {
  const handleDelete = (studentId) => {
    const reply = confirm("Are you sure you want to delete this student?");
    if (reply) {
      deleteStudent(studentId);
      const newStudentList = studentList.filter(
        (student) => student.id !== studentId
      );
      setStudentList(newStudentList);
    }
  };

  return (
    <tr className="hover">
      {/* <td>{studentId}</td> */}
      <td>{studentName}</td>
      <td>
        <Link to={`../student-details/${studentId}/${studentName}`}>
          <SmallButton style="primary" text="Info" />
        </Link>
      </td>
      <td>
        <Link to={`../update-student/${studentId}/${studentName}`}>
          <SmallButton style="accent" text="Update" />
        </Link>
      </td>
      <td onClick={() => handleDelete(studentId)}>
        <SmallButton style="warning" text="Del" />
      </td>
    </tr>
  );
};

export default StudentRow;
