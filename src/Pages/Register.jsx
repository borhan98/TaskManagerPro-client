import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, updateUserProfile } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // handle create new user
    createUser(data.email, data.password)
      .then(() => {
        // handle update user profile
        updateUserProfile(data.name, data.photo)
          .then(() => {
            toast.success("Registration Successful! Please Login", {
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="py-10 min-h-screen w-full bg-gradient-to-b from-[#E96A04] via-[#592801] to-[#121212] ">
      <div className="max-w-md shadow-2xl mx-auto px-4 py-10 rounded-md bg-[#0000004f] ">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[2px] w-3/12 bg-base-200"></div>
          <h3 className="text-xl md:text-2xl w-6/12 text-center capitalize font-medium text-zinc-200">
            Registration
          </h3>
          <div className="h-[2px] w-3/12 bg-base-200"></div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div className="flex gap-1 flex-col">
            <label htmlFor="name" className="text-zinc-200">
              Your name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Enter your name"
              className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                Your name is required!
              </span>
            )}
          </div>
          {/* Photo */}
          <div className="flex gap-1 flex-col">
            <label htmlFor="photo" className="text-zinc-200">
              Photo URL
            </label>
            <input
              {...register("photo", { required: true })}
              type="text"
              placeholder="Enter photo URL"
              className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
            />
            {errors.photo && (
              <span className="text-red-500 text-sm">
                Photo URL is required!
              </span>
            )}
          </div>
          {/* Email */}
          <div className="flex gap-1 flex-col">
            <label htmlFor="email" className="text-zinc-200">
              Your email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your email"
              className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none "
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                Your email is required!
              </span>
            )}
          </div>
          {/* Password */}
          <div className="flex gap-1 flex-col">
            <label htmlFor="password" className="text-zinc-200">
              Password
            </label>
            <div className="relative">
              <input
                {...register("password", { required: true, minLength: 6 })}
                type={showPass ? "text" : "password"}
                placeholder="Enter a password"
                className="py-2 md:py-3 px-2 md:px-4 rounded-md focus:outline-none w-full "
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Password should have at least 6 character!
                </span>
              )}
              <span
                className="absolute top-3 right-2 text-2xl"
                onClick={() => setShowPass(!showPass)}
              >
                {" "}
                {!showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}{" "}
              </span>
              {/* Remember and Forgot Password */}
              <div className="flex justify-between mt-2">
                <div className="flex items-center gap-1">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                  <label
                    className="text-sm cursor-pointer  text-zinc-200 w-fit"
                    htmlFor="checkbox"
                  >
                    Remember me
                  </label>
                </div>
                <p className="text-sm cursor-pointer underline text-zinc-200 w-fit">
                  Forgot Password
                </p>
              </div>
            </div>
          </div>
          {/* Sign In */}
          <button
            type="submit"
            className="py-2 md:py-3 px-2 md:px-4 rounded-md capitalize border w-full text-zinc-200 font-medium hover:tracking-wider duration-300"
          >
            Sign up
          </button>
          {/* Social login */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] w-full bg-base-200"></div>
            <h3 className=" text-center font-medium text-zinc-200">OR</h3>
            <div className="h-[1px] w-full bg-base-200"></div>
          </div>
          <SocialLogin />
        </form>
        <p className="mt-16 text-center text-zinc-200">
          Already have account?{" "}
          <Link to={"/login"} className="text-[#E96A04]">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
