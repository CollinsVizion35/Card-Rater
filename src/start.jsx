import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <Link to="/page1">
      <button>Start</button>
    </Link>
  );
}

export default  Start;