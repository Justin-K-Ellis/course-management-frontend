import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Wrapper from "../layouts/Wrapper";
import { postStudent } from "../crud_services/studentCrud";
import { useNavigate } from "react-router-dom";

const NewStudent = () => {
  const [newStudent, setNewStudent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    postStudent(newStudent);
    navigate("../students");
  };

  return (
    <main>
      <PageTitle text="Register a new student" />
      <Wrapper>
        <div className="shadow-md rounded-md p-8">
          <form
            className="flex flex-col justify-center items-center gap-2"
            onSubmit={handleSubmit}
          >
            <label htmlFor="new-student-name" className="font-bold">
              Name
            </label>
            <input
              type="text"
              id="new-student-name"
              name="new-student-name"
              placeholder="New Student"
              value={newStudent}
              className="input input-bordered w-full max-w-xs"
              required
              onChange={(event) => {
                setNewStudent(event.target.value);
              }}
            />
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </Wrapper>
    </main>
  );
};

export default NewStudent;
