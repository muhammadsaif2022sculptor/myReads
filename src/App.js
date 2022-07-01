import "./App.css";
import { useEffect, useState } from "react";
import Search from "./Search";
import Shelves from "./Shelves";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {getAll} from './BooksAPI'

function App() {

  const [books, setBooks] = useState([])
  
  const setData = async () => {
    const data = await getAll()
    console.log(data);
    setBooks(data)
  }

  useEffect(() => {
    setData();
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Shelves books={books}/>} />
          <Route exact path="/search" element={<Search books={books}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
