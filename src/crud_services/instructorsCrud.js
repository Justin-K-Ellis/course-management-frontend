import axios from "axios";
axios.defaults.baseURL = "https://course-management-1p45.onrender.com";

const postInstructor = (newInstructor) => {
  const url = "/instructors/post";
  axios
    .post(url, {
      newInstructor: newInstructor,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const putInstructor = (instructorId, newName) => {
  const url = "/instructors/update";
  axios
    .put(url, {
      instructorId,
      newName,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const deleteInstructor = (instructorId) => {
  const url = `instructors/delete/${instructorId}`;
  axios
    .delete(url)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export { postInstructor, putInstructor, deleteInstructor };
