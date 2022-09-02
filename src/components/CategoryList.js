import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getvalidservicecategoryActions } from "../store/actions";

const CategoryList = () => {
  const dispatch = useDispatch();
  const categorylistdata = useSelector(
    (state) => state.getcategorylistReducers?.categorylistdata
  );

  const getcategoryservice = (id) => {
    // alert(id);
    getvalidservicecategoryActions(dispatch, id);
    window.location.reload(false);
  };

  return (
    <div>
      <div className="navigation active">
        <div className="menu-wrapper">
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              height: "100%",
              maxWidth: "360px",
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
              <ul className="category-list">
                {categorylistdata
                  ? categorylistdata?.map((items, index) => {
                      return (
                        <li
                          key={index}
                          onClick={() => getcategoryservice(items._id)}
                        >
                          <Link to={`/category/${items.slug}`}>
                            {items.name}
                          </Link>
                        </li>
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
                borderRradius: "3px",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryList;
