import SmallButton from "./SmallButton";

const CourseRow = ({ courseId, courseName, instructor }) => {
  return (
    <tr className="hover">
      <th>{courseId}</th>
      <td>{courseName}</td>
      <td>{instructor}</td>
      <td>
        <SmallButton style="warning" text="Del" />
      </td>
      <td>
        <SmallButton style="accent" text="Update" />
      </td>
    </tr>
  );
};

export default CourseRow;
