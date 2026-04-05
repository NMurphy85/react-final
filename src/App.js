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
 setSortBy={setSortBy} key={query.id} />
<Home 
query={query} 
sortBy={sortBy} key={query.id} />

    </div>
  );
}

export default App;
