import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const BottomAdsBanner = () => {
  const gethomepagedata = useSelector(
    (state) => state.gethompageReducers?.gethomepagedata
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <div>
      <aside className="ads-banners">
        <div className="container">
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="card">
              <Slider {...settings}>
                {gethomepagedata &&
                  gethomepagedata.bottomAdvertiserBannerData?.map(
                    (items, index) => {
                      return (
                        <div className="ad-img" key={index}>
                          <img
                            src={
                              gethomepagedata.bannerImagePath + items.webImage
                            }
                            alt="ad"
                          />
                        </div>
                      );
                    }
                  )}
              </Slider>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default BottomAdsBanner;
