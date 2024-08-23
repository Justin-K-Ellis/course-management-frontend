const CourseRow = () => {
  return (
    <tr className="hover">
      <th>1</th>
      <td>Economics 101</td>
      <td>Kent Klitgaard</td>
      <td>
        <button className="btn btn-warning btn-xs">Del</button>
      </td>
      <td>
        <button className="btn btn-accent btn-xs">Update</button>
      </td>
    </tr>
  );
};

export default CourseRow;
