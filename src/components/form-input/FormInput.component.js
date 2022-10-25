import React, { useState } from "react";
//styling
import "./formInput.styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
const eye =  <FontAwesomeIcon icon={faEyeSlash} />

export default function FormInput({ label, type, register,handleEmailChange }) {
  const [inputType, setInputType] = useState(type);
  const showPassword = () => {
    setInputType("text");
  };
  const hidePassword = () => {
    setInputType("password");
  };
  return (
    <div className="input-holder">
      <input type={inputType} placeholder=" " {...register} onInput={(e)=>{inputType === 'text' && handleEmailChange(e.target.value)}}/>
      <label className="label">{label}</label>
      {type === "password" && ( 
        <span
          className="show-password"
          onMouseEnter={showPassword}
          onMouseLeave={hidePassword}>
          {eye}
        </span>
      )}
    </div>
  );
}
