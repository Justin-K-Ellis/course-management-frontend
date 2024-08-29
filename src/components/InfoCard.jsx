import { Link } from "react-router-dom";

const InfoCard = ({
  name,
  updateLink,
  deleteFunction,
  deleteTarget,
  deleteWarning,
  backTarget,
  children,
}) => {
  const handleDelete = (instructorId) => {
    const reply = confirm(deleteWarning);
    if (reply) {
      deleteFunction(instructorId);
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-xl mt-4 pb-4 pr-4 mx-auto">
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        {children}
      </div>
      <div className="card-actions justify-center">
        <Link to={updateLink}>
          <button className="btn btn-primary update-btn">Update</button>
        </Link>
        <button
          className="btn btn-warning delete-btn"
          onClick={() => handleDelete(deleteTarget)}
        >
          Delete
        </button>
        <Link to={backTarget}>
          <button className="btn btn-accent">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default InfoCard;
