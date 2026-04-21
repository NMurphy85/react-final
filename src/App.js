import './App.css';
import MovieData from './pages/MovieData';
import Landing from './pages/Landing';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [query, setQuery] = useState( 'super');
  const [sortBy, setSortBy] = useState("")
 const [ searchTerm, setSearchTerm] = useState('') 
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/'element={
            <>
            <Landing />
            <Home query="super" limit={4} />
            
            </>
            
            }  /> 
          
          <Route path="/home" element={ 
            <>
<Main query={query} setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy}  searchTerm={searchTerm}  setSearchTerm={setSearchTerm}/>
<Home query={query} setQuery={setQuery}  sortBy={sortBy} setSortBy={setSortBy} searchTerm={searchTerm}  setSearchTerm={setSearchTerm}/>
            </>
          } />

          <Route path='/:id'element={<MovieData />}  /> 
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        
      
        </Routes>
        <Footer />
      </Router>
        



    </div>
  );
}

export default App;
