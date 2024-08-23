import CourseRow from "../components/CourseRow";

const Courses = () => {
  return (
    <div className="overflow-x-auto shadow-md rounded-md">
      <table className="table">
        <thead>
          <tr className="bg-primary-content">
            <th>Course ID</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          <CourseRow />
        </tbody>
      </table>
    </div>
  );
};

export default Courses;
