import React, { useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { customerconatactActions } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

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
  attachment: yup.string(),
  typeOfIssue: yup.string().required("Please Select issue"),
  comment: yup
    .string()
    .required("Please enter Comment")
    .matches(/^[a-zA-Z0-9\s.,'-]*$/, "Comment is not valid")
    .min(2, "Comment must be at least 300 characters")
    .max(300, "Comment must be at most 300 characters"),
});

const CustomerServiceCard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let attachmentfile = useRef(null);
  // const [image, setImage] = useState();
  // const [fileattach, setFileattach] = useState();
  const [numberState, setNumberState] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const issueOptions = [
    { value: "", label: "Please Select issue" },
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
  ];

  // const imageHandelar = (e) => {
  //   // setFileattach(e.target.files[0]);
  //   let imagesrc = URL.createObjectURL(e.target.files[0]);
  //   // setImage(imagesrc);
  // };

  const onSubmitHandler = (data) => {
    let formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("typeOfIssue", data.typeOfIssue);
    formData.append("comment", data.comment);
    formData.append("attachment", data.attachment);
    customerconatactActions(dispatch, formData);
  };
  return (
    <div>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="inputs-wrapper">
            <div className="row">
              <div className="col-md-6 col-xl-4 input-wrapper required">
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
              <div className="col-md-6 col-xl-4 input-wrapper required">
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
              <div className="col-md-6 col-xl-4 input-wrapper required">
                <label className="input-label">Email address</label>
                <div className="input-wrap">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    // autocomplete="off"
                    placeholder="example@aladyyn.pro"
                    {...register("email")}
                  />
                  <span className="error">{errors.email?.message}</span>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 input-wrapper required">
                <label className="input-label">Phone Number</label>
                <div className="input-wrap">
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    maxLength="14"
                    value=""
                    {...register("phone")}
                  />
                  <span className="error">{errors.phone?.message}</span>
                </div>
              </div>
              <div className="col-md-6 col-xl-4 input-wrapper required">
                <label className="input-label text-transform-initial">
                  Type of Issue
                </label>
                <div className="select-wrap price-select input-wrap">
                  <select
                    className="react-select-container form-control drop-down"
                    name="typeOfIssue"
                  >
                    <option value="">Please Select issue</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 input-wrapper required textarea-info-wrapper textarea-info-wrapper">
                <label className="input-label">Comment</label>
                <div className="input-wrap">
                  <textarea
                    type="text"
                    className="form-control"
                    name="comment"
                    placeholder="Tell us more about the services you provide"
                  ></textarea>
                  <label className="textarea-info comment-info input-label required input-info position-static">
                    Comment should not exceed 300 characters.
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-4 input-wrapper has-input-file">
                <label className="">Upload File</label>
                <div className="img-input-wrapper">
                  <div className="img-input w-100">
                    <i className="icon-plus"></i>Upload
                    <input
                      name="attachment"
                      type="file"
                      accept="image/*"
                      ref={attachmentfile}
                      // onChange={imageHandelar}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-wrap">
            <button type="button" className="btn secondary-btn">
              Cancel
            </button>
            <button type="submit" className="btn">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerServiceCard;
