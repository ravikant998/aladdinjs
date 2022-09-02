import React from "react";
import { useDispatch } from "react-redux";
import { forgetpasswordActions } from "../../store/actions";

const ForgetPassword = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <section className="forgot-password">
        <div className="Toastify"></div>
        <div className="container">
          <div className="card">
            <h2>Forgot Password?</h2>
            <div className="reset-info">
              No worries, we'll send you reset instructions.
            </div>
            <form>
              <div className="input-block">
                <label htmlFor="user-id">Email</label>
                <div className="input-wrap">
                  <input
                    type="text"
                    placeholder="Email or Phone"
                    name="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="btn-wrap">
                <button type="submit" className="btn w-100">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
          <div className="card text-center">
            <div className="login-wrap">
              <a className="login-link" href="/forgot-password">
                Back to Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgetPassword;
