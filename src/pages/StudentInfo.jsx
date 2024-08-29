import PageTitle from "../components/PageTitle";
import Wrapper from "../layouts/Wrapper";
import { useParams } from "react-router-dom";

const StudentInfo = () => {
  const { studentId } = useParams();
  console.log(studentId);

  return (
    <main>
      <PageTitle text="Student Info" />
      <Wrapper>
        <p>Dummy info about student {studentId}.</p>
      </Wrapper>
    </main>
  );
};

export default StudentInfo;
