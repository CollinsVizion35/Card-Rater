import React from "react";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <Link to="/page1">
      <button>Start</button>
    </Link>
  );
}
