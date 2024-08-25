import { useParams } from "react-router-dom";

const UpdateInstructor = () => {
  const { id } = useParams();
  const message = `Updated instructor ${id}.`;
  return <div>{message}</div>;
};

export default UpdateInstructor;
