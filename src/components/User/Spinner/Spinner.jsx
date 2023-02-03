import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="spinner-container flex items-center justify-center bg-transparent backdrop-brightness-50  h-full w-full top-0 left-0  ">
      <div className="loading-spinner">
      </div>
    </div>
  );
}