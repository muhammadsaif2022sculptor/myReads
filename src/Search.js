import React, { useEffect, useState } from 'react'
import "./App.css";
import {Link, useNavigate} from 'react-router-dom'
import Book from './Book'
import { search } from './BooksAPI';

function Search({books, updateShelf, setView}) {
    
    const navigate = useNavigate()
    const [query, setQuery] = useState('')
    const [result, setResult] = useState([])

    async function handleQuery(){
        // if(query === '')  setResult([]) 
        // else {
        //     const name = books.filter(book => book.title.toLowerCase().includes(query.toLowerCase()))
        //      const author = books.filter(book => !name.includes(book) && book.authors.map(auth => auth.toLowerCase().includes(query.toLowerCase())).includes(true))
        //     setResult([...name,...author])
        // }
        if(query.length>0){
        search(query.trim()).then(data => {
            if(data.error) console.log(data.error)
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
                console.log(query,data)
                setResult(data)
            }
        }).catch(e => console.log('here',e))
        }
        // console.log(query,res)
    }

    useEffect(() => {
        handleQuery()
    },[query])


  return (
    <div>
        {result && <div className="search-books">
          <div className="search-books-bar">
            <Link to='/'
              className="close-search"
            //    onClick={() => navigate('/')}
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
                {result.map(book => (
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