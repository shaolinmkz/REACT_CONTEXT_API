import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


const NavBar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1 style={{ color: 'grey' }}>Reading List</h1>
      <h3>LEARNING CONTEXT API</h3>
      <p>Currently you have {books.length} books left to read... </p>
    </div>
  )
}

export default NavBar;
