import "./App.css";
import { useState } from "react";
import Search from "./Search";
import Shelves from "./Shelves";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Shelves />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
