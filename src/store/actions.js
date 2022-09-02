import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  // homepage,
  // sellersignup,
  // getcountryname,
  // getStatename,
  // getcityname,
  // getcategorylist,
  // getvalidservicecategory,
  // signup,
  // signin,
  // forgetloginpassword,
  Api,
  // getuserdetailsprofile,
  // getvaliduser,
  // getservicedatil,
} from "../api/api";
import {
  getservice,
  getservicedetails,
  addtowishlist,
  removefromwishlist,
  validuser,
  userprofiledetails,
  forgetpassword,
  usersignin,
  usersignup,
  categorylist,
  getcity,
  getState,
  getcountry,
  becomeaSellersignup,
  gethomepage,
  getservicecategory,
  getwishlistlist,
  addtocart,
  getcartdata,
  getanotherservicefromsameseller,
  getrecommendedservice,
  getreviewlist,
  removedatafromcart,
  updateCartQuantity,
  updateUserProfiledetails,
  customercontact,
  conversationWithSeller,
  userconversationdetails,
  userconversationname,
  usersendmessage,
  userconversationlist,
  userdeleteconverstion,
  userReadAllConverstion,
  sellerEnquiry,
  userAddReviewsRating,
} from "../api/endPoints";
import {
  GET_HOME_PAGE,
  SELLER_SIGN_UP,
  GET_COUNTRY_NAME,
  GET_STATE_NAME,
  GET_CITY_NAME,
  GET_CATEGORY_LIST,
  GET_VALID_SERVICE_CATEGORY,
  USER_SIGN_UP,
  USER_SIGN_IN,
  FORGET_PASSWORD,
  GET_SERVICE,
  GET_USER_PROFILE_DETAILS,
  GET_VALID_USER,
  GET_SERVICE_DETAILS,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  GET_WISHLIST_LIST,
  ADD_TO_cart,
  GET_TO_CART,
  CLEAN_ADD_TO_CART,
  GET_ANOTHER_FROM_SAME_SELLER,
  GET_RECOMMENDED_SERVICE,
  GET_REVIEW_LIST,
  AUTO_REFRESH_SIGNOUT,
  GET_DATA_LOCALSTORAGE,
  REMOVE_DATA_FROM_CART,
  UPDATE_CART_QUANTITY,
  UPDATE_USER_PROFILE_EDIT,
  CUSTOMER_SERVICE_CONTACT,
  CHAT_WITH_SELLER,
  USER_CONVERSATION_DETAILS,
  USER_CONVERSATION_NAME,
  USER_SEND_MESSAGE,
  USER_CONVERSATION_LIST,
  USER_CONVERSATION_DELETE,
  USER_READ_ALL_CONVERSATION,
  SELLER_ENQUIRY,
  ADD_USER_REVIEW_RATING,
} from "./reducers/actionTypes";

/// Homepage action
export const gethompageAction = (dispatch) => {
  Api.get(gethomepage).then((res) => {
    dispatch({
      type: GET_HOME_PAGE,
      payload: res.data.data,
    });
  });
};

//Seller Signup
export const getsellersignupAction = (dispatch, payload) => {
  Api.post(becomeaSellersignup, payload).then((res) => {
    dispatch({
      type: SELLER_SIGN_UP,
      payload: res.data,
    });
  });
};

// Get countrt name
export const getcountrynameAction = (dispatch) => {
  Api.get(getcountry).then((res) => {
    dispatch({
      type: GET_COUNTRY_NAME,
      payload: res.data,
    });
  });
};
// get state name
export const getstatenameActions = (dispatch, payload) => {
  Api.post(getState, payload).then((res) => {
    // console.log("res>>>", res);
    dispatch({
      type: GET_STATE_NAME,
      payload: res.data,
    });
  });
};

// get city name
export const getcitynameACtions = (dispatch, payload) => {
  Api.post(getcity, payload).then((res) => {
    dispatch({
      type: GET_CITY_NAME,
      payload: res.data,
    });
  });
};
// category list
export const categorylistActions = (dispatch) => {
  Api.get(categorylist).then((res) => {
    dispatch({
      type: GET_CATEGORY_LIST,
      payload: res.data.data,
    });
  });
};
// get valid service category
export const getvalidservicecategoryActions = (dispatch, id) => {
  Api.get(getservicecategory + "?categoryId=" + `${id}`).then((res) => {
    // console.log("res", res);
    dispatch({
      type: GET_VALID_SERVICE_CATEGORY,
      payload: res.data.data,
    });
  });
};
// user signup
export const usersignupActions = (dispatch, payload) => {
  Api.post(usersignup.payload).then((res) => {
    dispatch({
      type: USER_SIGN_UP,
      payload: res.data,
    });
  });
};

