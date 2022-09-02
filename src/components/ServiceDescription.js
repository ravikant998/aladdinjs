import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Rating from "react-rating";
import fullStar from "../assets/images/icon-fullstar.svg";
import emptyStar from "../assets/images/icon-star-empty.svg";
import {
  chatwithsellerActions,
  rememovfromwishlistAction,
} from "../store/actions";
import { getservicedetailsActions } from "../store/actions";
import { addtowishlistActions } from "../store/actions";
import { addtocartActions } from "../store/actions";
import OtherServices from "./OtherServices";
import RecommendedServices from "./RecommendedServices";
import { anotherservicefromsamesellerActions } from "../store/actions";
import { getrecommendedserviceActions } from "../store/actions";
import { getcartitemsActions } from "../store/actions";
import Reviews from "./Reviews";

const ServiceDescription = () => {
  const navigate = useNavigate();
  const { serviceId, sellerId } = useParams();
  const dispatch = useDispatch();

  const servicedetails = useSelector(
    (state) => state.getservicedetailsReducers?.getservicedetailsdata
  );

  const [isActive, setIsActive] = useState();
  const [cartdata, setCartdata] = useState();
  let catId = servicedetails.categoryId;
  let subCatId = servicedetails.subcategoryId;

  useEffect(() => {
    getservicedetailsActions(dispatch, serviceId);
    anotherservicefromsamesellerActions(dispatch, serviceId, sellerId);

    if (catId && subCatId) {
      getrecommendedserviceActions(dispatch, serviceId, catId, subCatId);
    }
  }, [dispatch, serviceId, catId, subCatId]);

  // Add to wishliast
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

  // add to cart
  const handleaddToCart = (id, servicedetails) => {
    if (localStorage.getItem("loginData")) {
      const payload = { serviceId: id, quantity: 1 };
      const reqpayload = {
        country: localStorage.getItem("country_name"),
      };
      addtocartActions(dispatch, payload);
      getcartitemsActions(dispatch, reqpayload);
      setCartdata(true);
    } else {
      let payload1 = {
        serviceTitle: servicedetails.title,
        serviceCover: servicedetails.serviceCover,
        path: servicedetails.path,
        categoryName: servicedetails.categoryName,
        serviceId: servicedetails._id,
        price: servicedetails.price,
        sellerData: servicedetails.sellerData,
        quantity: 1,
        _id: servicedetails._id,
      };
      if (!cartdata) {
        let cart = JSON.parse(localStorage.getItem("ala_cart"));
        if (!cart) {
          localStorage.setItem("ala_cart", JSON.stringify([payload1]));
        } else {
          localStorage.setItem("ala_cart", JSON.stringify([...cart, payload1]));
        }
        setCartdata(true);
      }
    }
  };

  useEffect(() => {
    let addCartData = JSON.parse(localStorage.getItem("ala_cart"));
    addCartData?.forEach((ele) => {
      if (serviceId == ele.serviceId) {
        setCartdata(true);
      }
    });
  }, [cartdata]);

  // chat with seller

  const ChatWithSellers = (id) => {
    let payload = {
      serviceId: id,
    };
    console.log("payload>>>", payload);
    chatwithsellerActions(dispatch, payload, navigate);
  };

  return (
    <div>
      <div className="tab-content">
        <div
          id="uncontrolled-tab-example-tabpane-description"
          aria-labelledby="uncontrolled-tab-example-tab-description"
          className="tab-pane active"
        >
          <div className="description-wrap listing">
            <div className="image-block">
              <div className="image-wrap">
                <img
                  src={servicedetails.path + servicedetails.serviceCover}
                  alt="profile-image"
                />
              </div>
              {servicedetails.price ? (
                cartdata ? (
                  <Link to="/user/cart" className="btn">
                    Go to cart
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() =>
                      handleaddToCart(servicedetails._id, servicedetails)
                    }
                  >
                    Add to cart
                  </button>
                )
              ) : null}

              <button
                className="white-btn"
                onClick={() => ChatWithSellers(servicedetails._id)}
              >
                Chat with Seller
              </button>
            </div>

            <div className="seller-details">
              <div className="details-head">
                <div className="main-head">
                  <div className="seller-btns">
                    <button className="btn-wrap">
                      <i
                        className="icon-heart"
                        onClick={() =>
                          addWishList(servicedetails.data.serviceId)
                        }
                      ></i>
                      Add to Wishlist
                    </button>
                    <div>
                      <button className="btn-wrap">
                        <i className="icon-share"></i>Share This Service
                      </button>
                    </div>
                  </div>

                  <h2>{servicedetails.title}</h2>
                  <h3>{servicedetails.businessName}</h3>
                </div>
                <div className="pricing-wrap">
                  $
                  {servicedetails.price ? (
                    servicedetails.price
                  ) : (
                    <h4>
                      {servicedetails.minPrice} {"-"}
                      {servicedetails.maxPrice}
                    </h4>
                  )}
                  <span className="timer"></span>
                </div>
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
                      <Rating
                        readonly
                        placeholderRating={
                          servicedetails?.averageRating
                            ? servicedetails?.averageRating
                            : 0
                        }
                        emptySymbol={<img src={emptyStar} className="icon" />}
                        placeholderSymbol={
                          <img src={fullStar} className="icon" />
                        }
                        fullSymbol={<img src={fullStar} className="icon" />}
                      />
                    </span>
                  </div>
                  <div className="rating-number">
                    {servicedetails.totalReview} reviews
                  </div>
                </div>
              </div>
              <div className="details-wrap">
                <div className="detail-list">
                  <h3>Address:</h3>
                  <ul className="details-values">
                    <li>
                      <div className="detail-text">
                        {servicedetails.countryName} {servicedetails.stateName}
                      </div>
                    </li>
                    <li>
                      <div className="detail-text">
                        {servicedetails.addressLine1}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail-list">
                  <h3>Days Opened</h3>
                  <ul className="details-values">
                    <li>
                      <div className="detail-text">
                        <span className="day-name">Monday-Wednesday</span>
                        <span className="timing">9:00 a.m. — 6:00 p.m.</span>
                      </div>
                    </li>
                    <li>
                      <div className="detail-text">
                        <span className="day-name">Thursday-Sunday</span>
                        <span className="timing">Closed</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <p>{servicedetails.description}</p>
            </div>
          </div>
        </div>
        <OtherServices />
        <RecommendedServices />
        <Reviews />
      </div>
    </div>
  );
};

export default ServiceDescription;
