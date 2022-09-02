import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const Banner = () => {
  const gethomepagedata = useSelector(
    (state) => state.gethompageReducers?.gethomepagedata
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <>
      <section className="banner">
        <Slider {...settings}>
          {gethomepagedata &&
            gethomepagedata.bannerData?.map((items, index) => {
              return (
                <div className="container" key={index}>
                  <div className="banner-wrap">
                    <div className="banner-right"></div>
                    <div className="img-wrap">
                      <img
                        src={gethomepagedata.bannerImagePath + items.webImage}
                        alt="banner"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
        </Slider>

        {/* </div> */}
      </section>
    </>
  );
};

export default Banner;
