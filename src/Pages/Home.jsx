import React, { useContext } from "react";
import Navbar from "../Componets/Navbar";
import Banner from "../Componets/Banner";
import { AuthContext } from "../Context/AuthProvider";
import About from "../Componets/About";
import { useLocation, useNavigate } from "react-router-dom";
import Success from "../Componets/Success";
import FAQ from "../Componets/FAQ";
import "animate.css";

const Home = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div>
      <div className="text-center, py-4 mb-4 ">
        <h1 className="text-center font-bold text-4xl animate__animated  animate__swing ">
          Welcome {user?.displayName} to LingoBingo
        </h1>
      </div>
      <Banner></Banner>
      <About></About>
      <Success></Success>
      <FAQ></FAQ>
      <div className=" bg-gray-900 rounded-xl">
        <div className="max-w-xl lg:max-w-lg mx-auto  p-5 mb-5 w-full text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white">
            You can Register an account here
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Start your learning journey with us
          </p>
          <div className="mt-6 flex max-w-md gap-x-4 justify-center">
            <button
              onClick={handleClick}
              type="submit"
              className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 btn-wide"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
