"use client";
import { userActions } from "@/app/context/slices/loginSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login } from "@/lib/fetch/auth-control";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

interface LoginFormInputs {
  email: string;
  password: string;
}

const Form = () => {
  const router = useRouter();
  const dispatch = useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    console.log(data);
    const loginResponse = await login(data)
    if(loginResponse){
      dispatch(userActions.setUser(loginResponse));
      router.push("/blog")
    }
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 max-w-lg"
        >
          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          <Button type="submit" className="bg-[#264FAD]">Login</Button>
        </form>

        <div className="flex gap-3 mt-4 items-center">
          <span>Don’t have an account?</span>
          <Button onClick={handleSignup}>SignUp</Button>
        </div>
      </div>
    </>
  );
};

export default Form;
