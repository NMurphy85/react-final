import './App.css';
import MovieData from './pages/MovieData';
import Home from './pages/Home';
import Main from './pages/Main';
import Nav from './pages/Nav';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './pages/Footer';
import Landing from './pages/Landing';
function App() {
  const [query, setQuery] = useState( 'super');
  const [sortBy, setSortBy] = useState("")
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/home" element={ <Home query={query} sortBy={sortBy}  />}  />
          <Route path="/home" element={ <Main query={query} sortBy={sortBy}  />}  />
          <Route path='/home/:id'  element = {<Main query={query}  setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} />} />

          <Route path='/'element={<Landing query={query}  setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} />}  /> 
          <Route path='/:id'element={<MovieData />}  /> 
        <Route path={'/:id'} element={<Main />}  />
        <Route path={'/:id'} element={<Landing />}  />
      
        </Routes>
       <Footer />
      </Router>
        



    </div>
  );
}

export default App;
