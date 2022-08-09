import React from "react";
import Meaning from "./Meaning.js";

export default function WordSearchResults(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2 className="word-header">{props.results.word}:</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <p key={index}>
              <Meaning meaning={meaning} />
            </p>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
