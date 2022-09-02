import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Ourcoreservices = () => {
  const gethomepagedata = useSelector(
    (state) => state.gethompageReducers?.gethomepagedata
  );
  // console.log("services", gethomepagedata);

  return (
    <div>
      <section className="core-services">
        <div className="container">
          <h2>Our Core Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="services-block">
            {gethomepagedata &&
              gethomepagedata.categoryData?.map((items, index) => {
                return (
                  <div className="service-wrap" key={index}>
                    <Link to="" key={index}>
                      <div className="img-wrap">
                        <img
                          src={
                            gethomepagedata.categoryImagePath +
                            items.categoryIcon
                          }
                          alt="service"
                        />
                      </div>
                      <div className="service-info">{items.name}</div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ourcoreservices;
