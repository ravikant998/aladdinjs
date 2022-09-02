import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { userEditPrifileActions } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter First Name")
    .min(2, "First name must be at least 2 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  lastName: yup
    .string()
    .required("Please enter Last Name")
    .min(2, "Last name must be at least 2 characters")
    .max(20, "Last name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid last name"),

  email: yup
    .string()
    .required("Please enter your email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use the correct email"
    ),
  phone: yup.string().required("Please enter mobile").min(7).max(14),
});

const UserEditPrifile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let attachmentfile = useRef(null);
  const [image, setImage] = useState();

  const [fileattach, setFileattach] = useState();

  const userdetaislprofile = useSelector(
    (state) => state.getuserprofiledetailsReducers?.getuserprofiledetailsdata
  );

  const updateuserprofile = useSelector(
    (state) => state.userProfileEditReducers.updateuserprofile
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const imageHandelar = (e) => {
    setFileattach(e.target.files[0]);
    let imagesrc = URL.createObjectURL(e.target.files[0]);
    setImage(imagesrc);
  };

  useEffect(() => {
    if (userdetaislprofile?.length > 0) {
      setValue("firstName", userdetaislprofile[0].firstName);
      setValue("lastName", userdetaislprofile[0].lastName);
      setValue("email", userdetaislprofile[0].email);
      setValue("phone", userdetaislprofile[0].phone);
      setValue(
        userdetaislprofile[0]?.image
          ? userdetaislprofile[0].path + userdetaislprofile[0].image
          : ""
      );
    }
  }, [userdetaislprofile]);

  const submit = (data) => {
    data.image = fileattach;
    let payload = data;
    userEditPrifileActions(dispatch, payload, navigate);
  };

  return (
    <div>
      <section className="user-profile edit">
        <div className="">
          <div className="Toastify"></div>
        </div>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a role="button" tabIndex="0">
                  User Account
                </a>
              </li>
              <li className="breadcrumb-item">
                <a role="button" tabIndex="0">
                  User Profile
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Edit User Profile
              </li>
            </ol>
          </nav>
          <h1>Edit User Profile</h1>

          <form onSubmit={handleSubmit(submit)}>
            {/* <ToastContainer
              position="top-right"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
            /> */}
            <div className="account-info">
              <div className="card account-card inputs-wrapper">
                <div className="account-heading">Account Information</div>
                <div className="row input-block">
                  <div className="col-md-6 input-wrapper required">
                    <label className="input-label">first name</label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        maxLength="15"
                        placeholder="First Name"
                        {...register("firstName")}
                      />
                      <span className="error">{errors.firstName?.message}</span>
                    </div>
                  </div>
                  <div className="col-md-6 input-wrapper required">
                    <label className="input-label">last name</label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        maxLength="15"
                        placeholder="Last Name"
                        {...register("lastName")}
                      />
                      <span className="error">{errors.lastName?.message}</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-md-0 input-wrapper required">
                    <label className="input-label">email</label>
                    <div className="input-wrap">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        {...register("email")}
                      />
                      <span className="error">{errors.email?.message}</span>
                    </div>
                  </div>
                  <div className="col-md-6 mb-md-0 input-wrapper required">
                    <div className="input-wrapper required mb-0">
                      <label htmlFor="user-id">Mobile Number</label>
                      <div className="input-wrap">
                        <input
                          type="number"
                          name="phone"
                          className="form-control"
                          placeholder="Mob"
                          maxLength="14"
                          {...register("phone")}
                        />
                        <span className="error">{errors.phone?.message}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card account-card inputs-wrapper">
                <div className="account-heading">Basic Information</div>
                <div className="row input-block">
                  <div className="input-wrapper mb-0 required img-input-fix has-input-file">
                    <label className="mb-2">Profile Image</label>
                    <div className="row input-block">
                      <div className="col-lg-8 mb-0 input-wrapper">
                        <div className="img-input-wrapper">
                          <div className="img-input">
                            <i className="icon-plus"></i>Upload
                            <input
                              name="image"
                              type="file"
                              accept="image/*"
                              ref={attachmentfile}
                              onChange={imageHandelar}
                            />
                          </div>
                          <span className="img-info">
                            Upload profile picture
                          </span>
                          {image !== "" ? (
                            <div className="img-thumbnail-wrapper attachment-name image">
                              <img src={image} />
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="btns-wrap">
              <button className="secondary-btn" type="button">
                Cancel
              </button>
              <input className="btn" type="submit" value="submit" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default UserEditPrifile;
