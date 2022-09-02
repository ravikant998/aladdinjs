import {
  GET_CATEGORY_LIST,
  GET_CITY_NAME,
  GET_COUNTRY_NAME,
  GET_HOME_PAGE,
  GET_SERVICE,
  GET_STATE_NAME,
  GET_VALID_SERVICE_CATEGORY,
  GET_USER_PROFILE_DETAILS,
  GET_SERVICE_DETAILS,
  GET_WISHLIST_LIST,
  GET_ANOTHER_FROM_SAME_SELLER,
  GET_RECOMMENDED_SERVICE,
  GET_REVIEW_LIST,
  GET_DATA_LOCALSTORAGE,
  GET_TO_CART,
  UPDATE_USER_PROFILE_EDIT,
  USER_CONVERSATION_DETAILS,
  USER_CONVERSATION_NAME,
  USER_SEND_MESSAGE,
  USER_CONVERSATION_LIST,
} from "./actionTypes";
const initialState = {
  gethomepagedata: [],
  statename: [],
  // cityname: [],
  categorylistdata: [],
  getvalideservicecategorydata: [],
  getservicecategory: [],
  getuserprofiledetailsdata: [],
  getservicedetailsdata: [],
  anotherservicedata: [],
  recommendedservicedata: [],
  reviewlistdata: [],
  localStoragedata: [],
  updateuserprofile: [],
  userconversationdetails: [],
  userconversationname: [],
  usersendmessagedata: [],
  userconverstionlistdata: [],
};

// Hompege
export const gethompageReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_PAGE:
      return {
        ...state,
        gethomepagedata: action.payload,
      };
    default:
      return state;
  }
};

// Get country name
export const getcountrynameReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY_NAME:
      return {
        ...state,
        countryname: action.payload,
      };
    default:
      return state;
  }
};

// Get state name
export const getStatenameReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_STATE_NAME:
      return {
        ...state,
        statename: action.payload,
      };
    default:
      return state;
  }
};
// Get city name
export const getcitynmaeReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CITY_NAME:
      return {
        ...state,
        cityname: action.payload,
      };
    default:
      return state;
  }
};
// category list
export const getcategorylistReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORY_LIST:
      return {
        ...state,
        categorylistdata: action.payload,
      };
    default:
      return state;
  }
};
//Get valid service category
export const getvalidservicecategoryReducers = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_VALID_SERVICE_CATEGORY:
      return {
        ...state,
        getvalideservicecategorydata: action.payload,
      };
    default:
      return state;
  }
};

// get Service
export const getserviceReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE:
      return {
        ...state,
        getservicecategory: action.payload,
      };
    default:
      return state;
  }
};

// get user profile details

export const getuserprofiledetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILE_DETAILS:
      return {
        ...state,
        getuserprofiledetailsdata: action.payload,
      };
    default:
      return state;
  }
};

// get service details
export const getservicedetailsReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_SERVICE_DETAILS:
      return {
        ...state,
        getservicedetailsdata: action.payload,
      };
    default:
      return state;
  }
};
//get wishlist
export const getwishlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_WISHLIST_LIST:
      return {
        ...state,
        getwishlistdata: action.payload,
      };
    default:
      return state;
  }
};

export const anotherservicefromsamesellerReducers = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GET_ANOTHER_FROM_SAME_SELLER:
      return {
        ...state,
        anotherservicedata: action.payload,
      };
    default:
      return state;
  }
};

export const getrecommendedserviceReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECOMMENDED_SERVICE:
      return {
        ...state,
        recommendedservicedata: action.payload,
      };
    default:
      return state;
  }
};

export const getreviewlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW_LIST:
      return {
        ...state,
        reviewlistdata: action.payload,
      };
    default:
      return state;
  }
};
export const getlocalstoragedataReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_LOCALSTORAGE:
      return {
        ...state,
        localStoragedata: action.payload,
      };
    default:
      return state;
  }
};

//get to cart
export const gettocartReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TO_CART:
      return {
        ...state,
        getcartdata: action.payload,
      };
    default:
      return state;
  }
};

// Update user profile edit
export const userProfileEditReducers = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_PROFILE_EDIT:
      return {
        ...state,
        updateuserprofile: action.payload,
      };
    default:
      return state;
  }
};
// User conversation details
export const userconversationdetailsReducers = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case USER_CONVERSATION_DETAILS:
      return {
        ...state,
        userconversationdetails: action.payload,
      };
    default:
      return state;
  }
};
// User conversation name
export const userconversationnameReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_CONVERSATION_NAME:
      return {
        ...state,
        userconversationname: action.payload,
      };
    default:
      return state;
  }
};
//// User send message
// export const usersendmessageReducers = (state = initialState, action) => {
//   switch (action.type) {
//     case USER_SEND_MESSAGE:
//       return {
//         ...state,
//         usersendmessagedata: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// User conversation list
export const userconverstionlistReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_CONVERSATION_LIST:
      return {
        ...state,
        userconverstionlistdata: action.payload,
      };
    default:
      return state;
  }
};
