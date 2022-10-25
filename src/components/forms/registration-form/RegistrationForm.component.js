import React, { useState } from "react";
import "../form.styles.css";
import {  useNavigate } from "react-router-dom";
//components
import Error from "../../error/Error.component";
import FormInput from "../../form-input/FormInput.component";
import CustomButton from "../../custom-button/CustomButton.component";
//form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//firebase
import {
  auth,
  CreateUserProfile,
} from "../../../config/firebase";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";

export default function Register() {
  const [emailInUseError, setEmailInUseError] = useState("");
  const navigate = useNavigate();
  const schema = yup.object().shape({
    fname: yup
      .string()
      .required("This Field Is Required")
      .min(3, "Minimum 3 Characters")
      .max(20, "Maximum 20 Characters"),
    lname: yup
      .string()
      .required("This Field Is Required")
      .min(3, "Minimum 3 Characters")
      .max(20, "Maximum 20 Characters"),
    email: yup
      .string()
      .required("This Field Is Required")
      .email("Invalid Email"),
    password: yup
      .string()
      .required("This Field Is Required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //sign up
 const onSubmit = async (data) => {
    try{
      const { email, password, fname, lname} = data;
      //authenticating the user
      const result = await createUserWithEmailAndPassword(auth, email, password)
      //preparing the data that 
      //will be added to the data base
      const displayName = `${fname} ${lname}`
      const userData = {
        displayName,
        email,
        uid: result.user.uid
      }
      //send the verification code and log the user out
      await sendEmailVerification(auth.currentUser)
      navigate("/confirmation/verify-email")
      //add the user to the database
      await CreateUserProfile(userData)
      setEmailInUseError("")
    } catch(err) {
      console.log(err)
      setEmailInUseError("Email Already In Use")
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>REGISTER</h2>
      <FormInput label="First Name" type="text" register={register("fname")} />
      <Error message={errors.fname?.message} />

      <FormInput label="Last Name" type="text" register={register("lname")} />
      <Error message={errors.lname?.message} />

      <FormInput label="Email" type="text" register={register("email")} />
      {errors.email?.message ? (
        <Error message={errors.email?.message} />
      ) : emailInUseError ? (
        <Error message={emailInUseError} />
      ) : (
        <Error />
      )}

      <FormInput
        label="Password"
        type="password"
        register={register("password")}
      />
      <Error message={errors.password?.message} />
      <FormInput
        label="Confirm Password"
        type="password"
        register={register("confirmPassword")}
      />
      <Error message={errors.confirmPassword?.message} />
      <div className="buttons-container">
        <CustomButton className="register-button">Register</CustomButton>
      </div>
    </form>
  );
}
