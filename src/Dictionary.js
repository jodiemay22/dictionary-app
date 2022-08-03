import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
    let apiURL = `http://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data);
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
    </div>
  );
}
