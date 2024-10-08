import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import useFetchInstructors from "../custom_hooks/useFetchInstructors";
import { putCourse } from "../crud_services/coursesCrud";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const UpdateCourse = () => {
  const { id, course } = useParams();
  const [newCourse, setNewCourse] = useState(course);
  const [newInstructor, setNewInstructor] = useState("");
  const { instructorList, isLoading, isError } = useFetchInstructors();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    putCourse(id, newCourse, newInstructor);
    navigate("../courses");
  };

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;

  return (
    <main>
      <PageTitle text={`Update ${course}`} />
      <div className="shadow-md rounded-md p-8">
        <form id="form" className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newCourseName" className="font-bold">
              Rename course
            </label>
            <input
              type="text"
              id="newCourseName"
              name="newCourseName"
              value={newCourse}
              placeholder={course}
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => setNewCourse(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="instructorChoice" className="font-bold">
              Instructor
            </label>
            <select
              name="instructorChoice"
              id="instructorChoice"
              className="select select-bordered w-full max-w-xs"
              onChange={(event) => setNewInstructor(event.target.value)}
              required
            >
              <option disabled selected>
                Select an instructor
              </option>
              {instructorList.map((inst) => {
                return <option key={inst.id}>{inst.inst_name}</option>;
              })}
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            id="new-course-name-btn"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default UpdateCourse;
