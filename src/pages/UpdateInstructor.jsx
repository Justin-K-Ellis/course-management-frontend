import { useParams } from "react-router-dom";
import { putInstructor } from "../crud_services/instructorsCrud";
import PageTitle from "../components/PageTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateInstructor = () => {
  const { id } = useParams();
  const [newName, setNewName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    putInstructor(id, newName);
    navigate("../instructors");
  };

  return (
    <main>
      <PageTitle text={"Update Instructor"} />
      <div className="shadow-md rounded-md p-8">
        <form id="form" className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newCourseName" className="font-bold">
              Rename instructor
            </label>
            <input
              type="text"
              id="newCourseName"
              name="newCourseName"
              value={newName}
              placeholder={"New name"}
              className="input input-bordered w-full max-w-xs"
              onChange={(event) => setNewName(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default UpdateInstructor;
