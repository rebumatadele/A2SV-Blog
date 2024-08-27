"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { register as registerUser } from "@/lib/fetch/auth-control";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "@/app/context/slices/userSignupSlice";
import { RootState } from "@/app/context/store";
import { useRouter } from "next/navigation";

const Page = () => {
  const dispatch = useDispatch();
  //   const user = useSelector((state: RootState) => state.user.user)
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const retData = await registerUser(data);
    dispatch(userActions.setUser(retData));
    router.push("/signin");
  };

  return (
    <div className="flex items-center justify-center py-20">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 max-w-sm items-center"
      >
        <div className="w-full">
          <Input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name?.message?.toString()}
            </p>
          )}
        </div>

        <div className="w-full">
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

        <div className="w-full">
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

        <Button type="submit">SignUp</Button>
      </form>
    </div>
  );
};

export default Page;
