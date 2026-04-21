import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = ({
  query,
  setQuery,
  sortBy,
  setSortBy,
  searchTerm,
  setSearchTerm,
}) => {
  function testButton() {
    console.log();
  }
  return (
    <div>
      <div className="container">
         <Link to="/">
        <figure className="bold">
          <FontAwesomeIcon icon="arrow-left" className="padding-left" /> Movies
        </figure>
      </Link>
    
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log('submit', searchTerm )
            setQuery(searchTerm);
          }}
          className="search-form"
          id="searchForm"
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-form__input"
            type="text"
            id="searchInput"
            placeholder="Search movies..."
            required=""
          />

          <button className="search-form__button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="filter__wrap">
        <select
          id="filter"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="filter filter--bold"
        >
          <option value="">Sort</option>
          <option className="filter--bold" value="LOW_TO_HIGH">
            Search, Low to High
          </option>
          <option className="filter--bold" value="HIGH_TO_LOW">
            Search, High to Low
          </option>
          <option className="filter--bold" value="YEAR--LOW">
            Year, Low to High
          </option>
          <option className="filter--bold" value="YEAR--HIGH">
            Year, High to Low
          </option>
        </select>
      </div>
    </div>
  );
};

export default Main;
