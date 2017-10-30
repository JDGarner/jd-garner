import React from "react";
import { Link } from "react-router-dom";

export default function SplashPage(props) {
  return (
    <section className="splash-page">
      <div className="category"><Link to="/movies">Movies</Link></div>
      <div className="category"><Link to="/reading-list">Books</Link></div>
      <div className="category"><Link to="/music">Music</Link></div>
    </section>
  );
}
