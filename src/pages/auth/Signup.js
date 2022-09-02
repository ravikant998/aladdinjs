import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usersignupActions } from "../../store/actions";
const Signup = () => {
  const dispatch = useDispatch();

  const onhandlesubmit = (e) => {
    e.preventDefault();
    const payload = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      type: "User",
    };
    usersignupActions(dispatch, payload);
  };
  return (
    <div>
      <section className="create-account">
        <div className="Toastify"></div>
        <div className="container">
          <div className="card">
            <h2>Create Account</h2>
            <form onSubmit={onhandlesubmit}>
              <div className="row inputs-wrapper">
                <div className="col-md-6 pr-fix input-block">
                  <div className="input-wrapper required">
                    <label>First Name</label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-fix input-block">
                  <div className="input-wrapper required">
                    <label>Last Name</label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row inputs-wrapper">
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="user-id">Mobile Number</label>
                    <div className="input-wrap">
                      <input
                        type="number"
                        name="phone"
                        className="form-control"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="user-id">Email Address</label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrap">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="***********"
                      />
                      <div className="toggle-wrap">
                        <i className="icon-eye"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 input-block">
                  <div className="input-wrapper required">
                    <label htmlFor="password">Confirm Password</label>
                    <div className="input-wrap">
                      <input
                        type="password"
                        name="re_password"
                        className="form-control"
                        placeholder="************"
                      />
                      <div className="toggle-wrap">
                        <i className="icon-eye"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 mb-2 mb-md-0">
                  <div className="form-check contain-checkbox">
                    <input
                      type="checkbox"
                      name="privacyPolicy"
                      id="selectCheckbox"
                      className="form-check-input"
                    />
                    <label className="form-check-label">
                      By signing in you agree to the
                      <a href="/user-terms-conditions" target="_blank">
                        Terms and Conditions
                      </a>
                      of Aladyyn
                    </label>
                    <div className="invalid-feedback"></div>
                  </div>
                </div>
              </div>
              <div className="btn-wrap">
                <button type="submit" className="btn w-100">
                  Create Account
                </button>
              </div>
            </form>
          </div>
          <div className="card text-center">
            <div className="signin-wrap">
              Already have an account?
              <Link className="signin-link" to="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
