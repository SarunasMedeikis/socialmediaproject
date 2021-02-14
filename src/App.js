import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import Register from "./components/register.component";
import Login from "./components/login.component";
import Home from "./components/home.component";
import AddPost from "./components/addpost.component";
import HeaderComponent from "./components/misc/header.misc";
import FooterComponent from "./components/misc/footer.misc";

function App() {
  return (
    <>
      <Router>
        <HeaderComponent />
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} />
        <Route path="/register/" component={Register} />
        <Route path="/addpost/" component={AddPost} />
      </Router>
      <FooterComponent />
    </>
  );
}

export default App;
