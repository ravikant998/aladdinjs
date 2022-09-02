import React from "react";
import { useSelector } from "react-redux";

const UserProfileInformation = () => {
  const userdetaislprofile = useSelector(
    (state) => state.getuserprofiledetailsReducers?.getuserprofiledetailsdata
  );
  // console.log("getuserprofiledetailsReducers", userdetaislprofile);

  const updateuserprofile = useSelector(
    (state) => state.userProfileEditReducers.updateuserprofile
  );
  // console.log("updateuserprofile", updateuserprofile);
  return (
    <div>
      {userdetaislprofile &&
        userdetaislprofile?.map((items, index) => {
          return (
            <div className="account-info" key={index}>
              <div className="card account-card">
                <div className="account-heading">Account Information</div>
                <span className="info-label">First Name:</span>
                <span className="info-wrap">{items.firstName}</span>
                <span className="info-label">Last Name:</span>
                <span className="info-wrap">{items.lastName}</span>
                <span className="info-label">Email:</span>
                <span className="info-wrap">{items.email}</span>
                <span className="info-label">Mobile:</span>
                <span className="info-wrap">{items.phone}</span>
              </div>
              <div className="card account-card">
                <div className="account-heading">Basic Information</div>
                <div className="profile-img">
                  <div className="img-wrap">
                    <img
                      src={updateuserprofile.path + userdetaislprofile.image}
                      alt="profile"
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default UserProfileInformation;
