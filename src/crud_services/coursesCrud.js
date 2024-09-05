import axios from "axios";
axios.defaults.baseURL = "https://course-management-1p45.onrender.com";

const postCourse = (newCourse, instructor) => {
  const url = "/courses/post";
  axios
    .post(url, {
      course_name: newCourse,
      instructorName: instructor,
    })
    .catch((error) => {
      console.log(error);
    });
};

const putCourse = (courseId, newCourse, newInstructor) => {
  const url = `/courses/update/${courseId}`;
  axios
    .put(url, {
      newCourseName: newCourse,
      newInstructorName: newInstructor,
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteCourse = (courseId) => {
  const url = `/courses/delete/${courseId}`;
  axios.delete(url).catch((error) => {
    console.log(error);
  });
};

export { postCourse, putCourse, deleteCourse };
