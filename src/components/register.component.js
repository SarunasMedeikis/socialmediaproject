import React from "react";
import axios from "axios";

const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:5000/users/add", values)
      .then((res) => console.log(res.data));
  };

  return <h1>Register Form Below</h1>;
};

export default Register;
