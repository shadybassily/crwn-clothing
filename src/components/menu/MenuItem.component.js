import React from "react";
import "./menu.styles.css";
import { useNavigate } from "react-router-dom";

export default function MenuItem({ section }) {
  const navigate = useNavigate();
  return (
    <div
      className="menu-item "
      style={{ backgroundImage: `url(${section.imageUrl})` }}
      onClick={() => {
        navigate(`${section.linkUrl}`);
      }}
    >
      <div className="content">
        <h3 className="title">{section.title}</h3>
        <span>SHOP NOW</span>
      </div>
    </div>
  );
}
