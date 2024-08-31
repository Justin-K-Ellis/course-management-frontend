import SmallButton from "./SmallButton";
import { deleteCourse } from "../crud_services/coursesCrud";
import { Link } from "react-router-dom";

const CourseRow = ({
  courseId,
  courseName,
  instructorName,
  instructorId,
  coursesInfo,
  setCoursesInfo,
}) => {
  const handleDelete = (courseId) => {
    const answer = confirm("Are you sure you want to delete this course?");
    if (answer) {
      deleteCourse(courseId);
      const newCourseList = coursesInfo.filter(
        (course) => course.id !== courseId
      );
      setCoursesInfo(newCourseList);
    }
  };

  return (
    <tr className="hover">
      <td>{courseName}</td>
      <td>{instructorName}</td>

      <td>
        <Link to={`../update-course/${courseId}/${courseName}`}>
          <SmallButton style="accent" text="Update" />
        </Link>
      </td>
      <td onClick={() => handleDelete(courseId)}>
        <SmallButton style="warning" text="Del" onClick />
      </td>
    </tr>
  );
};

export default CourseRow;
