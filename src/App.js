import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Books from './components/Books';
import Pagination from './components/Pagination';
import './App.css';

const App = () => {

  const [books, setBooks] = useState( [] );
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(10);

  useEffect ( () => {
    const fetchBooks = async () => {
      setLoading(true);
      const res = await axios.post('http://nyx.vima.ekt.gr:3000/api/books')
        .then (res => {
          console.log("response:", res);
          setBooks(res.data);
          setLoading(false);
        });
      
    };

    fetchBooks();

 }, [ ] );

const indexOfLastBook = currentPage * booksPerPage;
const indexOfFirstBook = indexOfLastBook - booksPerPage;
const currentBooks =  Array.isArray(books.books) && books.books.length > 0 ? books.books.slice(indexOfFirstBook, indexOfLastBook) : null; 


return ( 
    <div className='container mt-5'>
      <h1>Books List</h1>
      <Books books={currentBooks} loading={loading} />
      <Pagination 
            booksPerPage={booksPerPage}  
            totalBooks={ Array.isArray(books.books) && books.books.length > 0 ?books.books.length : 0} 
        />
      </div>
    );
};

export default App;