//user signin
export const usersigninActions = (dispatch, payload, navigate) => {
  Api.post(usersignin, payload).then((res) => {
    if (res.data.data.token) {
      localStorage.setItem("loginData", res.data.data.token);
    }
    dispatch({
      type: USER_SIGN_IN,
      payload: res.data.data.token,
    });
    if (res.data.data.token) {
      navigate("/user/dashbaord");
    }
  });
};

// login forget password
export const forgetpasswordActions = (dispatch) => {
  Api.post(forgetpassword).then((res) => {
    dispatch({
      type: FORGET_PASSWORD,
      payload: res.data,
    });
  });
};

// get service
export const getserviceActions = (dispatch, id, cid) => {
  Api.post(
    getservice + "?categoryId=" + `${id}` + "&subcategoryId=" + `${cid}`,

    { country: localStorage.getItem("country_name") }
  ).then((res) => {
    dispatch({
      type: GET_SERVICE,
      payload: res.data,
    });
  });
};

// user profile datails
export const getuserprofiledetailsActions = (dispatch) => {
  Api.get(userprofiledetails).then((res) => {
    dispatch({
      type: GET_USER_PROFILE_DETAILS,
      payload: res.data.data,
    });
  });
};

// check valid user
export const getvaliduserActions = (dispatch) => {
  Api.get(validuser).then((res) => {
    dispatch({
      type: GET_VALID_USER,
      payload: res.data,
    });
  });
};
// Get service details
export const getservicedetailsActions = (dispatch, id) => {
  Api.get(getservicedetails + `?serviceId=${id}`).then((res) => {
    dispatch({
      type: GET_SERVICE_DETAILS,
      payload: res.data.data,
    });
  });
};
// add to wishlist
export const addtowishlistActions = (dispatch, payload) => {
  Api.post(addtowishlist, payload).then((res) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: res.data,
    });
  });
};
//Remove wishlist
export const rememovfromwishlistAction = (dispatch, payload) => {
  Api.post(removefromwishlist, payload).then((res) => {
    dispatch({
      type: REMOVE_FROM_WISHLIST,
      payload: res.data,
    });
  });
};
// get wishlist
export const getwishlistActions = (dispatch) => {
  Api.get(getwishlistlist).then((res) => {
    dispatch({
      type: GET_WISHLIST_LIST,
      payload: res.data,
    });
  });
};
// add to cart
export const addtocartActions = (dispatch, payload, reqpayload) => {
  Api.post(addtocart, payload, reqpayload).then((res) => {
    // console.log("addd", res);
    dispatch({
      type: ADD_TO_cart,
      payload: res.data,
    });
  });
};

// get cart
export const getcartitemsActions = (dispatch, reqpayload) => {
  if (localStorage.getItem("loginData")) {
    Api.post(getcartdata, reqpayload).then((res) => {
      dispatch({
        type: GET_TO_CART,
        payload: res.data.data,
      });
    });
  }
};
// export const cleanAddToCart = (dispatch) => {
//   dispatch({
//     type: CLEAN_ADD_TO_CART,
//   });
// };

export const anotherservicefromsamesellerActions = (
  dispatch,
  serviceId,
  sellerId
) => {
  let country = localStorage.getItem("country_name");
  Api.get(
    getanotherservicefromsameseller +
      "?serviceId=" +
      `${serviceId}` +
      "&sellerId=" +
      `${sellerId}`
  ).then((res) => {
    // console.log("res>>?>>>>", res);
    dispatch({
      type: GET_ANOTHER_FROM_SAME_SELLER,
      payload: res.data,
    });
  });
};

//get recommended service
export const getrecommendedserviceActions = (
  dispatch,
  serviceId,
  catId,
  subcatId
) => {
  Api.get(
    getrecommendedservice +
      "?serviceId=" +
      `${serviceId}` +
      "&categoryId=" +
      `${catId}` +
      "&subcategoryId=" +
      `${subcatId}`
  ).then((res) => {
    dispatch({
      type: GET_RECOMMENDED_SERVICE,
      payload: res.data,
    });
  });
};

