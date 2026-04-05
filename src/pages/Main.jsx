import React, { useState } from "react"

const Main = () => {
  const [searchTerm, setSearchTerm] = useState([])
const [query, setQuery] = useState([])
const [sortBy, setSortBy] = useState("")  
  return (
    <div>
      
        <div className="container">
          
     <form 
     className="search-form" 
     id="searchForm">
      <input 
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-form__input" 
      type="text" 
      id="searchInput" 
      placeholder="Search movies..." required=""/>
      <button className="search-form__button" 
      type="submit">Search</button>
    </form>
            <div>
          
            
            </div>
        </div>
        <div className="filter__wrap">
      <select id="filter"
      onChange={(e) => setSortBy(e.target.value)}
       className="filter filter--bold"
       value={sortBy}
       >
        <option  value="">Sort</option>
        <option className="filter--bold" defaultValue="LOW_TO_HIGH">Search, Low to High</option>
        <option className="filter--bold" defaultValue="HIGH_TO_LOW">Search, High to Low</option>
        <option className="filter--bold" defaultValue="YEAR--LOW">Year, Low to High</option>
        <option className="filter--bold" defaultValue="YEAR--HIGH">Year, High to Low</option>
      </select>
      </div>
   
    </div>
  )
}

export default Main
