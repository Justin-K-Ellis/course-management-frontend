import { useState, useEffect } from "react";

const useFetchInstrucotrs = () => {
  const [instructorList, setInstructorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getInstructors = async () => {
      try {
        const response = await fetch("http://localhost:3000/instructors");
        const data = await response.json();
        console.log(data);

        setInstructorList(data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getInstructors();
  }, []);

  return { instructorList, isLoading, isError };
};

export default useFetchInstrucotrs;
