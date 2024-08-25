import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

const postCourse = (newCourse, instructor) => {
  // console.log("Axios function:", newCourse, instructor);

  const url = "/courses/post";
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

const deleteCourse = (courseId) => {
  const url = `/courses/delete/${courseId}`;
  axios
    .delete(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { postCourse, deleteCourse };
