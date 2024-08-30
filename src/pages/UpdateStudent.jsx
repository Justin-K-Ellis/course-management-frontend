import { useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Wrapper from "../layouts/Wrapper";
import { useParams } from "react-router-dom";

const UpdateStudent = () => {
  const { studentId, studentName } = useParams();
  const [newName, setNewName] = useState(studentName);
  const [courseList, setCourseList] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await fetch("http://localhost:3000/courses");
        const data = await response.json();
        setCourseList(data);
        setCoursesLoading(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };
    getCourse();
  }, []);

  if (coursesLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong.</p>;

  return (
    <main>
      <PageTitle text={`Update ${studentName}`} />
      <Wrapper>
        <div className="flex flex-col gap-2">
          {/* Form for updating name. */}
          <form className="flex flex-col justify-center items-center gap-2 p-2">
            <label htmlFor="update-name" className="font-bold">
              Update name
            </label>
            <input
              type="text"
              id="update-name"
              name="update-name"
              className="input input-bordered w-full max-w-xs"
              placeholder="New name"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <hr />
          {/* Form for adding a course. */}
          <form className="flex flex-col justify-center items-center gap-2 p-2">
            <p className="font-bold">Register a course</p>
            <select className="select select-bordered w-full max-w-xs">
              <option disabled selected>
                Select a course
              </option>
              {courseList.map((course) => {
                return <option key={course.id}>{course.course_name}</option>;
              })}
            </select>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Wrapper>
    </main>
  );
};

export default UpdateStudent;
