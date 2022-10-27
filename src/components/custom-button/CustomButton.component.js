import React from "react";
import "./custom-button.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
const googleIcon = <FontAwesomeIcon icon={faGoogle} />;

export default function CustomButton({className, children, ...otherprops}) {
  return (
    <button className={`custom-button ${className}`} {...otherprops }>
      {className === "google" && <span className="brand-icon ">{googleIcon}</span>}{children}
    </button>
  );
}
