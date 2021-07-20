import React from "react";
import "./Body.css";

function Body(props) {
  let play = props.playing;
  return (
    <div className="body" style={{ visibility: play }}>
      <div className="muzieknootjes">
        <div className="noot-1">&#9835; &#9833;</div>
        <div className="noot-2">&#9833;</div>
        <div className="noot-3">&#9839; &#9834;</div>
        <div className="noot-4">&#9834;</div>
      </div>
    </div>
  );
}

export default Body;
