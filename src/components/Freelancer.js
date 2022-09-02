import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getcitynameACtions, getcountrynameAction } from "../store/actions";
import { getstatenameActions } from "../store/actions";
import { sellerEnquiryActions } from "../store/actions";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter First Name")
    .min(4, "First name must be at least 4 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  lastName: yup
    .string()
    .required("Please enter Last Name")
    .min(4, "Last name must be at least 24characters")
    .max(20, "Last name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid last name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use the correct email"
    ),
  dob: yup.string().required("Please select your Birthday"),
  addressLine1: yup
    .string()
    .required("Please enter Address")
    .min(2, "Address must be at least 2 characters")
    .max(60, "Address must be at most 60 characters")
    .matches(/^[a-zA-Z0-9\s.,'-]*$/, "Please enter valid Address"),
  addressLine2: yup.string(),
  city: yup.string(),

  stateId: yup.string().required("Please select state"),

  countryId: yup.string().required("Please select country"),

  proofOfIdentity: yup.string(),

  phone: yup
    .string()
    .required("Please enter mobile")
    // .matches(/^[0-9]*$/, "Phone number is not valid")
    .min(7)
    .max(14),
  postcode: yup
    .string()
    .required("Please enter Zip")
    .min(3)
    // .max(6),
    .matches(/^[0-9a-zA-Z]+$/, "Zip code is not valid"),
  comment: yup
    .string()
    .required("Please enter Comment")
    // .matches(/^[a-zA-Z0-9\s.,'-]*$/, "Comment is not valid")
    .min(4)
    .max(300),
});
const Freelancer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let attachmentName = useRef(null);
  const [img, setImg] = useState("");
  const [fileAttach, setFileAttach] = useState(null);
  const [file, setFile] = React.useState("");
  const [countryname, setCountryname] = useState("");
  const countrylist = useSelector(
    (state) => state.getcountrynameReducers?.countryname
  );
  const statename = useSelector(
    (state) => state.getStatenameReducers.statename
  );
  const cityname = useSelector((state) => state.getcitynmaeReducers.cityname);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const imgHandler = (e) => {
    setFileAttach(e.target.files[0]);
    let image = URL.createObjectURL(e.target.files[0]);
    setImg(image);
  };

  useEffect(() => {
    getcountrynameAction(dispatch);
  }, [dispatch]);

  const getStateHandler = (e) => {
    let val = e.target.value;
    setCountryname(val);
    const payload = {
      countryId: val,
    };
    getstatenameActions(dispatch, payload);
  };

  const getCityHandler = (e) => {
    const payload = {
      countryId: countryname,
      stateId: e.target.value,
    };
    getcitynameACtions(dispatch, payload);
  };

  const onSubmit = (data) => {
    let payload = new FormData();
    payload.append("type", "Freelancer");
    payload.append("firstName", data.firstName);
    payload.append("lastName", data.lastName);
    payload.append("countryId", data.countryId);
    payload.append("cityId", data.cityId);
    payload.append("stateId", data.stateId);
    payload.append("addressLine1", data.addressLine1);
    payload.append("addressLine2", data.addressLine2);
    payload.append("email", data.email);
    payload.append("postcode", data.postcode);
    payload.append("phone", data.phone);
    payload.append("proofOfIdentity", fileAttach);
    payload.append("dob", data.dob.split("T")[0]);
    payload.append("comment", data.comment);
    sellerEnquiryActions(dispatch, payload, navigate);
  };
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }
  return (
    <>
      <div
        id="uncontrolled-tab-example-tabpane-freelancer"
        aria-labelledby="uncontrolled-tab-example-tab-freelancer"
        className="tab-pane active"
      >
        <div className="freelancer-tab">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card inputs-wrapper">
              {/* <h4>Verification</h4> */}
              <div className="row input-block">
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label">first name</label>
                  <div
                    className={`input-wrap ${
                      errors.firstName ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      {...register("firstName")}
                      placeholder="FirstName"
                    />
                  </div>
                  {errors.firstName && (
                    <span className="error">{errors.firstName.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label">Last name</label>
                  <div
                    className={`input-wrap ${
                      errors.lastName ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      {...register("lastName")}
                      className="form-control"
                      placeholder="LastName"
                    />
                  </div>
                  {errors.lastName && (
                    <span className="error">{errors.lastName.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label">Email address</label>
                  <div
                    className={`input-wrap ${errors.email ? "has-error" : ""}`}
                  >
                    <input
                      type="email"
                      {...register("email")}
                      className="form-control"
                      placeholder="example@aladyyn.pro"
                    />
                  </div>
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="inputs-heading">Freelancer Information</div>
              <div className="row input-block">
                <div className="col-md-6 col-lg-4 input-wrapper required text-fix">
                  <label className="input-label">Date of Birth</label>

                  <div
                    className={`input-wrap ${errors.dob ? "has-error" : ""}`}
                  >
                    <input
                      type="text"
                      className="form-control date-input"
                      {...register("dob")}
                      placeholder="Select date"
                    />
                  </div>
                  {errors.dob && (
                    <span className="error">{errors.dob.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="input-wrapper required">
                    <label className="input-label">Phone Number</label>
                    <div
                      className={`input-wrap ${
                        errors.phone ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="number"
                        {...register("phone")}
                        className="form-control"
                        placeholder="Mobile"
                      />
                    </div>
                    {errors.phone && (
                      <span className="error">{errors.phone.message}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="input-wrapper img-input-fix has-input-file">
                <label className="">Proof of Identify</label>
                <div className="row input-block">
                  <div className="col-lg-8 input-wrapper">
                    <div className="img-input-wrapper">
                      <div className="img-input">
                        <i className="icon-plus"></i>
                        Upload
                        <input
                          {...register("proofOfIdentity")}
                          type="file"
                          accept="image/*"
                          ref={attachmentName}
                          onChange={imgHandler}
                        />
                      </div>
                      <span className="img-info">
                        Upload scanned copy of passport, nationalID, driver’s
                        license etc.
                      </span>
                    </div>
                    {img !== "" ? (
                      <div className="img-thumbnail-wrapper attachment-name image">
                        <img src={img} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {file && <ImageThumb image={file} />}
              </div>
              <div className="inputs-heading">Business Address</div>
              <div className="row input-block">
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label">address line 1</label>
                  <div
                    className={`input-wrap ${
                      errors.addressLine1 ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      {...register("addressLine1")}
                      placeholder="Address"
                    />
                    <span className="input-info">
                      Building number and Street
                    </span>
                  </div>
                  {errors.addressLine1 && (
                    <span className="error">{errors.addressLine1.message}</span>
                  )}
                </div>
                <div className="col-md-6 input-wrapper">
                  <label className="input-label">address line 2</label>
                  <div
                    className={`input-wrap ${
                      errors.addressLine2 ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      {...register("addressLine2")}
                      className="form-control"
                      placeholder="Address"
                    />
                    <span className="input-info">Room/Block/Apartments</span>
                  </div>
                </div>
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label">Country</label>
                  <div
                    className={`input-wrap ${
                      errors.countryId ? "has-error" : ""
                    }`}
                  >
                    <select
                      {...register("countryId")}
                      name="countryId"
                      className="form-control"
                      id="countryId"
                      onBlur={getStateHandler}
                    >
                      <option value={""}>Please select country</option>
                      {countrylist &&
                        countrylist.data.map((items, index) => (
                          <option value={items._id} key={index}>
                            {items.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  {errors.countryId && (
                    <span className="error">{errors.countryId.message}</span>
                  )}
                </div>
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label">State / Region</label>
                  <div className="input-wrap">
                    <select
                      className="form-control"
                      {...register("stateId")}
                      name="stateId"
                      onClick={getCityHandler}
                    >
                      <option value={""}>Please select state</option>
                      {statename
                        ? statename.data?.map((item, index) => {
                            return (
                              <option value={item._id} key={index}>
                                {item.name}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                  {errors.stateId && (
                    <span className="error">{errors.stateId.message}</span>
                  )}
                </div>
                <div className="col-md-6 input-wrapper">
                  <label className="input-label">City</label>
                  <div className="input-wrap">
                    <select
                      className="form-control"
                      {...register("cityId")}
                      name="cityId"
                    >
                      <option value={""}>Please select city</option>
                      {cityname
                        ? cityname.data?.map((item, index) => {
                            return (
                              <option value={item._id} key={index}>
                                {item.name}
                              </option>
                            );
                          })
                        : null}
                    </select>
                  </div>
                  {errors.city && (
                    <span className="error">{errors.city.message}</span>
                  )}
                </div>
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label">ZIP / Postal Code</label>
                  <div
                    className={`input-wrap ${
                      errors.postcode ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      {...register("postcode")}
                      className="form-control"
                      autoComplete="off"
                      placeholder="Zip Code"
                    />
                  </div>
                  {errors.postcode && (
                    <span className="error">{errors.postcode.message}</span>
                  )}
                </div>
              </div>
              <div className="row input-block">
                <div className="col-12 input-wrapper required mb-0">
                  <label className="input-label">Comment</label>
                  <div
                    className={`input-wrap ${
                      errors.comment ? "has-error" : ""
                    }`}
                  >
                    <textarea
                      type="text"
                      className="form-control"
                      {...register("comment")}
                      placeholder="Please enter your comment"
                    />
                  </div>
                  <label className="comment-info input-label input-info position-static">
                    Comment should not exceed 300 character.
                  </label>
                  {errors.comment && (
                    <span className="error">{errors.comment.message}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="btn-wrap">
              <input className="btn" type="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
const ImageThumb = ({ image }) => {
  return (
    <div className="thumbnail-wrap">
      <img src={URL.createObjectURL(image)} alt={image.name} />
    </div>
  );
};
export default Freelancer;
