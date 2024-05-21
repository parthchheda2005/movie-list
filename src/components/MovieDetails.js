import React from "react";
import { useState, useEffect } from "react";

export default function MovieDetails() {
  return (
    <div>
      <GoBackButton />
    </div>
  );
}

const GoBackButton = () => {
  return (
    <button className="go-back-button" title="Go Back">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50px"
        height="50px"
        viewBox="0 0 24 24"
        className="icon"
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M11 6L5 12M5 12L11 18M5 12H19"
        ></path>
      </svg>
    </button>
  );
};
