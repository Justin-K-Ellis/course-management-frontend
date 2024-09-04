import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseUrlContext } from "../../BaseUrlContext";
import PageTitle from "../components/PageTitle";
import { postCourse } from "../crud_services/coursesCrud";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const NewCourse = () => {
  const [newCourse, setNewCourse] = useState("");
  const [instructorList, setInstructorList] = useState(null);
  const [instructorsLoading, setInstructorsLoading] = useState(true);
  const [instructorName, setInstructorName] = useState("");
  const [isError, setIsError] = useState(false);
  const baseUrl = useContext(BaseUrlContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getInstructorList = async () => {
      try {
        const response = await fetch(`${baseUrl}/instructors`);
        const data = await response.json();
        setInstructorList(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setInstructorsLoading(false);
      }
    };
    getInstructorList();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    postCourse(newCourse, instructorName);
    navigate("/courses");
  };

  const handleDropDownChange = (event) => {
    setInstructorName(event.target.value);
  };

  if (instructorsLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;

  return (
    <main>
      <PageTitle text="Add a Course" />
      <div className="shadow-md rounded-md p-8">
        <form
          className="flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          {/* Course name */}
          <label htmlFor="course_name" className="font-bold">
            Course name
          </label>
          <input
            type="text"
            placeholder="New course"
            className="input input-bordered w-full max-w-xs"
            id="course_name"
            name="course_name"
            value={newCourse}
            onChange={(event) => setNewCourse(event.target.value)}
            required
          />
          {/* Instructor Selection */}
          <label htmlFor="instructor" className="font-bold">
            Instructor
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            id="instructor"
            name="instructor"
            onChange={handleDropDownChange}
          >
            <option disabled selected>
              Select an instructor
            </option>
            {instructorList?.map((inst) => {
              return <option key={inst.id}>{inst.inst_name}</option>;
            })}
          </select>
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewCourse;
