import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { fetchIpData } from "../redux/dataReducer";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const searchHandler = () => {
    const search_query = inputRef.current.value;
    dispatch(fetchIpData(search_query));
    inputRef.current.value = "";
  };
  return (
    <section className="search-section flex-col">
      <h1>IP address Tracker</h1>
      <div className="input-field">
        <input ref={inputRef} type="text" placeholder="Search for any IP address or domain" />
        <button onClick={searchHandler}>
          <BsSearch />
        </button>
      </div>
    </section>
  );
};

export default Search;
