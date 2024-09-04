import PageTitle from "../components/PageTitle";
import InstructorRow from "../components/InstructorRow";
import useFetchInstructors from "../custom_hooks/useFetchInstructors";
import { Link } from "react-router-dom";
import Wrapper from "../layouts/Wrapper";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const Instructors = () => {
  const { instructorList, setInstructorList, isLoading, isError } =
    useFetchInstructors();

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <ErrorMessage />;

  return (
    <main>
      <PageTitle text="Instructors" />
      <Wrapper>
        <table className="table">
          <thead>
            <tr className="bg-primary-content">
              <th>Name</th>
              <th>Info</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {instructorList?.map((inst) => {
              return (
                <InstructorRow
                  key={inst.id}
                  instructorName={inst.inst_name}
                  instructorId={inst.id}
                  instructorList={instructorList}
                  setInstructorList={setInstructorList}
                />
              );
            })}
          </tbody>
        </table>
      </Wrapper>
      <div className="flex justify-center my-4">
        <Link to={"/new-instructor"}>
          <button className="btn btn-primary">Register Instructor</button>
        </Link>
      </div>
    </main>
  );
};

export default Instructors;
