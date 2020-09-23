import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For an Employee"
          id="search"
          
        />
        <br />
        
      </div>
      <button type="button" className="btn btn-light sort"  onClick={props.sortEmployees}>Sort/Organize</button>
     
    </form>
  );
}

export default SearchForm;
