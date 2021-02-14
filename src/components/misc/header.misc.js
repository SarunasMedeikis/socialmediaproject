import React from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";

function HeaderComponent() {
  const [selected, setSelected] = React.useState(window.location.pathname);

  return <h1>HEADER HERE</h1>;
}

export default HeaderComponent;
