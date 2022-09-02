import React from "react";
import { ToastContainer } from "react-toastify";
const UserEditReview = () => {
  return (
    <div>
      <h1>User edit review</h1>
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
          {/* <form>
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
                    <span style={{ display: "inline-block", direction: "ltr" }}>
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
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default UserEditReview;
