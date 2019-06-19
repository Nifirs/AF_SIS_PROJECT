import axios from "axios";

export const insregister = newUser => {
  return axios
    .post("instructors/insregister", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password
    })
    .then(res => {
      window.alert("Instructor is Registered!");
    });
};

export const inslogin = user => {
  return axios
    .post("instructors/inslogin", {
      email: user.email,
      password: user.password
    })
    .then(res => {
      localStorage.setItem("instructortoken", res.data);
      return res.data;
    })
    .catch(err => {
      console.log(err);
    });
};
