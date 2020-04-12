import React from 'react';

const Books = ( { books, loading } ) => {

    if (loading) {
        return ( <h2 >Loading..</h2>);
    }

    return (
        <div>
             <ul className='list-group mb-4'>
                {Array.isArray(books) && books.length > 0 && books.map(book => (
                    <div>
                        <li key={book.id} className="list-group-item active">Book Title: {book.book_title}</li>
                        <li key={book.id} className="list-group-item">Book Author: {book.book_author}</li>
                        <li key={book.id} className="list-group-item">Book Publication City: {book.book_publication_country}</li>
                        <li key={book.id} className="list-group-item">Book Publication Year: {book.book_publication_year}</li>
                        <li key={book.id} className="list-group-item">Book Pages: {book.book_pages}</li>
                        <li key={book.id} className="list-group-item">Book Id: {book.id}</li>
                        <br/>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Books;