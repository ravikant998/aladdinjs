import axios from "axios";
// import {
//   gethomepage,
//   becomeaSellersignup,
//   getcountry,
//   getState,
//   getcity,
//   categorylist,
//   getservicecategory,
//   usersignup,
//   usersignin,
//   forgetpassword,
//   userprofiledetails,
//   validuser,
// } from "./endPoints";
export const Api = axios.create({
  baseURL:
    process.env.REACT_APP_BASE_URL + process.env.REACT_APP_BASE_URL_PREFIX,
  headers: {
    Authorization: localStorage.getItem("loginData"),
    country: JSON.parse(localStorage.getItem("country_name"))?.name,
  },
});
