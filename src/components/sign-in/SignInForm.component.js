import React from "react";
//components
import FormInput from "../form-input/FormInput.component";
import CustomButton from "../custom-button/CustomButton.component";
//form
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//styling
import "./signin.form.styles.css";
import Error from "../error/Error.component";

export default function SignInForm() {
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
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>SIGN IN</h2>
      <FormInput label="Email" type="text" register={register("email")} />
      <Error message={errors.email?.message} />
      <FormInput
        label="Password"
        type="password"
        register={register("password")}
      />
      <Error message={errors.password?.message} />
      <div className="buttons-container">
        <CustomButton>Sign In</CustomButton>
        <CustomButton google={true}>Continue With Google </CustomButton>
      </div>
    </form>
  );
}
