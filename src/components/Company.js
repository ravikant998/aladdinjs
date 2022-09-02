import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { getcitynameACtions, getcountrynameAction } from "../store/actions";
import { getstatenameActions } from "../store/actions";
import { sellerEnquiryActions } from "../store/actions";

// const numberRegex = /^[0-9]+$/;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter First Name")
    .min(4, "Firstssss name must be at least 4 characters")
    .max(20, "First name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid first name"),
  lastName: yup
    .string()
    .required("Please enter Last Name")
    .min(4, "Last name must be at least 4 characters")
    .max(20, "Last name must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid last name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Please use the correct email"
    ),
  businessName: yup
    .string()
    .required("Please enter Business Name")
    .min(4, "Business name must be at least 4 characters")
    .max(20, "Business name must be at most 20 characters"),
  // .matches(/^[ A-Za-z0-9_@./#&+-]*$/, "Please enter valid Business name"),
  primaryContactPerson: yup
    .string()
    .required("Please enter Primary Contact Person")
    .min(4, "Primary contact person must be at least 4 characters")
    .max(20, "Primary contact person must be at most 20 characters")
    .matches(/^[A-Za-z ]+$/i, "Please enter valid primary contact person"),
  companyRegistrationNumber: yup
    .string()
    .required("Please enter Company Register Number")
    .matches(/^[0-9a-zA-Z]+$/, "Company Register Number is not valid"),
  vat: yup.string(),
  addressLine1: yup
    .string()
    .required("Please enter Address")
    .min(4, "Address must be at least 4 characters")
    .max(60, "Address must be at most 20 characters")
    .matches(/^[a-zA-Z0-9\s.,'-]*$/, "Please enter valid Address"),
  addressLine2: yup.string(),

  cityId: yup.string(),

  stateId: yup.string().required("Please select state"),

  countryId: yup.string().required("Please select country"),

  phone: yup.string().required("Please enter mobile").matches().min(8),

  postcode: yup
    .string()
    .required("Please enter Zip")
    .matches(/^[0-9a-zA-Z]+$/, "Zip code is not valid")
    .min(6),

  comment: yup.string().required("Please enter Comment").min(2).max(300),
});

