import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserDeleteChat from "../../components/UserDeleteChat";
import { userconverstionlistActions } from "../../store/actions";

const UserMessage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [active, setActive] = useState("active");
  const [activeUnread, setActiveUnread] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [allreadmsg, setAllreadmsg] = useState();
  const [unreadmsg, setUnreadmsg] = useState();
  const usermessagelist = useSelector(
    (state) => state.userconverstionlistReducers.userconverstionlistdata
  );

  useEffect(() => {
    const payload = {
      limit: 10,
      pageno: 1,
    };
    userconverstionlistActions(dispatch, payload);
  }, [dispatch]);

  const handleAllChats = (e) => {
    e.preventDefault();
    setActiveUnread("");
    setActive("active");
    let payload = {
      limit: 10,
      pageno: 1,
    };
    userconverstionlistActions(dispatch, payload);
  };

  const handleUnreadChats = (e) => {
    e.preventDefault();
    setActiveUnread("active");
    setActive("");
    let payload = {
      limit: 10,
      pageno: 1,
      unreadList: true,
    };
    userconverstionlistActions(dispatch, payload);
  };

  const handlerInputChange = (e) => {
    e.preventDefault();
    if (searchVal !== "") {
      userconverstionlistActions(dispatch, { searchMessage: searchVal });
      setActiveUnread("");
      setActive("active");
    } else {
      userconverstionlistActions(dispatch, { searchMessage: searchVal });
      setActiveUnread("");
      setActive("active");
    }
  };

  const handleMessage = (e, item) => {
    e.preventDefault();
    let payload = {
      conversationId: item._id,
    };
    userconverstionlistActions(dispatch, payload);
    setTimeout(() => navigate("/user/messages/opened/" + item._id), 100);
  };

  return (
    <div>
      <section className="edit-information user-messages">
        <div className="">
          <div className="Toastify"></div>
        </div>

        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/user/dashboard">User Account</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                User Messages
              </li>
            </ol>
          </nav>
          <div className="section-header">
            <div className="header-left">
              <h1>User Messages</h1>
            </div>
          </div>
          <div className="messages-wrap">
            <div className="messages-head">
              <form>
                <div className="form-wrap">
                  <button
                    id="1"
                    className={`msg-type ${active}`}
                    onClick={(e) => handleAllChats(e)}
                  >
                    All Chats
                  </button>
                  <button
                    id="2"
                    className={`msg-type unread ${activeUnread}`}
                    onClick={(e) => handleUnreadChats(e)}
                  >
                    Unread Messages
                  </button>
                  <input
                    className="search-input flex-grow-1"
                    type="text"
                    placeholder="Search for a message"
                    // onChange={(e) => setSearchVal(e.target.value)}
                    // value={searchVal}
                  />
                  <button
                    type="submit"
                    className="search-btn"
                    onClick={handlerInputChange}
                  >
                    <i className="icon-magnifier"></i>
                  </button>
                </div>
              </form>
            </div>

            <div className="messages-collector">
              {usermessagelist?.data?.map((item, index) => (
                <div
                  className={
                    item.unreadConversationDetailDataCount >= 1
                      ? "message-wrap"
                      : "message-wrap unreaded-messages"
                  }
                  key={index}
                >
                  <Link
                    to="#"
                    onClick={(e) => handleMessage(e, item)}
                    className="msg-box"
                  >
                    <div className="msg-pic online">
                      {item?.sellerData?.[0]?.firstName[0]}
                    </div>
                    <div className="msg-data">
                      <div className="text-data">
                        <ul className="tests-wrap">
                          <li>COVID-19 Tests</li>
                          <li>Anti-Body Tests</li>
                          <li>COVID-19 Test Centre</li>
                        </ul>
                        <div className="msg-name">
                          {item?.sellerData?.[0]?.firstName}
                        </div>
                        <p>{item?.lastConversationDetailData?.message}</p>
                      </div>
                      <div className="msg-edit">
                        {item.unreadConversationDetailDataCount >= 1 ? (
                          <div className="msg-number">
                            {item.unreadConversationDetailDataCount}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </Link>

                  <UserDeleteChat props={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserMessage;
