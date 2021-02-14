import React from "react";
import axios from "axios";

const Register = () => {
  const onSubmit = (values) => {
    console.log(values);
    axios
      .post("http://localhost:5000/posts/add", values)
      .then((res) => console.log(res.data));
  };

  return <h1>Add post</h1>;
};

export default Register;
