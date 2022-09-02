import React, { useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { customerconatactActions } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// const numberRegex = /^[0-9]+$/;
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
  // phone: yup.string().required("Please enter mobile").min(7).max(14),
  phone: yup.string().required("Please enter phone number").min(7).max(14),
  // .max(14)
  // .matches(
  //   /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  //   "Phone number is not valid"
  // )
  attachment: yup.string(),
  typeOfIssue: yup.string().required("Please Select issue"),
  comment: yup
    .string()
    .required("Please enter Comment")
    .matches(/^[a-zA-Z0-9\s.,'-]*$/, "Comment is not valid")
    .min(2, "Comment must be at least 300 characters")
    .max(300, "Comment must be at most 300 characters"),
});

const CustomerServicePage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let attachmentfile = useRef(null);
  const [image, setImage] = useState();
  const [fileattach, setFileattach] = useState(null);

  // const [numberState, setNumberState] = useState("");

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
    { value: "option 3", label: "option 3" },
  ];

  const imageHandelar = (e) => {
    setFileattach(e.target.files[0]);
    let imagesrc = URL.createObjectURL(e.target.files[0]);
    setImage(imagesrc);
  };

  const onSubmitHandler = (data) => {
    console.log("data>>>", data);
    let formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("typeOfIssue", data.typeOfIssue);
    formData.append("comment", data.comment);
    formData.append("attachment", fileattach);

    customerconatactActions(dispatch, formData, navigate);
  };

  const handleClick = () => {
    // setShow(!show);
    setTimeout(() => navigate(-1), 100);
  };

  // const numberChangeHandler = (event) => {
  //   if (
  //     numberRegex.test(event.target.value) ||
  //     event.target.value.length == 0
  //   ) {
  //     setNumberState(event.target.value);
  //   }
  // };

  return (
    <div>
      <section className="customer-service">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
        />
        <div className="">
          <div className="Toastify"></div>
        </div>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a role="button" tabIndex="0">
                  Home
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Customer Service
              </li>
            </ol>
          </nav>
          <h1>Customer Service</h1>
          <div className="card">
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="inputs-wrapper">
                <div className="row">
                  <div className="col-md-6 col-xl-4 input-wrapper required">
                    <label className="input-label">first name</label>
                    <div
                      className={`input-wrap ${
                        errors.firstName ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className="form-control"
                        // name="firstName"
                        maxLength="15"
                        placeholder="First Name"
                        {...register("firstName")}
                      />
                      {errors.firstName && (
                        <span className="error">
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4 input-wrapper required">
                    <label className="input-label">last name</label>
                    <div
                      className={`input-wrap ${
                        errors.lastName ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className="form-control"
                        // name="lastName"
                        maxLength="15"
                        placeholder="Last Name"
                        {...register("lastName")}
                      />

                      {errors.lastName && (
                        <span className="error">{errors.lastName.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4 input-wrapper required">
                    <label className="input-label">Email address</label>
                    <div
                      className={`input-wrap ${
                        errors.email ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="email"
                        // name="email"
                        className="form-control"
                        // autocomplete="off"
                        placeholder="example@aladyyn.pro"
                        {...register("email")}
                      />
                      {errors.email && (
                        <span className="error">{errors.email.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4 input-wrapper required">
                    <label className="input-label">Phone Number</label>
                    <div
                      className={`input-wrap ${
                        errors.phone ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="number"
                        // name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        maxLength="14"
                        // value={numberState}
                        // onChange={numberChangeHandler}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <span className="error">{errors.phone.message}</span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6 col-xl-4 input-wrapper required">
                    <label className="input-label text-transform-initial">
                      Type of Issue
                    </label>
                    <div
                      className={`select-wrap price-select input-wrap ${
                        errors.typeOfIssue ? "has-error" : ""
                      }`}
                    >
                      <select
                        className="react-select-container form-control drop-down"
                        name="typeOfIssue"
                        {...register("typeOfIssue")}
                      >
                        {issueOptions.map((item, index) => (
                          <option value={item.value} key={index}>
                            {item.label}
                          </option>
                        ))}
                      </select>
                      {errors.typeOfIssue && (
                        <span className="error">
                          {errors.typeOfIssue.message}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 input-wrapper required textarea-info-wrapper textarea-info-wrapper">
                    <label className="input-label">Comment</label>
                    <div
                      className={`input-wrap ${
                        errors.comment ? "has-error" : ""
                      }`}
                    >
                      <textarea
                        type="text"
                        className="form-control"
                        // name="comment"
                        {...register("comment")}
                        placeholder="Tell us more about the services you provide"
                      ></textarea>
                      {errors.comment && (
                        <span className="error">{errors.comment.message}</span>
                      )}
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
                          onChange={imageHandelar}
                        />
                      </div>
                    </div>
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
              <div className="btn-wrap">
                <button
                  type="button"
                  className="btn secondary-btn"
                  onClick={handleClick}
                >
                  Cancel
                </button>
                <button type="submit" className="btn">
                  submit
                </button>
              </div>
            </form>
          </div>

          <div className="card">
            <div className="contact-block">
              <div className="contact-wrap">
                <div className="contact-head">
                  <i className="icon-mail"></i>
                  <span className="text">Email</span>
                </div>
                <div className="contact-link">
                  <a href="mailto:aladyyn.info@gmail.com">
                    aladyyn.info@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-wrap">
                <div className="contact-head">
                  <i className="icon-dialer"></i>
                  <span className="text">Phone Number</span>
                </div>
                <div className="contact-link">
                  <a href="tel:0123456789" className="tel-link">
                    +1 (012) 34-56-789
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomerServicePage;
