import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container flex items-center justify-center  z-0  h-full w-full top-0 left-0  ">
      <div class="spin"></div>
    </div>
  );
}