const Company = () => {
  const dispatch = useDispatch();
  const [countryname, setCountryname] = useState("");
  // const [number, setNumber] = useState("");
  const [agree, setAgree] = useState(false);
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
    // reset,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

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
    data.type = "Company";
    sellerEnquiryActions(dispatch, data);
  };

  // const numberChangeHandler = (event) => {
  //   if (
  //     numberRegex.test(event.target.value) ||
  //     event.target.value.length == 0
  //   ) {
  //     setNumber(event.target.value);
  //   }
  // };

  // const checkboxHandler = () => {
  //   setAgree(!agree);
  // };

  // // When the button is clicked
  // const btnHandler = () => {
  //   alert("The buttion is clickable!");
  // };
  return (
    <>
      <div
        id="uncontrolled-tab-example-tabpane-company"
        aria-labelledby="uncontrolled-tab-example-tab-company"
        className="tab-pane active"
           >
        <div className="company-tab">
          <div className="Toastify"></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card inputs-wrapper">
              <div className="row input-block">
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label required required">
                    first name
                  </label>
                  <div
                    className={`input-wrap ${
                      errors.firstName ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      placeholder="FirstName"
                      {...register("firstName")}
                      maxLength={15}
                    />
                  </div>
                  {errors.firstName && (
                    <span className="error">{errors.firstName.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label required">Last name</label>
                  <div
                    className={`input-wrap ${
                      errors.lastName ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      name="lastName"
                      className="form-control"
                      placeholder="LastName"
                      {...register("lastName")}
                      maxLength={15}
                    />
                  </div>
                  {errors.lastName && (
                    <span className="error">{errors.lastName.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label required">Email address</label>
                  <div
                    className={`input-wrap ${errors.email ? "has-error" : ""}`}
                  >
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="example@aladyyn.pro"
                      {...register("email")}
                    />
                  </div>
                  {errors.email && (
                    <span className="error">{errors.email.message}</span>
                  )}
                </div>
              </div>
              <div className="inputs-heading">Business Information</div>
              <div className="row input-block margin-fix">
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label required">Business Name</label>
                  <div
                    className={`input-wrap ${
                      errors.businessName ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      name="businessName"
                      placeholder="Business Name"
                      {...register("businessName")}
                    />
                  </div>
                  {errors.businessName && (
                    <span className="error">{errors.businessName.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label required">
                    Primary Contact Person
                  </label>
                  <div
                    className={`input-wrap ${
                      errors.primaryContactPerson ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      name="primaryContactPerson"
                      className="form-control"
                      placeholder="Primary Person"
                      {...register("primaryContactPerson")}
                    />
                  </div>
                  {errors.primaryContactPerson && (
                    <span className="error">
                      {errors.primaryContactPerson.message}
                    </span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper required">
                  <label className="input-label required">
                    Company Registration Number
                  </label>
                  <div
                    className={`input-wrap ${
                      errors.companyRegistrationNumber ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      name="companyRegistrationNumber"
                      className="form-control"
                      placeholder="Company Registration Number"
                      {...register("companyRegistrationNumber")}
                    />
                  </div>
                  {errors.companyRegistrationNumber && (
                    <span className="error">
                      {errors.companyRegistrationNumber.message}
                    </span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4 input-wrapper">
                  <label className="input-label">
                    VAT Number
                    <span className="text-lowercase">(if applicable)</span>
                  </label>
                  <div
                    className={`input-wrap ${errors.vat ? "has-error" : ""}`}
                  >
                    <input
                      type="text"
                      name="vat"
                      className="form-control"
                      placeholder="Vat number"
                      {...register("vat")}
                    />
                  </div>
                  {errors.vat && (
                    <span className="error">{errors.vat.message}</span>
                  )}
                </div>
                <div className="col-md-6 col-lg-4">
                  <div className="input-wrapper required">
                    <label className="input-label required">Phone Number</label>
                    <div
                      className={`input-wrap ${
                        errors.phone ? "has-error" : ""
                      }`}
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile"
                        maxLength={14}
                        {...register("phone")}
                        // value={number}
                        // onChange={numberChangeHandler}
                      />
                    </div>
                    {errors.phone && (
                      <span className="error">{errors.phone.message}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="inputs-heading">Registered Business Address</div>
              <div className="row input-block">
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label required">address line 1</label>
                  <div
                    className={`input-wrap ${
                      errors.addressLine1 ? "has-error" : ""
                    }`}
                  >
                    <input
                      type="text"
                      className="form-control"
                      name="addressLine1"
                      placeholder="Address"
                      {...register("addressLine1")}
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
                      name="addressLine2"
                      className="form-control"
                      placeholder="Address"
                      {...register("addressLine2")}
                    />
                    <span className="input-info">Room/Block/Apartments</span>
                  </div>
                  {errors.addressLine2 && (
                    <span className="error">{errors.addressLine2.message}</span>
                  )}
                </div>
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label">Country</label>
                  <div
                    className={`input-wrap ${
                      errors.countryId ? "has-error" : ""
                    }`}
                  >
                    <select
                      name="countryId"
                      className="form-control"
                      id="countryId"
                      {...register("countryId")}
                      // onChange={changeCountry}
                      onBlur={getStateHandler}
                    >
                      <option value="">Please select country</option>
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
                  <label className="input-label required">State / Region</label>
                  <div className="input-wrap">
                    <select
                      className="form-control"
                      name="stateId"
                      {...register("stateId")}
                      // onChange={stateChange}
                      onClick={getCityHandler}
                    >
                      <option value="">Please select state</option>
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
                      name="cityId"
                      {...register("cityId")}
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
                  {errors.cityId && (
                    <span className="error">{errors.cityId.message}</span>
                  )}
                </div>
                <div className="col-md-6 input-wrapper required">
                  <label className="input-label required">
                    ZIP / Postal Code
                  </label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      name="postcode"
                      className="form-control"
                      placeholder="Zip Code"
                      maxLength={8}
                      {...register("postcode")}
                    />
                  </div>
                  {errors.postcode && (
                    <span className="error">{errors.postcode.message}</span>
                  )}
                </div>
              </div>
              <div className="row input-block">
                <div className="col-12 input-wrapper required mb-0">
                  <label className="input-label required">Comment</label>
                  <div className="input-wrap">
                    <textarea
                      type="text"
                      className="form-control"
                      name="comment"
                      placeholder="Please enter your comment"
                      {...register("comment")}
                    ></textarea>
                  </div>
                  <label className="comment-info input-label required input-info position-static">
                    Comment should not exceed 300 characters.
                  </label>
                  {errors.comment && (
                    <span className="error">{errors.comment.message}</span>
                  )}
                </div>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  id="selectCheckbox"
                  className="form-check-input"
                  // onConChangelick={checkboxHandler}
                />
                <label htmlFor="privacyPolicy" className="form-check-label">
                  Please accept our
                  <a className="term-conditions" href="/terms-and-conditions">
                    terms and conditions
                  </a>
                </label>
                <div className="invalid-feedback"></div>
              </div>
            </div>
            <div className="btn-wrap">
              <input
                // disabled={!agree}
                className="btn"
                type="submit"
                value="submit"
                // onClick={btnHandler}
                // disabled={isFormSubmitting ? true : false}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Company;
