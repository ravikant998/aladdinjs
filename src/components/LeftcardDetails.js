import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getdatalocalstorageAction,
  removeitemsfromcart,
} from "../store/actions";
import { getcartitemsActions } from "../store/actions";
import { updateCartQuantityAction } from "../store/actions";

const LeftcardDetails = (props) => {
  let data = props.dataList;
  const dispatch = useDispatch();
  const [cartQ, setCartQ] = useState(data.quantity);
  const [showPrice, setShowPrice] = useState(false);
  const [remove, setRemove] = useState();

  let localData = useSelector(
    (state) => state.getlocalstoragedataReducers.localStoragedata
  );
  const decQuantity = (id) => {
    if (cartQ > 1) {
      if (localStorage.getItem("loginData")) {
        let x = cartQ;
        setCartQ(cartQ - 1);
        let payload = {
          cartId: id,
          quantity: --x,
        };
        updateCartQuantityAction(dispatch, payload);
      } else {
        let localStoragedata = JSON.parse(localStorage.getItem("ala_cart"));
        let indexData = localStoragedata.findIndex(
          (data) => data.serviceId == id
        );

        localStoragedata[indexData]["quantity"] = cartQ - 1;
        localStorage.setItem("ala_cart", JSON.stringify(localStoragedata));
      }
    }
  };
  const incQuantity = (id) => {
    if (localStorage.getItem("loginData")) {
      let x = cartQ;
      setCartQ(cartQ + 1);
      let payload = {
        cartId: id,
        quantity: ++x,
      };
      updateCartQuantityAction(dispatch, payload);
    } 
    // else {
    //   let localStoragedata = JSON.parse(localStorage.getItem("ala_cart"));
    //   let indexData = localStoragedata.findIndex(
    //     (data) => data.serviceId == id
    //   );

    //   localStoragedata[indexData]["quantity"] = cartQ + 1;
    //   localStorage.setItem("ala_cart", JSON.stringify(localStoragedata));
    //   getdatalocalstorageAction(dispatch);
    // }
  };

  const removecart = (data) => {
    setRemove(data);
    if (localStorage.getItem("loginData")) {
      const payload = {
        cartId: data,
      };
      removeitemsfromcart(dispatch, payload);
      getcartitemsActions(dispatch);
    } else {
      let cart = JSON.parse(localStorage.getItem("ala_cart"));
      let a = 0;
      cart.forEach((element) => {
        if (element.id == data) {
          cart.splice(a, 1);
        }
        a = a + 1;
      });
      localStorage.setItem("ala_cart", JSON.stringify(cart));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getcartitemsActions(dispatch);
    }, 100);
  }, [remove, cartQ, localData]);

  const handlershowprice = (serviceId) => {
    setShowPrice(true);
  };

  return (
    <>
      <div className="left-block">
        <div className="cart-item">
          <div className="checkbox-wrap">
            <div
              className="form-check"
              onClick={() => handlershowprice(data.serviceId)}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="cartBox"
                value="6290b6774cac8dba60c01190"
              />
            </div>
          </div>

          <div className="item-img mb-2 mb-md-0">
            <img src={data.path + data.serviceCover} alt="item" />
          </div>
          <div className="item-right">
            <div className="item-info">
              <div className="item-name">
                <a href="/user/cart">{data.serviceTitle}</a>
              </div>
              <div className="item-provider">
                {data.sellerData[0].firstName}
                {data.sellerData[0].lastName}
              </div>
              <div className="remove-btn" onClick={() => removecart(data._id)}>
                <button type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      d="M4.625 1.87354H4.5C4.56875 1.87354 4.625 1.81729 4.625 1.74854V1.87354H9.375V1.74854C9.375 1.81729 9.43125 1.87354 9.5 1.87354H9.375V2.99854H10.5V1.74854C10.5 1.19697 10.0516 0.748535 9.5 0.748535H4.5C3.94844 0.748535 3.5 1.19697 3.5 1.74854V2.99854H4.625V1.87354ZM12.5 2.99854H1.5C1.22344 2.99854 1 3.22197 1 3.49854V3.99854C1 4.06729 1.05625 4.12354 1.125 4.12354H2.06875L2.45469 12.2954C2.47969 12.8282 2.92031 13.2485 3.45313 13.2485H10.5469C11.0813 13.2485 11.5203 12.8298 11.5453 12.2954L11.9313 4.12354H12.875C12.9438 4.12354 13 4.06729 13 3.99854V3.49854C13 3.22197 12.7766 2.99854 12.5 2.99854ZM10.4266 12.1235H3.57344L3.19531 4.12354H10.8047L10.4266 12.1235Z"
                      fill="#9A9FA5"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="item-price">
              <div className="price-wrap">
                $ {data.price}
                </div>
              <div className="quantity-wrap">
                <div
                  className="quantity-decrease"
                  onClick={() => decQuantity(data._id)}
                >
                  <button type="button">-</button>
                </div>
                <div className="quantity">{cartQ}</div>
                <div
                  className="quantity-increase"
                  onClick={() => incQuantity(data._id)}
                >
                  <button type="button">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftcardDetails;
