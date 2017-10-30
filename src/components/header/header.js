import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return (
    <header className="header">
      <div className="home">
        <Link to="/">Refined Stuff</Link>
      </div>
    </header>
  );
}
