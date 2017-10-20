import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <ul>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/reading-list">Reading List</Link>
        </li>
        <li>
          <Link to="/work">Work</Link>
        </li>
      </ul>
    </header>
  );
}
