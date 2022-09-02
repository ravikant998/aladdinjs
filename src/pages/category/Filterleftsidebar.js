import React from "react";

const Filterleftsidebar = () => {
  return (
    <>
      <div className="left-block">
        <div className="filters-wrap">
          <h3>Filters</h3>
          <form>
            <div className="input-wrap">
              <label className="input-label">Service Type</label>
              <div className="contains-checkbox">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="check"
                    // value="Company"
                  />
                  <label className="form-check-label">Companies</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="check1"
                    // value="Freelancer"
                  />
                  <label className="form-check-label">Freelancers</label>
                </div>
              </div>
            </div>
            <div className="input-wrap">
              <label className="input-label">Location</label>
              <div className="wrap-input contains-btn contains-search-input">
                <input
                  type="text"
                  className="form-control"
                  placeholder="input search text"
                  //   value=""
                />
                <div className="btn-wrap">
                  <button type="button">
                    <i className="icon-search"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="input-wrap">
              <label className="input-label">Distance</label>
              <div className="multiple-inputs">
                <div className="wrap-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0 km"
                  />
                </div>
                <div className="wrap-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="800 km"
                  />
                </div>
              </div>
            </div>
            <div className="input-wrap">
              <label className="input-label">Language</label>
              <div className="wrap-input">
                <select
                  className="form-control drop-down"
                  placeholder="input search text"
                >
                  <option
                  // value=""
                  >
                    Please select
                  </option>
                  <option
                  // value="60817cf559b4452bb1000afd"
                  >
                    English
                  </option>
                  {/* <option value="61ee571ec3231e084831e7a4">Hindi</option>
                               <option value="61ee5747c3231e084831e7a6">French</option>
                               <option value="61ee5754c3231e084831e7a8">German</option>
                               <option value="61ee5762c3231e084831e7aa">Spanish</option> */}
                </select>
              </div>
            </div>
            <div className="rating-input">
              <div className="input-label">Ratings</div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="rating"
                  id="ratingCheck4"
                  // value="4"
                />
                <label className="custom-checkbox">
                  <span className="rating-wrap">
                    <span className="img-wrap">
                      <img
                        src="/static/media/rating-4.612684496eb611ffdaa9bf8e03bf0023.svg"
                        alt="rating"
                      />
                    </span>
                    <span className="text-wrap">&amp; Up</span>
                  </span>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="rating"
                  id="ratingCheck3"
                  // value="3"
                />
                <label className="custom-checkbox">
                  <span className="rating-wrap">
                    <span className="img-wrap">
                      <img
                        src="/static/media/rating-3.6dd9c635cd5474a49cf9eb9f100323ad.svg"
                        alt="rating"
                      />
                    </span>
                    <span className="text-wrap">&amp; Up</span>
                  </span>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="rating"
                  id="ratingCheck2"
                  // value="2"
                />
                <label className="custom-checkbox">
                  <span className="rating-wrap">
                    <span className="img-wrap">
                      <img
                        src="/static/media/rating-2.8b3ee31daeaff6656c7b27c9c3655e80.svg"
                        alt="rating"
                      />
                    </span>
                    <span className="text-wrap">&amp; Up</span>
                  </span>
                  <span className="checkmark"></span>
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="rating"
                  id="ratingCheck1"
                  // value="1"
                />
                <label className="custom-checkbox">
                  <span className="rating-wrap">
                    <span className="img-wrap">
                      <img
                        src="/static/media/rating-1.ce9231a1402cfcd0a20ad1e7a64e7f08.svg"
                        alt="rating"
                      />
                    </span>
                    <span className="text-wrap">&amp; Up</span>
                  </span>
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="input-wrap">
              <label className="input-label">Price Type</label>
              <div className="contains-checkbox">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkPrice1"
                    // value="Fixed"
                  />
                  <label className="form-check-label">Fixed</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="checkPrice2"
                    // value="Range"
                  />
                  <label className="form-check-label">Hourly Rate</label>
                </div>
              </div>
            </div>
            <div className="range-slider_wrapper input-wrap">
              <label className="input-label">Price Range</label>
              <div
                style={{
                  transform: "scale(1)",
                  cursor: "inherit",
                  height: "33px",
                  display: "flex",
                  width: "100%",
                  margin: "0px 4px",
                }}
              >
                <div
                  style={{
                    height: "4px",
                    width: "100%",
                    borderRadius: "4px",
                    background:
                      "linear-gradient(to right, rgb(214, 217, 222) 0%, rgb(214, 217, 222) 0%, rgb(105, 161, 244) 0%, rgb(105, 161, 244) 100%, rgb(214, 217, 222) 100%, rgb(214, 217, 222) 100%); align-self: center",
                  }}
                >
                  <div
                    tabIndex="0"
                    aria-valuemax="25000.00"
                    aria-valuemin="0"
                    aria-valuenow="0"
                    draggable="false"
                    role="slider"
                    style={{
                      position: "absolute",
                      zIndex: "0",
                      cursor: "grab",
                      userSelect: "none",
                      touchAction: "none",
                      height: "8px",
                      width: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "2px solid rgb(105, 161, 244)",
                      transform: "translate(-4px, -2px)",
                    }}
                  ></div>
                  <div
                    tabIndex="0"
                    aria-valuemax="25000.00"
                    aria-valuemin="0"
                    aria-valuenow="25000.00"
                    draggable="false"
                    role="slider"
                    style={{
                      position: "absolute",
                      zIndex: "1",
                      cursor: "grab",
                      userSelect: "none",
                      touchAction: "none",
                      height: "8px",
                      width: "8px",
                      borderRadius: "50%",
                      backgroundColor: "rgb(255, 255, 255)",
                      border: "2px solid rgb(105, 161, 244)",
                      transform: "translate(282.656px, -5px)",
                    }}
                  ></div>
                </div>
              </div>
              <div className="range-info">
                <div className="left-box">$0</div>
                <div className="right-box">$25000.00</div>
              </div>
            </div>
            <div className="btns-wrap">
              <button type="button" className="secondary-btn">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filterleftsidebar;
