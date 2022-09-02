import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import imageFile from "../assets/images/wishlisticon.svg";
import { addtowishlistActions } from "../store/actions";
import { rememovfromwishlistAction } from "../store/actions";
const RecommandedServiceCard = ({ data }) => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState();
  const addWishList = (id) => {
    let checkloginstatus = localStorage.getItem("loginData");

    const payload = {
      serviceId: id,
    };
    if (checkloginstatus) {
      if (!isActive) {
        addtowishlistActions(dispatch, payload);
        setIsActive(true);
      } else {
        rememovfromwishlistAction(dispatch, payload);
        setIsActive(false);
      }
    }
  };
  return (
    <div>
      <div>
        <div className="slide">
          <div className="card-wrap">
            <Link
              className="service-block"
              to={`/service-detail/${data.serviceId}/${data.sellerData[0]._id}`}
            >
              <div className="service-image">
                <img src={data.path + data.serviceCover} alt="service-image" />
              </div>
            </Link>
            <div className="service-card">
              <div className="service-name">{data.title}</div>
              <div className="location">
                {data.addressData[0].countryName}
                {data.addressData[0].stateName}
              </div>
              <div className="address">
                {data.addressData[0].addressLine1}
                {data.addressData[0].addressLine2}
              </div>
              <div className="seller-rating">
                <div className="rating-wrap">
                  <div className="rating-image">
                    <span
                      style={{
                        display: "inline-block",
                        direction: "ltr",
                      }}
                    >
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inlineblock",
                          position: "relative",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>
                          <img
                            src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg"
                            className="icon"
                          />
                        </span>
                        <span
                          style={{
                            display: "inlineblock",
                            position: "absolute",
                            overflow: "hidden",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                          }}
                        >
                          <img
                            src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                            className="icon"
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inlineblock",
                          position: "relative",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>
                          <img
                            src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg"
                            className="icon"
                          />
                        </span>
                        <span
                          style={{
                            display: "inlineblock",
                            position: "absolute",
                            overflow: "hidden",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                          }}
                        >
                          <img
                            src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                            className="icon"
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inlineblock",
                          position: "relative",
                        }}
                      >
                        <span style={{ visibility: "hidden" }}>
                          <img
                            src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg"
                            className="icon"
                          />
                        </span>
                        <span
                          style={{
                            display: "inlineblock",
                            position: "absolute",
                            overflow: "hidden",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                          }}
                        >
                          <img
                            src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                            className="icon"
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inlineblock",
                          position: "relative",
                        }}
                      >
                        <span>
                          <img
                            src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg"
                            className="icon"
                          />
                        </span>
                        <span
                          style={{
                            display: "inlineblock",
                            position: "absolute",
                            overflow: "hidden",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                          }}
                        >
                          <img
                            src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                            className="icon"
                          />
                        </span>
                      </span>
                      <span
                        style={{
                          cursor: "inherit",
                          display: "inlineblock",
                          position: "relative",
                        }}
                      >
                        <span>
                          <img
                            src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg"
                            className="icon"
                          />
                        </span>
                        <span
                          style={{
                            display: "inlineblock",
                            position: "absolute",
                            overflow: "hidden",
                            top: "0px",
                            left: "0px",
                            width: "100%",
                          }}
                        >
                          <img
                            src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg"
                            className="icon"
                          />
                        </span>
                      </span>
                    </span>
                  </div>
                  <div className="rating-number">
                    {data.totalReview} reviews
                  </div>
                </div>
              </div>
              <div className="services-block">
                <div className="price">
                  $
                  {data.price ? (
                    data.price
                  ) : (
                    <h4>
                      {data.minPrice} {"-"}
                      {data.maxPrice}
                    </h4>
                  )}
                </div>
                <button
                  className="wishlist-btn"
                  onClick={() => addWishList(data._id)}
                >
                  <i className="icon-heart">
                    <img src={imageFile} />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecommandedServiceCard;
