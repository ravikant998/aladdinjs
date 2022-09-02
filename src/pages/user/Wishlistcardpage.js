import React, { useEffect, useState } from "react";
import imageFile from "../../assets/images/wishlisticon.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WishList from "../../components/WishList";

import { rememovfromwishlistAction } from "../../store/actions";
import { getwishlistActions } from "../../store/actions";
const Wishlistcardpage = () => {
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState();

  const getwishlistdata = useSelector(
    (state) => state.getwishlistReducers?.getwishlistdata
  );
  console.log("getwishlistdata>>>", getwishlistdata);
  useEffect(() => {
    getwishlistActions(dispatch);
  }, [dispatch]);

  const removeWishList = (serviceId) => {
    const payload = {
      serviceId: serviceId,
    };
    rememovfromwishlistAction(dispatch, payload);
    getwishlistActions(dispatch);
  };
  return (
    <>
      {getwishlistdata
        ? getwishlistdata.data?.map((items, index) => {
            return (
              <div className="sub-category_wrapper" key={index}>
                <div className="service-block">
                  <Link
                    to=""
                    // {`/service-detail/${items.serviceId}/${items.sellerData[0]._id}`}
                  >
                    <div className="service-image">
                      <img
                        src={items.path + items.serviceCover}
                        alt="service"
                        style={{
                          width: "200px",
                          height: "200px",
                        }}
                      />
                    </div>
                  </Link>

                  <div className="service-card">
                    <div className="service-name">{items.title}</div>
                    <div className="provider-info">
                      {items.sellerData[0]?.firstName}
                      {items.sellerData[0]?.lastName}
                    </div>
                    <div className="seller-rating">
                      <div className="rating-wrap">
                        <div className="rating-image">
                          {/* <img src="" alt="rating" />  */}
                          {items.averageRating}
                        </div>
                        <div className="rating-number">
                          {items.totalReview} reviews
                        </div>
                      </div>
                    </div>
                    <div className="services-block">
                      <div className="price">
                        $
                        {items.price ? (
                          items.price
                        ) : (
                          <h4>
                            {items.minPrice} {"-"}
                            {items.maxPrice}
                          </h4>
                        )}
                      </div>
                      <button
                        className="wishlist-btn"
                        onClick={() => removeWishList(items.serviceId)}
                      >
                        <img src={imageFile} />
                        <i className="icon-heart add"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        : null}
    </>
  );
};

export default Wishlistcardpage;
