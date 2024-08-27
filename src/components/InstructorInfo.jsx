const InstructorInfo = ({ instructorName, instructorDetails }) => {
  console.log(instructorDetails);

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-xs btn-primary"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Info
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">{instructorName}</h3>
          {/* {instructorDetails.map((details) => {
            return <p key={details.id}>{details.course_name}</p>;
          })} */}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default InstructorInfo;
