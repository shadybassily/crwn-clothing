import React, { useState } from "react";
//components
import FormInput from "../../form-input/FormInput.component";
import CustomButton from "../../custom-button/CustomButton.component";
import Error from "../../error/Error.component";
//form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//styling
import "../form.styles.css";
//firebase
import {
  auth,
  googleProvider,
  CreateUserProfile,
} from "../../../config/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function SignInForm() {
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
  const [emailNotFoundError, setEmailNotFoundError] = useState("");
  const navigate = useNavigate();
  // schema and form
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("This Field Is Required")
      .email("Invalid Email"),
    password: yup.string().required("This Field Is Required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //sign in with email and password
  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setEmailNotFoundError("");
      // if(!userCredentials.user.emailVerified){
      //   await signOut(auth)
      //   navigate("/verify")
      // } else {
      navigate("/");
    } catch (err) {
      setEmailNotFoundError(
        "The Email Address or Password your entered is incorrect"
      );
    }
  };

  //sign in with google
  const googleSignIn = async (e) => {
    e.preventDefault();
    const data = await signInWithPopup(auth, googleProvider);
    navigate("/");
    //adding the user to the db
    await CreateUserProfile(data.user);
  };

 
  //preparing the email to send the reset password link to
  const handleEmailChange = (value) => {
    setForgetPasswordEmail(value);
  };
  //FORGET PASSWORD
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, forgetPasswordEmail);
      navigate("/confirmation/forget-password", { state: forgetPasswordEmail });
      setEmailNotFoundError("");
    } catch (err) {
      setEmailNotFoundError("There is no account attached to this email");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>SIGN IN</h2>
      <FormInput
        label="Email"
        type="text"
        register={register("email")}
        handleEmailChange={handleEmailChange}
      />
      <Error message={errors.email?.message} />

      <FormInput
        label="Password"
        type="password"
        register={register("password")}
      />
      {errors.password?.message ? (
        <Error message={errors.password?.message} />
      ) : emailNotFoundError ? (
        <Error message={emailNotFoundError} />
      ) : (
        <Error />
      )}

      <Link className="forgot-password" onClick={handleResetPassword}>
        Forgot Your Password?
      </Link>

      <div className="buttons-container">
        <CustomButton>Sign In</CustomButton>
        <div className="or">or</div>
        <CustomButton className="google" onClick={googleSignIn}>
          Continue With Google
        </CustomButton>
      
      </div>
    </form>
  );
}
