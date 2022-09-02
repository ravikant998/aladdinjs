import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Servicecard from "../../components/Servicecard";
import { categorylistActions } from "../../store/actions";
import { getserviceActions } from "../../store/actions";
import { getvalidservicecategoryActions } from "../../store/actions";

const Filterrightsidebar = () => {
  const { categorySlug, subCatSlug } = useParams();

  const dispatch = useDispatch();

  const [catid, setCatid] = useState();

  const [subcatid, setSubcatid] = useState();

  const [subcatname, setSubcatname] = useState();

  const categorylistdata = useSelector(
    (state) => state.getcategorylistReducers?.categorylistdata
  );

  const getvalidsubcategory = useSelector(
    (state) =>
      state.getvalidservicecategoryReducers?.getvalideservicecategorydata
  );

  // const getservice = useSelector(
  //   (state) => state.getserviceReducers?.getservicecategory
  // );

  useEffect(() => {
    categorylistActions(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!catid) {
      categorylistdata.forEach((element) => {
        if (categorySlug == element.slug) {
          setCatid(element._id);
        }
      });
    }
  }, [categorylistdata]);

  useEffect(() => {
    if (catid) {
      getvalidservicecategoryActions(dispatch, catid);
    }
  }, [dispatch, catid]);

  if (!subcatid) {
    getvalidsubcategory?.forEach((elements) => {
      if (subCatSlug == elements.slug) {
        setSubcatid(elements._id);
        setSubcatname(elements.name);
      }
    });
  }

  useEffect(() => {
    if (catid && subcatid) {
      getserviceActions(dispatch, catid, subcatid);
    }
  }, [dispatch, catid, subcatid]);

  return (
    <div>
      <div
        className="right-block"
        style={{ width: "150%", padding: "0 60px 0 26px" }}
      >
        <div className="head-wrap">
          <h1>{subcatname}</h1>
          <div className="sort-select">
            <label>Sort by</label>
            <div className="sort-wrap">
              <div className="react-select-container css-b62m3t-container">
                <span
                  id="react-select-2-live-region"
                  className="css-7pg0cj-a11yText"
                ></span>
                <span
                  aria-live="polite"
                  aria-atomic="false"
                  aria-relevant="additions text"
                  className="css-7pg0cj-a11yText"
                ></span>
                <div className="react-select__control css-1s2u09g-control">
                  <div className="react-select__value-container css-1d8n9bt">
                    <div
                      className="react-select__placeholder css-14el2xx-placeholder"
                      id="react-select-2-placeholder"
                    >
                      Select...
                    </div>
                    <div
                      className="react-select__input-container css-ackcql"
                      data-value=""
                    >
                      <input
                        className="react-select__input"
                        autoCapitalize="none"
                        autoComplete="off"
                        autoCorrect="off"
                        id="react-select-2-input"
                        spellCheck="false"
                        tabIndex="0"
                        type="text"
                        aria-autocomplete="list"
                        aria-expanded="false"
                        aria-haspopup="true"
                        aria-controls="react-select-2-listbox"
                        aria-owns="react-select-2-listbox"
                        role="combobox"
                        aria-describedby="react-select-2-placeholder"
                        defaultValue=""
                        style={{
                          color: "inherit",
                          background: "0px center",
                          opacity: "1",
                          width: "100%",
                          gridArea: "1 / 2 / auto / auto",
                          font: "inherit",
                          minWidth: "2px",
                          border: "0px",
                          margin: "0px",
                          outline: "0px",
                          padding: "0px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="react-select__indicators css-1wy0on6">
                    <span className="react-select__indicator-separator css-1okebmr-indicatorSeparator">hhhh</span>
                    <div
                      className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer"
                      aria-hidden="true"
                    >
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        className="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Servicecard />
      </div>
    </div>
  );
};

export default Filterrightsidebar;
