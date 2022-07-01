import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

function Shelves({books, updateShelf, setView}) {


    return(
    <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>  
              <Shelf title={'Currently Reading'} books={books.filter(book => book.shelf === 'currentlyReading')}  updateShelf={updateShelf} setView={setView}/>
              <Shelf title={'Want to Read'} books={books.filter(book => book.shelf === 'wantToRead')} updateShelf={updateShelf} setView={setView}/>
              <Shelf title={'Read'} books={books.filter(book => book.shelf === 'read')} updateShelf={updateShelf} setView={setView}/>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
    </div>
    )
}

export default Shelves