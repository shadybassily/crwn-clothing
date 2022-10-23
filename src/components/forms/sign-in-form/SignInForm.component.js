import React from "react";
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
import { signInWithPopup } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

export default function SignInForm() {
  const [user] = useAuthState(auth)
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
  //sign in 
  const onSubmit = (data) => {
    console.log(data);
  };

  //sign in with google
  const googleSignIn= async (e)=>{
    e.preventDefault()
    const data = await signInWithPopup(auth, provider)
    //adding the user to the db
    await CreateUserProfile(data.user)
    navigate('/')
  }
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>SIGN IN</h2>
      <FormInput label="Email" type="text" register={register("email")} />
      <Error message={errors.email?.message} />

      <FormInput label="Password" type="password" register={register("password")}/>
      <Error message={errors.password?.message} />

      <Link className="forgot-password">Forgot Your Password?</Link>
      
      <div className="buttons-container">
        <CustomButton>Sign In</CustomButton>
        <CustomButton google={true} googleSignIn={googleSignIn}>Continue With Google </CustomButton>
      </div>
    </form>
  );
}
