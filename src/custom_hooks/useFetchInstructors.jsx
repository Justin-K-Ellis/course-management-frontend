import { useState, useEffect } from "react";

const useFetchInstructors = () => {
  const [instructorList, setInstructorList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getInstructors = async () => {
      try {
        const response = await fetch("http://localhost:3000/instructors");
        const data = await response.json();
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

  return { instructorList, setInstructorList, isLoading, isError };
};

export default useFetchInstructors;
