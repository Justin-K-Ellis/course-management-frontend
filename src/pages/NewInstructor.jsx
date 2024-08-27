import { useNavigate } from "react-router-dom";
import { postInstructor } from "../crud_services/instructorsCrud";
import PageTitle from "../components/PageTitle";
import { useState } from "react";

const NewCourse = () => {
  const [newInstructor, setNewInstructor] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    postInstructor(newInstructor);
    console.log(`${newInstructor} submitted!`);
    navigate("/instructors");
  };

  return (
    <main>
      <PageTitle text="Register a New Instructor" />
      <div className="shadow-md rounded-md p-8">
        <form
          className="flex flex-col justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          {/* Course name */}
          <label htmlFor="course_name" className="font-bold">
            Instructor name
          </label>
          <input
            type="text"
            placeholder="New instructor"
            className="input input-bordered w-full max-w-xs"
            id="course_name"
            name="course_name"
            value={newInstructor}
            onChange={(event) => setNewInstructor(event.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewCourse;
