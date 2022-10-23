import React, { useState } from "react";
import Register from "../../components/forms/registration-form/RegistrationForm.component";
import SignInForm from "../../components/forms/sign-in-form/SignInForm.component";
import "./sigin-page.styles.css";
export default function SignIn() {
  //which form the user selects
  //to toggle between them
  const[selectedForm, setSelectedForm] = useState('register')
  const handleChangeForm = (e) =>{
    setSelectedForm(e.target.innerHTML)
  }
  return (
    <div className="parent-container">
      <div className="signin-register">
        <p onClick={handleChangeForm} className={`${selectedForm  === 'sign in' ? 'selected' : ""}` }>sign in</p>
        <p onClick={handleChangeForm} className={`${selectedForm  === 'register' ? 'selected' : ""}` } >register</p>
      </div>
      {/* if sign in */}
      {selectedForm === 'sign in' && <SignInForm />}
      {/* if register */}
      {selectedForm === 'register' && <Register />}
    </div>
  );
}