// get cart from localstorage
export const getdatalocalstorageAction = (dispatch) => {
  let cartData = JSON.parse(localStorage.getItem("ala_cart"));
  dispatch({
    type: GET_DATA_LOCALSTORAGE,
    payload: cartData,
  });
};

// get review list
export const getreviewlistAction = (dispatch, serviceId) => {
  Api.get(getreviewlist + "?serviceId=" + `${serviceId}`).then((res) => {
    dispatch({
      type: GET_REVIEW_LIST,
      payload: res.data,
    });
  });
};

//Revove items from cart
export const removeitemsfromcart = (dispatch, payload) => {
  Api.post(removedatafromcart, payload).then((res) => {
    dispatch({
      type: REMOVE_DATA_FROM_CART,
      payload: res.data,
    });
  });
};

// Update cart quantity
export const updateCartQuantityAction = (dispatch, payload) => {
  Api.post(updateCartQuantity, payload).then((res) => {
    dispatch({
      type: UPDATE_CART_QUANTITY,
      payload: res.data,
    });
  });
};

// Update user profile edit
export const userEditPrifileActions = (dispatch, payload, navigate) => {
  Api.post(updateUserProfiledetails, payload).then((res) => {
    toast.success("Address is added!");
    setTimeout(() => navigate("/user/profile"), 2000);

    // navigate("/user/profile");
    dispatch({
      type: UPDATE_USER_PROFILE_EDIT,
      payload: res.data,
    });
  });
};
// Customer service contact
export const customerconatactActions = (dispatch, formData, navigate) => {
  Api.post(customercontact, formData).then((res) => {
    toast.success("Succesful message sent!");
    setTimeout(() => navigate("/"), 2000);
    dispatch({
      type: CUSTOMER_SERVICE_CONTACT,
      payload: res.data,
    });
  });
};

// Chat With seller
export const chatwithsellerActions = (dispatch, payload, navigate) => {
  Api.post(conversationWithSeller, payload).then((res) => {
    navigate("/user/messages/opened" + "/" + `${payload.serviceId}`);
    dispatch({
      type: CHAT_WITH_SELLER,
      payload: res.data,
    });
  });
};

// User conversation details
export const userconversationdetailsActions = (dispatch, payload) => {
  Api.post(userconversationdetails, payload).then((res) => {
    dispatch({
      type: USER_CONVERSATION_DETAILS,
      payload: res.data.data,
    });
  });
};
// User conversation named
export const userconversationnameActions = (dispatch, payload) => {
  Api.post(userconversationname).then((res) => {
    dispatch({
      type: USER_CONVERSATION_NAME,
      payload: res.data.data,
    });
  });
};
// User send message
export const usersendmessageAction = (dispatch, formData) => {
  Api.post(usersendmessage, formData).then((res) => {
    dispatch({
      type: USER_SEND_MESSAGE,
      payload: res.data,
    });
  });
};
// User conversation list
export const userconverstionlistActions = (dispatch, payload) => {
  Api.post(userconversationlist, payload).then((res) => {
    dispatch({
      type: USER_CONVERSATION_LIST,
      payload: res.data,
    });
  });
};
// User message delete
export const userdeleteconverstioneActions = (dispatch, payload) => {
  Api.post(userdeleteconverstion, payload).then((res) => {
    dispatch({
      type: USER_CONVERSATION_DELETE,
      payload: res.data,
    });
  });
};

// User read all converstion
export const userReadAllConverstionAction = (dispatch, payload) => {
  Api.post(userReadAllConverstion, payload).then((res) => {
    dispatch({
      type: USER_READ_ALL_CONVERSATION,
      payload: res.data,
    });
  });
};

//  Seller enquiry
export const sellerEnquiryActions = (dispatch, payload, navigate) => {
  Api.post(sellerEnquiry, payload).then((res) => {
    toast.success(
      "Your enquiry has been submitted sucessfully. Admin will contact you soon!"
    );
    // setTimeout(() => navigate("become-seller/success"), 2000);
    dispatch({
      type: SELLER_ENQUIRY,
      payload: res.data,
    });
  });
};
// User add review rating
export const userAddReviewsRatingActions = (dispatch, payload) => {
  Api.post(userAddReviewsRating, payload).then((res) => {
    toast.success("Review submit successfull");
    dispatch({
      type: ADD_USER_REVIEW_RATING,
      payload: res.data,
    });
  });
};
