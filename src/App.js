import './App.css';
import Home from './pages/Home';
import Main from './pages/Main';
import Nav from './pages/Nav';
import React, { useState } from 'react';
function App() {
  const [query, setQuery] = useState([])
  const [sortBy, setSortBy] = useState("")
  return (
    <div className="App">
<Nav />
<Main  query={query}
 setQuery={setQuery} 
 sortBy={sortBy} 
 setSortBy={setSortBy} />
<Home 
query={query} 
sortBy={sortBy} />

    </div>
  );
}

export default App;
