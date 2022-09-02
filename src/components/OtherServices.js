import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import OtherServiceCard from "./OtherServiceCard";

const OtherServices = () => {
  const anotherservicedata = useSelector(
    (state) => state.anotherservicefromsamesellerReducers?.anotherservicedata
  );
  // console.log("anotherservicedata>>>>", anotherservicedata);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <>
      <div className="simple-sliders">
        <div className="slider-heading">
          <h2>Other Services from This Seller</h2>
        </div>
        <div className="slider-wrap">
          <Slider {...settings}>
            {anotherservicedata &&
              anotherservicedata.data?.map((items, index) => {
                return <OtherServiceCard props={items} key={index} />;
              })}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default OtherServices;
