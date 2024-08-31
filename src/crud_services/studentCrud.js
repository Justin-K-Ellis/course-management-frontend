import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";

// Create
const postStudent = (newName) => {
  const url = "/students/post";
  axios
    .post(url, {
      name: newName,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Update
const putNewName = (newName, studentId) => {
  const url = "/students/new-name";
  axios
    .put(url, {
      newName,
      studentId,
    })
    .catch((error) => {
      console.log(error);
    });
};

const postNewCourse = (courseId, studentId) => {
  const url = "/students/register-course";
  axios
    .post(url, {
      courseId,
      studentId,
    })
    .catch((error) => {
      console.log(error);
    });
};

// Delete
const deleteStudent = (id) => {
  const url = `/students/delete/${id}`;
  axios
    .delete(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { postStudent, putNewName, postNewCourse, deleteStudent };
