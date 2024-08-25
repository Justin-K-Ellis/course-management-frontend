import SmallButton from "./SmallButton";
import { deleteCourse } from "../crud_services/coursesCrud";

const CourseRow = ({
  courseId,
  courseName,
  instructor,
  coursesInfo,
  setCoursesInfo,
}) => {
  const handleDelete = (courseId) => {
    deleteCourse(courseId);
    // console.log(`${courseId} deleted!`);
    // console.log(typeof coursesInfo, "Course list:", coursesInfo);

    const newCourseList = coursesInfo.filter(
      (course) => course.id !== courseId
    );
    setCoursesInfo(newCourseList);
  };

  return (
    <tr className="hover">
      <th>{courseId}</th>
      <td>{courseName}</td>
      <td>{instructor}</td>
      <td onClick={() => handleDelete(courseId)}>
        <SmallButton style="warning" text="Del" />
      </td>
      <td>
        <SmallButton style="accent" text="Update" />
      </td>
    </tr>
  );
};

export default CourseRow;
