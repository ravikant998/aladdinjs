import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getcartitemsActions } from "../store/actions";
const RightcardDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let localData = useSelector(
    (state) => state.getlocalstoragedataReducers.localStoragedata
  );

  let getcartdata = useSelector((state) => state.gettocartReducers.getcartdata);

  if (!localStorage.getItem("loginData")) {
    getcartdata = localData;
  }

  //total sum price
  let sum = 0;
  getcartdata?.forEach((element) => {
    sum = sum + parseInt(element.price) * element.quantity;
  });

  const booknow = () => {
    if (!localStorage.getItem("loginData")) {
      navigate("/sign-in");
    }
  };
  useEffect(() => {
    getcartitemsActions(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="right-block">
        <div className="cart-heading">Total Cost</div>
        {getcartdata
          ? getcartdata.map((items, index) => {
              return (
                <ul className="added-items" key={index}>
                  <li>
                    <div className="added-item">
                      <div className="item-name">
                        <Link to="">{items.serviceTitle}</Link>
                      </div>
                     
                    </div>
                    <div className="item-price">
                      $ {items?.price * items?.quantity}
                    </div>
                  </li>
                </ul>
              );
            })
          : null}

        <div className="total-wrap">
          <div className="text-wrap">Total Price</div>
          <div className="amount-wrap">$ {sum}</div>
        </div>
        <div className="btn-wrap">
          <button type="submit" className="btn" onClick={booknow}>
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default RightcardDetails;
