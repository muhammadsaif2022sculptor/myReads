import React from 'react'
import Book from './Book'

function Shelf({title, books}) {
  return (
    <div>
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map(book => (
                        <li key={book.id}>
                            <Book book={book}/>
                        </li>
                    ))}
                  </ol>
            </div>
        </div>
    </div>
  )
}

export default Shelf