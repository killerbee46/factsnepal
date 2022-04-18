import React from "react";
import { Link } from "react-router-dom";

const LinkItem = ({ path, text, id, className }) => (
  <Link to={path} className="text text--normal" id={id}>
    <span className="text text--normal">{text}</span>
  </Link>
);

export default LinkItem;
