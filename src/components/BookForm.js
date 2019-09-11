import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";

const BookForm = () => {
  const [book, setBook] = useState({ title: "", author: "" });
  const [loading, setLoading] = useState(true);
  const { dispatch } = useContext(BookContext);
  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    const { title, author } = book;
    e.preventDefault();
    dispatch({
        type: 'ADD_BOOK',
        book: { title, author }
      });
    setBook({ title: "", author: "" });
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(response => console.log(response))
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false)
      });
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      {loading ? <h1>LOADING DATA...</h1> : ""}
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter a title"
        value={book.title}
        name="title"
        required
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter an author"
        value={book.author}
        name="author"
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default BookForm;
