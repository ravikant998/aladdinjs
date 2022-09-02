import React, { useEffect, useState } from "react";
import imageFile from "../assets/images/wishlisticon.svg";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtowishlistActions } from "../store/actions";
import { rememovfromwishlistAction } from "../store/actions";

const Servicecard = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [isloader, setIsLoader] = useState(true);
  const getservice = useSelector(
    (state) => state.getserviceReducers?.getservicecategory
  );

  const addtowishlist = (serviceId) => {
    setIsLoader(true);
    let checkloginstatus = localStorage.getItem("loginData");
    const payload = {
      serviceId: serviceId,
    };

    if (checkloginstatus) {
      if (!isActive) {
        addtowishlistActions(dispatch, payload);
        setIsActive(true);
      } else {
        rememovfromwishlistAction(dispatch, payload);
        setIsActive(false);
      }
    } else {
      window.location.href = "/sign-in";
    }
  };

  return (
    <div>
      {getservice
        ? getservice?.data?.map((items, index) => {
            return (
              <div className="sub-category_wrapper" key={index}>
                <Link
                  to={`/service-detail/${items.serviceId}/${items.sellerData[0]._id}`}
                >
                  <div className="service-image">
                    <img src={items.path + items.serviceCover} alt="service" />
                  </div>
                </Link>
                <div className="service-card">
                  <div className="service-name">{items.title}</div>
                  <div className="provider-info">
                    {items?.sellerData?.[0].firstName}{" "}
                    {items?.sellerData?.[0].lastName}
                  </div>
                  <div className="seller-rating">
                    <div className="rating-wrap">
                      <div className="rating-image">
                        <span
                          style={{
                            display: "inlineblock",
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
                                width: "0%",
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
                                width: "0%",
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
                                width: "0%",
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
                                width: "0%",
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
                                width: "0%",
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
                        {items.totalReview} reviews
                      </div>
                    </div>
                  </div>
                  <div className="services-block">
                    <div className="price">
                      $
                      {items?.price ? (
                        items.price
                      ) : (
                        <h4>
                          {items.minPrice} {"-"} {items.maxPrice}
                        </h4>
                      )}
                    </div>

                    <button
                      className="wishlist-btn"
                      onClick={() => addtowishlist(items._id)}
                    >
                      <img src={imageFile} />
                      <i
                        className="icon-heart service"
                        //   {isActive ? "heart active" : "heart"}
                      >
                        {items.wishlist}
                      </i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Servicecard;
