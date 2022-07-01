import React, { useEffect, useState } from 'react'
import "./App.css";
import {useNavigate} from 'react-router-dom'
import Book from './Book'

function Search({books}) {
    
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])

    function handleQuery(){
        if(query === '')  setResult([]) 
        else {
            const name = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
             const author = books.filter(book => !name.includes(book) && book.authors.map(auth => auth.toLowerCase().includes(query.toLowerCase())).includes(true))
            setResult([...name,...author])
        }
    }

    useEffect(() => {
        handleQuery()
    },[query])


  return (
    <div>
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
               onClick={() => navigate('/')}
            >
              Close
            </a>
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
                {result.map(book => (
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

export default Search