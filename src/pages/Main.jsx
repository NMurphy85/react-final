import React from 'react'

const Main = () => {
  return (
    <div>
      
        <div className="container">
          
     <form 
     className="search-form" 
     id="searchForm">
      <input 
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
      <select id="filter" onChange className="filter filter--bold">
        <option className="filter--bold" defaultValue="" disabled selected>Sort</option>
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
