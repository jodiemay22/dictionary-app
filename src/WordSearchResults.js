import React from "react";
import Meaning from "./Meaning.js";
import Phonetics from "./Phonetics.js";

export default function WordSearchResults(props) {
  if (props.results) {
    return (
      <div className="results">
        <h2 className="word-header">{props.results.word}:</h2>
        <Phonetics phonetics={props.results.phonetics} />
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
