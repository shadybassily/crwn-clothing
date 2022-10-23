import React from "react";
import "../form.styles.css";
import { Link, useNavigate } from "react-router-dom";
//components
import Error from "../../error/Error.component";
import FormInput from "../../form-input/FormInput.component";
import CustomButton from "../../custom-button/CustomButton.component";
//form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Register() {
  const schema = yup.object().shape({
    fname: yup.string().required("This Field Is Required").min(3, "Minimum 3 Characters").max(20,"Maximum 20 Characters"),
    lname: yup.string().required("This Field Is Required").min(3, "Minimum 3 Characters").max(20, "Maximum 20 Characters"),
    email: yup.string().required("This Field Is Required").email("Invalid Email"),
    password: yup.string().required("This Field Is Required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    confirmPassword:yup.string().oneOf([yup.ref('password'), null], "Passwords Don't Match")
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

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2>REGISTER</h2>
      <FormInput label="First Name" type="text" register={register("fname")} />
      <Error message={errors.fname?.message} />
      <FormInput label="Last Name" type="text" register={register("lname")} />
      <Error message={errors.lname?.message} />
      <FormInput label="Email" type="text" register={register("email")} />
      <Error message={errors.email?.message} />
      <FormInput label="Password" type="password" register={register("password")}/>
      <Error message={errors.password?.message} />
      <FormInput label="Confirm Password" type="password" register={register("confirmPassword")}/>
      <Error message={errors.confirmPassword?.message} />
      <div className="buttons-container">
        <CustomButton>Register</CustomButton>
      </div>
    </form>
  );
}
