import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="home">
        <Link to="/">JD Garner</Link>
      </div>
      <ul className="navbar">
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
