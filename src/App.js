import './App.css';
import MovieData from './pages/MovieData';
import Home from './pages/Home';
import Main from './pages/Main';
import Nav from './pages/Nav';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [query, setQuery] = useState( 'super');
  const [sortBy, setSortBy] = useState("")
  return (
    <div className="App">
        <Nav />
      <Router>
        <Routes>
          <Route path="/"  exact element={<Main query={query}  setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} />} />
          <Route path="/home" element={<Home query={query} sortBy={sortBy} />} />
          <Route path={`/:id`} element={<MovieData />} />
        
        </Routes>
      </Router>



    </div>
  );
}

export default App;
