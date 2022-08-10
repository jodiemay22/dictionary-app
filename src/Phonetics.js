import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="phonetics">
      <em>{props.phonetics[0].text}</em>
      <a href={props.phonetics[0].audio}>
        <i class="fa-solid fa-circle-play"></i>
      </a>
    </div>
  );
}
