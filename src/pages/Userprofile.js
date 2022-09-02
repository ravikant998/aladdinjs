import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import UserProfileInformation from "../components/UserProfileInformation";
import { getuserprofiledetailsActions } from "../store/actions";

const Userprofile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getuserprofiledetailsActions(dispatch);
  }, [dispatch]);
  return (
    <div>
      <section className="user-profile">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a role="button" tabIndex="0">
                  User Account
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Profile
              </li>
            </ol>
          </nav>
          <div className="section-head">
            <div className="heading-wrap">
              <h1>User Profile</h1>
            </div>
            <div className="btn-wrap">
              <Link className="btn" to="/user/profile/edit">
                Edit
              </Link>
            </div>
          </div>

          <UserProfileInformation />
        </div>
      </section>
    </div>
  );
};

export default Userprofile;
