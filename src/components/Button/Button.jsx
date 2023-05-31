import React from "react";
import { Link } from "react-router-dom";
import { stylesLink } from "./styles";

const Button = ({ url, children }) => {
  return (
    <Link to={url} style={stylesLink}>
      {children}
    </Link>
  );
};

export default Button;
