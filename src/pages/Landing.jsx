import React from 'react'
import MovieData from './MovieData'
import Home from './Home'
import Main from './Main'
const Landing = (query,setQuery, sortBy, setSortBy) => {
   
    return (
        <div>
           <Main query={query}  setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy} />
           <Home query={query}  setQuery={setQuery} sortBy={sortBy} setSortBy={setSortBy}/>
           <MovieData />
    </div>
  )
}

export default Landing
