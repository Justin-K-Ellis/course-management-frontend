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

export { postStudent, deleteStudent };
