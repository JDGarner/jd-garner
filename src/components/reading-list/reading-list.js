import React from "react";

function Book(props) {
  return (
    <div className="book">
      <img src={props.book.imageURL} />
    </div>
  );
}

export default function ReadingList(props) {
  return (
    <section className="reading-list">
      {props.books.map((book, i) => <Book book={book} key={i} />)}
    </section>
  );
}
