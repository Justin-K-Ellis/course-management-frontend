import { useContext, useEffect, useState } from "react";
import PageTitle from "../components/PageTitle";
import Wrapper from "../layouts/Wrapper";
import { useParams } from "react-router-dom";
import { putNewName, postNewCourse } from "../crud_services/studentCrud";
import { useNavigate } from "react-router-dom";
import { deregisterCourse } from "../crud_services/studentCrud";
import { BaseUrlContext } from "../../BaseUrlContext";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const UpdateStudent = () => {
  const { studentId, studentName } = useParams();
  const [newName, setNewName] = useState(studentName);

  const [selectedCourse, setSelectedCourse] = useState("");

  const [courseList, setCourseList] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);
  const [isCoursesError, setIsCoursesError] = useState(false);

  const [registeredCourses, setRegisteredCourses] = useState([]);
  const [registeredLoading, setRegisteredLoading] = useState(true);
  const [isRegisteredError, setIsRegisteredError] = useState(false);

  const baseUrl = useContext(BaseUrlContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getCourse = async () => {
      try {
        const response = await fetch(`${baseUrl}/courses`);
        const data = await response.json();
        setCourseList(data);
      } catch (error) {
        console.log(error);
        setIsCoursesError(true);
      } finally {
        setCoursesLoading(false);
      }
    };
    getCourse();
  }, []);

  useEffect(() => {
    const getRegisteredCourses = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/students/all-courses/${studentId}`
        );
        const data = await response.json();
        setRegisteredCourses(data);
      } catch (error) {
        console.log(error);
        setIsRegisteredError(true);
      } finally {
        setRegisteredLoading(false);
      }
    };
    getRegisteredCourses();
  }, []);

  // Build a course-name to course-id hash to send id to server.
  const courseHash = new Map();
  for (let course of courseList) {
    courseHash.set(course.course_name, course.id);
  }

  const handleNameSubmit = (event) => {
    event.preventDefault();
    putNewName(newName, studentId);
    navigate("../students");
  };

  const handleCourseSubmit = (event) => {
    event.preventDefault();
    const courseId = courseHash.get(selectedCourse);
    postNewCourse(courseId, studentId);
    navigate("../students");
  };

  const handleDeregister = (courseId) => {
    const answer = confirm("Are you sure you want to deregister this course?");
    if (answer) {
      deregisterCourse(courseId, studentId);
      const newRegisteredCourses = registeredCourses.filter(
        (course) => course.id !== courseId
      );
      setRegisteredCourses(newRegisteredCourses);
    }
    navigate(-1);
  };

  if (coursesLoading || registeredLoading) return <LoadingSpinner />;
  if (isCoursesError || isRegisteredError) return <ErrorMessage />;

  return (
    <main>
      <PageTitle text={`Update ${studentName}`} />
      <Wrapper>
        <div className="flex flex-col gap-2">
          {/* Form for updating name. */}
          <form
            className="flex flex-col justify-center items-center gap-2 p-2"
            onSubmit={handleNameSubmit}
          >
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
          <form
            className="flex flex-col justify-center items-center gap-2 p-2"
            onSubmit={handleCourseSubmit}
          >
            <p className="font-bold">Register a course</p>
            <select
              className="select select-bordered w-full max-w-xs"
              onChange={(event) => setSelectedCourse(event.target.value)}
            >
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
          <hr />
          <div className="p-2">
            <table className="table">
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Deregister</th>
                </tr>
              </thead>
              <tbody>
                {registeredCourses.map((course) => {
                  return (
                    <tr key={course.id} className="hover:bg-base-200">
                      <td>{course.course_name}</td>
                      <td>
                        <button
                          className="btn btn-xs btn-warning"
                          onClick={() => handleDeregister(course.id)}
                        >
                          Deregister
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};

export default UpdateStudent;
