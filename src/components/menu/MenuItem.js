import React from "react";
import "./menu.css";
export default function MenuItem({ section }) {
  return (
    <div
      className="menu-item "
      style={{ backgroundImage: `url(${section.imageUrl})` }}
    >
      <div className="content">
        <h3 className="title">{section.title}</h3>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
}
