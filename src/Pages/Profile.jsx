import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="text-center, py-16 ">
        <h1 className="text-center font-bold text-4xl">
          Welcome {user.displayName}
        </h1>
        <p className="text-xl text-center font-medium py-5">
          You can update your profile information hree
        </p>
      </div>
      <div className=" mx-auto max-w-xl p-5  mb-4">
            <div className="flex justify-between">
            <div >
          <p className="font-semibold p-5"> Name : {user.displayName}</p>
          <p className="font-semibold p-5"> Email : {user.email}</p>
        </div>

        <div class="w-24 rounded-full">
          <img src={user.photoURL} />
        </div>
            </div>
        <div className="flex justify-center py-3">
        <Link to={'/updateProfile'} className="btn btn-wide text-center bg-blue-400 text-white">Update</Link >
        </div>
      </div>
    </div>
  );
};

export default Profile;
