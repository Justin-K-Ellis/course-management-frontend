import SmallButton from "./SmallButton";

const InstructorRow = ({ instructorName }) => {
  return (
    <tr className="hover">
      <td>{instructorName}</td>
      <td>
        <SmallButton style="primary" text="Info" />
      </td>
      <td>
        <SmallButton style="warning" text="Del" />
      </td>
      <td>
        <SmallButton style="accent" text="Update" />
      </td>
    </tr>
  );
};

export default InstructorRow;
