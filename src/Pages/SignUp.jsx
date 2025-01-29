import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createUser, updateUser, setUser, googleSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const result = await googleSignIn();
      setUser(result.user);
      toast.success("Google sign-in successful!", { position: "top-center" });
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Google sign-in failed. Try again!", { position: "top-center" });
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password.trim());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (!validatePassword(password)) {
      return toast.error(
        "Password must have at least 6 characters, including uppercase and lowercase.",
        { position: "top-center" }
      );
    }

    try {
      const result = await createUser(email, password);
      setUser(result.user);

      await updateUser({ displayName: name, photoURL: photo });

      toast.success(`${name} created a new account`, {
        position: "top-center",
      });
      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error(
        error.message.includes("email-already-in-use")
          ? "You already have an account. Please login!"
          : "Account creation failed. Try again!",
        { position: "top-center" }
      );
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create a new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900"
              >
                User Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="name"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-900"
              >
                Upload a profile Photo
              </label>
              <div className="mt-2">
                <input
                  type="url"
                  name="photo"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-900"
              >
                Password
              </label>
              <div className="mt-2 relative">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </form>

          <div className="my-4">
            <button
              onClick={handleGoogle}
              className="btn bg-white border-gray-500 text-xl font-medium w-full flex items-center justify-center gap-2"
            >
              <FcGoogle /> Sign in with Google
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 ml-2"
            >
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
