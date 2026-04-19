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
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={
            <>
            <Main query={query}  setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} key={MovieData.id}
            />
            <Home query={query} sortBy={sortBy} key={MovieData.id}
            />
            </>
          } />
          <Route path={`/:id`} element={<MovieData />}  />
          <Route path="/home" element={<Home query={query} setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} />} />
        </Routes>
      </Router>
        



    </div>
  );
}

export default App;
