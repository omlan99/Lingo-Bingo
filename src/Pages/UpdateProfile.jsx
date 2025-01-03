import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProfile = () => {
  const { updateUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleUpdate = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value
     await updateUser({ displayName: name, photoURL: photo })
    .then()
    .catch(error => {
      console.log(error.message)
    })
    toast.success('Profile info updated', {position : "top-center"})
      navigate("/profile");
  };
  return (
    <div className="max-w-xl mx-auto">
      <form className="card-body" onSubmit={handleUpdate}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name ="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            name="photo"
            type="url"
            placeholder="Enter link of the photo"
            className="input input-bordered"
            
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-success" >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
