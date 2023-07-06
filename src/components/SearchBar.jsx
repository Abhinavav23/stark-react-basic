import React, {Fragment} from "react";

function SearchBar() {
  return (
    // <React.Fragment>
    // <Fragment key={}>
      <>
        <label>SearchBar: </label>
        <input type="text" placeholder="search here" id="searchBar" />
        <button className="search-button">search</button>
      </>
    // </Fragment>
    // </React.Fragment>
  );
}

export default SearchBar;

// Why -->
/* because of react doesnt allow multiple elements to be returned from a component 
we end up rendering extra html elements in the dom for wrapping multiple elements 
this going to hit the performance and size in longer ruhence we use Fragments
*/

// Fragments
/*
used to wrap the elements without adding a extra div in the DOM
*/
