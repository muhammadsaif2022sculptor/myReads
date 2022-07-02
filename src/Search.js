import React, { useEffect, useState } from 'react'
import "./App.css";
import {Link} from 'react-router-dom'
import Book from './Book'
import { search } from './BooksAPI';

function Search({books, updateShelf, setView}) {
    
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])


    useEffect(() => {
      const handleQuery = () => {
        if(query.length>0){
        search(query.trim()).then(data => {
            if(data.error) {
              setResult([])
              console.log(data.error)}
            else {
                data.forEach(d => {
                    let found = false
                    books.forEach(b => {
                        if(d.id === b.id){
                            d.shelf = b.shelf
                            found = true
                        }
                    })
                    if(!found) d.shelf = 'none'
                })
                setResult(data)
            }
        }).catch(e => console.log('here',e))
        }
    }
      query === '' ? setResult([]) : handleQuery()
    },[query,books])


  return (
    <div>

        {result && <div className="search-books">
          <div className="search-books-bar">
            <Link to='/'
              className="close-search"
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title, author, or ISBN"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
                {query && result.map(book => (
                    <li key={book.id}>
                        <Book book={book} updateShelf={updateShelf} setView={setView}/>
                    </li>
                ))}
            </ol>
          </div>
        </div>}
    </div>
  )
}

export default Search