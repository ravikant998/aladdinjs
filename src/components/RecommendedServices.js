import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import RecommandedServiceCard from "./RecommandedServiceCard";

const RecommendedServices = () => {
  const recommendedservicedata = useSelector(
    (state) => state.getrecommendedserviceReducers?.recommendedservicedata
  );

  const settings = {
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="simple-sliders recommend">
        <div className="slider-heading">
          <h2>Recommended Services</h2>
        </div>
        <div className="slider-wrap">
          <Slider {...settings}>
            {recommendedservicedata &&
              recommendedservicedata.data?.map((items, index) => {
                return <RecommandedServiceCard data={items} key={index} />;
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default RecommendedServices;
