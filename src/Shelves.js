import React from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

function Shelves({books, updateShelf, setView}) {

  const shelvesDetail = [{id: 'shelf1', title: 'Currently Reading', filter: 'currentlyReading'},
                        {id: 'shelf2', title: 'Want to Read', filter: 'wantToRead'},
                        {id: 'shelf3', title: 'Read', filter: 'read'}
                      ]

    return(
    <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>  
              {shelvesDetail.map(s => (
                <div key={s.id}>
                  <Shelf title={s.title} books={books.filter(book => book.shelf === s.filter)} updateShelf={updateShelf} setView={setView}/>
                </div>
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link to='/search'>Add a book</Link>
          </div>
        </div>
    </div>
    )
}
Shelves.prototype = {
  books : PropTypes.array.isRequired,
  updateShelf: PropTypes.func.isRequired,
  setView: PropTypes.func.isRequired
}

export default Shelves