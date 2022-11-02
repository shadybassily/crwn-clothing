import React from "react";

export default function Loader() {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
