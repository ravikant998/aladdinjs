import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userconverstionlistActions,
  userdeleteconverstioneActions,
  userReadAllConverstionAction,
} from "../store/actions";

const UserDeleteChat = ({ props }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };
  const markAsRead = (id) => {
    const payload = {
      conversationId: id,
    };
    userReadAllConverstionAction(dispatch, payload);
  };

  const deletemessage = (id) => {
    const payload = {
      conversationId: id,
    };
    userdeleteconverstioneActions(dispatch, payload);
    userconverstionlistActions(dispatch);
  };
  return (
    <div>
      <div className="menu-wrap">
        <button className="menu-btn" onClick={showMenuHandler}>
          <span className="btn-dot"></span>
          <span className="btn-dot"></span>
          <span className="btn-dot"></span>
        </button>
        {showMenu ? (
          <div className="menu">
            <ul className="menu-items">
              <li>
                <button
                  className="menu-option"
                  onClick={() => markAsRead(props._id)}
                >
                  Mark as read
                </button>
              </li>

              <li>
                <button
                  className="menu-option delete"
                  onClick={() => deletemessage(props._id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserDeleteChat;
