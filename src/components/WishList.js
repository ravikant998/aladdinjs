import React from "react";
import { useSelector } from "react-redux";
import Wishlistcardpage from "../pages/user/Wishlistcardpage";
const WishList = () => {
  const data = useSelector(
    (state) => state.getwishlistReducers?.getwishlistdata
  );
  //   console.log("data>>>", data);

  return (
    <>
      <>
        <section className="sub-category-block search-section wishlist-section">
          <div className="">
            <div className="Toastify"></div>
          </div>
          <div className="container">
            <div className="right-block">
              <h1>Wishlist</h1>
              <div
                className="wishList-Box"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {data.length > 0 ? (
                  data.map((items, index) => {
                    return (
                      <div key={index}>
                        <Wishlistcardpage data={items} />
                      </div>
                    );
                  })
                ) : (
                  <div>No Wishlist</div>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default WishList;
