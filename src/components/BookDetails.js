import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book: { author, title, id } }) => {
  const { dispatch } = useContext(BookContext);

  return (
    <div className="book-details">
      <li>
        <div className="title">{author}</div>
        <div className="author">{title}</div>
      </li>
      <button onClick={() => dispatch({ type: 'REMOVE_BOOK', book: { id }})}>Remove</button>
    </div>
  );
};

export default BookDetails;
