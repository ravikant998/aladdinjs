import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch, useSelector } from "react-redux";
import fullStar from "../assets/images/icon-fullstar.svg";
import emptyStar from "../assets/images/icon-star-empty.svg";
import { userAddReviewsRatingActions } from "../store/actions";
import { ToastContainer } from "react-toastify";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getreviewlistAction } from "../store/actions";
import { useEffect } from "react";
const Reviews = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let { serviceId } = useParams();
  const [reviewText, setReviewText] = useState("");
  const [userstar, setUserstate] = useState(0);

  const reviewlist = useSelector(
    (state) => state.getreviewlistReducers.reviewlistdata
  );
  // console.log("reviewlist", reviewlist);
  useEffect(() => {
    setTimeout(() => {
      getreviewlistAction(dispatch, serviceId);
    }, 200);
  }, [dispatch]);

  
  const reviewSubmit = (e) => {
    e.preventDefault();
    if (!localStorage.getItem("loginData")) {
      navigate("/sign-in");
    } else {
      let payload = {
        serviceId: serviceId,
        rating: userstar,
        review: reviewText,
      };

      userAddReviewsRatingActions(dispatch, payload);
    }
  };
  const ratingClickHandler = (val) => {
    setUserstate(val);
  };
  return (
    <>
      <div className="reviews">
        <div className="review-head">
          <h2>Reviews</h2>
        </div>
        {reviewlist?.data?.map((items, index) => {
          return (
            <div className="reviews-wrap" key={index}>
              <div className="review-box">
                <div className="review-logo">
                  <div className="text-image">{items.firstName}</div>
                </div>

                <div className="review-text">
                  <div className="review-details">
                    <div className="review-info">
                      <ul className="tests-wrap">
                        <li>{items.title}</li>
                      </ul>
                      <div className="review-name">
                        {items.firstName} {items.lastName}
                      </div>
                      <div className="review-timing">{items.createdAt}</div>
                    </div>
                    <div className="review-rating">
                      <span
                        style={{ display: "inline-block", direction: "ltr" }}
                      >
                        <Rating
                          readonly
                          placeholderRating={items?.rating ? items?.rating : 0}
                          emptySymbol={<img src={emptyStar} className="icon" />}
                          placeholderSymbol={
                            <img src={fullStar} className="icon" />
                          }
                          fullSymbol={<img src={fullStar} className="icon" />}
                        />
                      </span>
                    </div>
                    {localStorage.getItem("loginData") ? (
                      <div className="menu-wrap">
                        <button className="menu-btn" onClick="">
                          <span className="btn-dot"></span>
                          <span className="btn-dot"></span>
                          <span className="btn-dot"></span>
                        </button>

                        <div className="menu">
                          <ul className="menu-items">
                            <li>
                              <Link
                                className="menu-option"
                                to="/user/Editreview"
                              >
                                Edit
                              </Link>
                            </li>

                            <li>
                              <button className="menu-option delete">
                                Delete
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <p>{items.review}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="add-review">
          <div className="review-logo">
            <div className="text-image">G</div>
          </div>
          <div className="add-form">
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
            />
            <form>
              <div className="form-wrap">
                <div className="textarea-wrap">
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    className="textarea"
                    placeholder="Write a review"
                  ></textarea>
                </div>
                <div className="rate-service">
                  <h4>Rate the service:</h4>
                  <div className="rate-image">
                    <div className="rating-image">
                      <span
                        style={{ display: "inline-block", direction: "ltr" }}
                      >
                        <Rating
                          placeholderRating={userstar}
                          emptySymbol={<img src={emptyStar} className="icon" />}
                          placeholderSymbol={
                            <img src={fullStar} className="icon" />
                          }
                          fullSymbol={<img src={fullStar} className="icon" />}
                          onClick={ratingClickHandler}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <input
                type="submit"
                onClick={reviewSubmit}
                value="Add a Review"
                className="btn"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
