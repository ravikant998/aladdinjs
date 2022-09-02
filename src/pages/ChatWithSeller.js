import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  userconversationdetailsActions,
  usersendmessageAction,
} from "../store/actions";
import { userconversationnameActions } from "../store/actions";
const ChatWithSeller = () => {
  const { sellerId, serviceId } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [selleName, setSellerName] = useState();

  const userConversationName = useSelector(
    (state) => state.userconversationnameReducers?.userconversationname
  );
  // console.log("userConversationName>>>", userConversationName);
  const userConversation = useSelector(
    (state) => state.userconversationdetailsReducers?.userconversationdetails
  );
  // console.log("userConversation>>>", userConversation);

  useEffect(() => {
    if (sellerId) {
      userConversationName.forEach((ele) => {
        if (sellerId == ele.conversationId) {
          setSellerName(
            `${ele.sellerData[0].firstName} ${ele.sellerData[0].lastName}`
          );
        }
      });
    }
  }, [sellerId, userConversationName]);

  useEffect(() => {
    let payload = {
      conversationId: sellerId,
    };
    userconversationdetailsActions(dispatch, payload);
    userconversationnameActions(dispatch);
  }, [dispatch]);

  const userconverstiondetails = (conversationId) => {
    // console.log("conversationId>>>", conversationId);
    const payload = {
      conversationId: conversationId,
    };
    userconversationdetailsActions(dispatch, payload);
  };

  const handlerSendMessage = (e) => {
    e.preventDefault();
    let payload = {
      conversationId: sellerId,
    };

    let formDetails = new FormData();
    formDetails.append("message", message);
    formDetails.append("attachment", selectedFile);
    formDetails.append("conversationId", sellerId);
    usersendmessageAction(dispatch, formDetails);
    userconversationdetailsActions(dispatch, payload);
    setMessage("");
    setSelectedFile();
  };

  const imageChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  useEffect(() => {}, [userConversation]);
  // const userListClasses = showUserList ? "users-list active" : "users-list";
  return (
    <div>
      <section className="user-dialogue">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/user/dashboard">User Account</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/user/messages">User Messages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Particular
              </li>
            </ol>
          </nav>
          <div className="card dialogue-wrap">
            <div className="dialogue-left">
              <div className="users-header"></div>
              <div className="users-wrap ">
                <div
                  className="scroll-users"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "0px",
                      overflow: "scroll",
                      marginRight: "-15px",
                      marginBottom: "-15px",
                    }}
                  >
                    <ul className="users-list">
                      {userConversationName
                        ? userConversationName.map((items, index) => {
                            return (
                              <div
                                onClick={() =>
                                  userconverstiondetails(items.conversationId)
                                }
                                key={index}
                              >
                                <Link
                                  to={`/user/messages/opened/${items._id}`}
                                  // className="active"
                                >
                                  <li>
                                    {items.sellerData[0].firstName}{" "}
                                    {items.sellerData[0].lastName}
                                    <p
                                      style={{
                                        fontWeight: "400",
                                        color: "gray",
                                        fontSize: "13px",
                                        lineHeight: "1.5",
                                      }}
                                    >
                                      {items.sellerData[0].businessName}
                                    </p>
                                  </li>
                                </Link>
                              </div>
                            );
                          })
                        : null}
                    </ul>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      height: "6px",
                      right: "2px",
                      bottom: "2px",
                      left: "2px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        width: "0px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      width: "6px",
                      right: "2px",
                      bottom: "2px",
                      top: "2px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "block",
                        width: "100%",
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        height: "0px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dialogue-right">
              <div className="user-header">
                <div className="back-wrap">
                  <Link className="back-link" to="/user/messages">
                    Back
                  </Link>
                </div>

                <div className="name-wrap">
                  <span className="name">{selleName}</span>
                </div>
              </div>
              <div className="msg-box" id="scroll">
                <div className="top-wrap">
                  <div className="msg-tags">
                    <div className="tag-wrap">Wedding Services</div>
                    <div className="tag-wrap">Catering</div>
                    <div className="tag-wrap">
                      Catering Services for party functions
                    </div>
                  </div>
                  <div className="link-wrap">
                    <button className="page-link">
                      Go to Service Listing Page
                    </button>
                  </div>
                </div>
                <div
                  className="scroll-msg"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: "0px",
                      overflow: "scroll",
                      marginRight: "-15px",
                      marginBottom: "-15px",
                    }}
                  >
                    {userConversation
                      ? userConversation.map((userConItems, index) => {
                          // console.log("userConItems>>>", userConItems);
                          return (
                            <div className="msg-wrap sender" key={index}>
                              <div className="user-img no-img">
                                {userConItems.userData[0]?.firstName}
                              </div>
                              <div className="msg-details">
                                <div className="user-name">
                                  {userConItems?.userData[0]?.firstName}{" "}
                                  {userConItems?.userData[0]?.lastName}
                                </div>
                                <p>{userConItems?.message}</p>

                                {userConItems?.attachment.length > 0 ? (
                                  <p>
                                    <img
                                      src={
                                        userConItems?.MESSAGEATTACHMENTSHOWPATH +
                                        userConItems?.attachment
                                      }
                                      style={{
                                        height: "100px",
                                        width: "100px",
                                      }}
                                    />
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          );
                        })
                      : null}

                    {/* <div className="msg-wrap sender">
                      <div className="user-img no-img">
                        {userConversation?.userData?.firstName}
                      </div>
                      <div className="msg-details">
                        <div className="user-name">
                          {userConversation?.userData?.firstName}{" "}
                          {userConversation?.userData?.lastName}
                        </div>
                        <p>{userConversation?.message}</p>

                        {userConversation?.attachment?.length > 0 ? (
                          <p>
                            <img
                              src={
                                userConversation?.MESSAGEATTACHMENTSHOWPATH +
                                userConversation?.attachment[0]
                              }
                              style={{
                                height: "100px",
                                width: "100px",
                              }}
                            />
                          </p>
                        ) : null}
                      </div>
                    </div> */}

                    <div style={{ height: "1px" }}></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      height: "6px",
                      right: "2px",
                      bottom: "2px",
                      left: "2px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "block",
                        height: "100%",
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: " rgba(0, 0, 0, 0.2)",
                        width: "0px",
                      }}
                    ></div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      width: "6px",
                      right: "2px",
                      bottom: "2px",
                      top: "2px",
                      borderRadius: "3px",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        display: "block",
                        width: "100%",
                        cursor: "pointer",
                        borderRadius: "inherit",
                        backgroundColor: "rgba(0, 0, 0, 0.2)",
                        height: "0px",
                        transform: "translateY(175px)",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="msg-input">
                <form>
                  <div className="form-wrap" style={{ position: "relative" }}>
                    <div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        display: "inline-block",
                      }}
                    >
                      <div className="clip-wrap" style={{ cursor: "pointer" }}>
                        <button type="button" style={{ cursor: "pointer" }}>
                          <i
                            className="icon-clip"
                            style={{ cursor: "pointer" }}
                          ></i>
                        </button>
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={imageChangeHandler}
                        style={{
                          fontSize: "0px",
                          position: "absolute",
                          left: "0px",
                          top: "0px",
                          opacity: "0",
                          width: "100%",
                          height: "100%",
                          cursor: "pointer",
                        }}
                      />
                    </div>
                    <div className="input-wrap">
                      <input
                        className="form-control"
                        placeholder="Write a message..."
                        type="text"
                        // name="userMessage"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ height: "64px" }}
                      />
                    </div>
                    <div className="send-wrap">
                      <button type="submit" onClick={handlerSendMessage}>
                        <i className="icon-send"></i>
                      </button>
                    </div>
                    {selectedFile && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "100%",
                          left: "0",
                          height: "250px",
                          width: "250px",
                        }}
                      >
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Thumb"
                          style={{
                            height: "100px",
                            width: "100px",
                          }}
                        />
                        {/* <p>{URL.createObjectURL(selectedFile)}</p> */}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      ;
    </div>
  );
};

export default ChatWithSeller;
