import React from "react";
import { Link } from "react-router-dom";

function Start() {
  return (
    <Link to="/home">
      <button>Start</button>
    </Link>
  );
}

export default  Start;