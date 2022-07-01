import React, { useState } from 'react'
import "./App.css";
import {useNavigate} from 'react-router-dom'

function Search({books}) {
    
    const navigate = useNavigate()

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
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
    </div>
  )
}

export default Search