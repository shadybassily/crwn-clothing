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
import {auth, provider, CreateUserProfile} from '../../../config/firebase'
import { signInWithPopup, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
//context
import { useContext } from "react";
import { appContext } from "../../../App";

export default function SignInForm() {
  const {currentUser} = useContext(appContext)
  //to send
  const [emailNotFoundError, setEmailNotFoundError] = useState("")
  const navigate = useNavigate()
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
   try{ 
    const {email, password} = data
    const userCredentials = await signInWithEmailAndPassword(auth, email, password)
    setEmailNotFoundError("")
    // if(!userCredentials.user.emailVerified){
    //   await signOut(auth)
    //   navigate("/verify")
    // } else {
      navigate("/")
   } catch(err){
    setEmailNotFoundError("The Email Address or Password your entered is incorrect")
   }
  };

  //sign in with google
  const googleSignIn= async (e)=>{
    e.preventDefault()
    const data = await signInWithPopup(auth, provider)
    navigate('/')
    //adding the user to the db
    await CreateUserProfile(data.user)
  }


  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>SIGN IN</h2>
      <FormInput label="Email" type="text" register={register("email")} />
      <Error message={errors.email?.message} />   

      <FormInput label="Password" type="password" register={register("password")}/>
      {errors.password?.message ? <Error message={errors.password?.message} /> : emailNotFoundError ? <Error message={emailNotFoundError} /> : <Error />  }  

      <Link className="forgot-password" >Forgot Your Password?</Link>
      
      <div className="buttons-container">
        <CustomButton>Sign In</CustomButton>
        <CustomButton google={true} googleSignIn={googleSignIn}>Continue With Google </CustomButton>
      </div>
    </form>
  );
}
