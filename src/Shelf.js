import React from 'react'
import Book from './Book'

function Shelf({title, books, updateShelf, setView}) {
  return (
    <div>
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book book={book} updateShelf={updateShelf} setView={setView}/>
                        </li>
                    ))}
                  </ol>
            </div>
        </div>
    </div>
  )
}

export default Shelf