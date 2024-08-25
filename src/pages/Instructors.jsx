import PageTitle from "../components/PageTitle";
import InstructorRow from "../components/InstructorRow";
import useFetchInstructors from "../custom_hooks/useFetchInstructors";

const Instructors = () => {
  const { instructorList, isLoading, isError } = useFetchInstructors();

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>An error occurred.</div>;

  return (
    <main>
      <PageTitle text="Instructors" />
      <div className="overflow-x-auto shadow-md rounded-md">
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
                <InstructorRow key={inst.id} instructorName={inst.inst_name} />
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Instructors;
