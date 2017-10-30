import React from "react";

function Book(props) {
  return (
    <div className="col-3 book">
      <img src={props.book.imageURL} />
      <div className="book-description">
        {props.book.name}
        <div className="author">{props.book.author}</div>
      </div>
    </div>
  );
}

export default function ReadingList(props) {
  return (
    <section className="reading-list row">
        {props.books.map((book, i) => <Book book={book} key={i} />)}
    </section>
  );
}
