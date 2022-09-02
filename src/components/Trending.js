import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";

const Trending = () => {
  const gethomepagedata = useSelector(
    (state) => state.gethompageReducers?.gethomepagedata
  );
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div>
      <section className="trending-services">
        <div className="container">
          <h2>Trending</h2>
          <div className="slick-slider slick-initialized" dir="ltr">
            <div className="card">
              <Slider {...settings}>
                {gethomepagedata &&
                  gethomepagedata.subcategoryData?.map((items, index) => {
                    return (
                      <a
                        href="/category/particular/61e4fd1114a1a05906661c6d/61efbbd178f433350d57a88f/Quality Analyst"
                        key={index}
                      >
                        <div className="service-img">
                          <img
                            src="/static/media/service-5.cf4ef4235cac40c5c5b8.jpg"
                            alt="service"
                          />
                        </div>
                        <div className="service-name">
                          <h3>{items.name}</h3>
                        </div>
                      </a>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
