import React from 'react';

    const Books = ({ books }) => {
      return (
        <div className="container">
          <center><h1>Books List</h1></center>
          {books.map((book, index) => (
              <ul className="list-group">
              <li className="list-group-item active" key={index}>Book Title: {book.book_title}</li>
                 <li className="list-group-item " key={index}>Book Author: {book.book_author}</li>
                 <li className="list-group-item" key={index}>Book Publication City: {book.book_publication_country}</li>
                 <li className="list-group-item" key={index}>Book Publication Year: {book.book_publication_year}</li>
                 <li className="list-group-item" key={index}>Book Pages: {book.book_pages}</li>
                 
                 <li className="list-group-item" key={index}>Book Id: {book.id}</li>
                 <br/>
              </ul>

          ))}
        </div>
      )
};

export default Books