import React, { useState } from "react";
import axios from "axios";
import WordSearchResults from "./WordSearchResults.js";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiURL = `http://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  return (
    <div>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search a word"
          autoFocus={true}
          onChange={handleKeywordChange}
        ></input>
      </form>
      <WordSearchResults results={results} />
    </div>
  );
}
