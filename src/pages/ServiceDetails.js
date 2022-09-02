import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import ServiceDescription from "../components/ServiceDescription";
import ServiceGallery from "../components/ServiceGallery";

const ServiceDetails = () => {
  return (
    <>
      <section className="edit-information profile listing">
        <div className="Toastify"></div>
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/category/61c1de0dee489740f70f9b74/Beauty">Beauty</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/category/particular/61c1de0dee489740f70f9b74/61c1e2e1eec4c2436578e292">
                  Face
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                This is new service
              </li>
            </ol>
          </nav>
          <div className="tabbing-head listing">
            <div className="tabbing-select">
              <a
                className="profile-link"
                href="/seller-profile/626a729b8befe7cc3580927f/61c1de0dee489740f70f9b74"
              >
                <i className="icon-arrow"></i>Go to Seller Profile
              </a>
            </div>

            <Tabs
              defaultActiveKey="description"
              id="uncontrolled-tab-example-tab-description"
            >
              <Tab eventKey="description" title="Description">
                <ServiceDescription />
              </Tab>
              <Tab eventKey="gallery" title="Gallery">
                {/* <ServiceGallery /> */}
              </Tab>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
