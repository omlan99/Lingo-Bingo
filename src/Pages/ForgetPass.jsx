import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const ForgetPass = () => {
    const location = useLocation()
    console.log(location)
    const {resetPassword} = useContext(AuthContext)
    const email =location.state?.email || ''
    const handleReset = e => {
        e.preventDefault();
        const email = e.target.email.value
        resetPassword(email)
        .then(() => {
          window.location.href = "https://mail.google.com/";
        })
        .catch((err) => console.error(err));
       
    }
    return (
        <div className="max-w-xl mx-auto">
        <form className="card-body" onSubmit={handleReset}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name ="email"
              defaultValue={email}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-success" >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    );
};

export default ForgetPass;