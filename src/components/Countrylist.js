import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcountrynameAction } from "../store/actions";
const Countrylist = () => {
  const dispatch = useDispatch();
  const [country, setCountry] = useState(false);

  // country name
  const countryname = useSelector(
    (state) => state.getcountrynameReducers.countryname
  );
  // console.log("country name", countryname);

  useEffect(() => {
    getcountrynameAction(dispatch);
  }, [dispatch]);

  const selectcountryHandler = (e) => {
    setCountry(e.target.value);
  };
  return (
    <div>
      <div className="country-select">
        <div className="custom-select">
          <ul className="custom-select_options custom-scroll">
            {countryname
              ? countryname.data?.map((item, index) => {
                  return (
                    <li
                      className="custom-select_option"
                      value={country}
                      onChange={selectcountryHandler}
                      key={index}
                    >
                      {item.name}
                    </li>
                  );
                })
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Countrylist;
