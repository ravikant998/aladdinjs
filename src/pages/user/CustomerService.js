import React from "react";

const CustomerService = () => {
  return (
    <div>
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a role="button" tabindex="0">
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
          <form>
            <div className="inputs-wrapper">
              <div className="row">
                <div className="col-md-6 col-xl-4 input-wrapper required">
                  <label className="input-label">first name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      maxlength="15"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 input-wrapper required">
                  <label className="input-label">last name</label>
                  <div className="input-wrap">
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      maxlength="15"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-md-6 col-xl-4 input-wrapper required">
                  <label className="input-label">Email address</label>
                  <div className="input-wrap">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      autocomplete="off"
                      placeholder="example@aladyyn.pro"
                    />
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
                      maxlength="14"
                      value=""
                    />
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
                      <input name="attachment" type="file" accept="image/*" />
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
    </div>
  );
};

export default CustomerService;
