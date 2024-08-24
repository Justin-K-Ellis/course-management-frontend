import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const post = (newCourse, instructor) => {
  console.log("Axios function:", newCourse, instructor);

  const url = "/postcourse";
  axios
    .post(url, {
      course_name: newCourse,
      instructorName: instructor,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { post };
