import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftcardDetails from "../../components/LeftcardDetails";
import RightcardDetails from "../../components/RightcardDetails";
import { getdatalocalstorageAction } from "../../store/actions";
import { getcartitemsActions } from "../../store/actions";
const CartDetails = () => {
  const dispatch = useDispatch();
  let getcartdata = useSelector((state) => state.gettocartReducers.getcartdata);

  let localData = useSelector(
    (state) => state.getlocalstoragedataReducers.localStoragedata
  );

  if (!localStorage.getItem("loginData")) {
    getcartdata = localData;
  }

  useEffect(() => {
    getcartitemsActions(dispatch);
  }, [dispatch]);
  useEffect(() => {
    getdatalocalstorageAction(dispatch);
  }, [dispatch]);
  return (
    <>
      {getcartdata?.length ? (
        <section className="cart">
          <div className="">
            <div className="Toastify"></div>
          </div>
          <div className="container">
            <h1>Cart </h1>

            <form>
              <div className="select-all">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="selectAll"
                  />
                  <label className="form-check-label">Select All</label>
                </div>
              </div>
              <div className="cart-wrap">
                {getcartdata &&
                  getcartdata?.map((items, index) => {
                    return <LeftcardDetails dataList={items} key={index} />;
                  })}

                <RightcardDetails />
              </div>
            </form>
          </div>
        </section>
      ) : (
        <section className="cart">
          <div className="">
            <div className="Toastify"></div>
          </div>
          <div className="container">
            <form>
              <div className="cart-wrap">
                <div className="left-block"></div>
                <div className="image-wrap">
                  <img src="/static/media/emptyCart.d82015371d42e9b8f96a.png" />
                </div>
              </div>
              <h1>Your cart is empty!</h1>
            </form>
          </div>
        </section>
      )}
    </>
  );
};

export default CartDetails;
