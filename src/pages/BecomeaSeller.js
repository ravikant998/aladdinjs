import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Company from "../components/Company";
import Freelancer from "../components/Freelancer";

const BecomeSeller = () => {
  return (
    <div>
      <section className="become-seller">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Become an Aladyyn Seller
              </li>
            </ol>
          </nav>

          <Tabs
            defaultActiveKey="company"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="company" title="Company">
              <Company />
            </Tab>
            <Tab eventKey="freelancer" title="Freelancer">
              <Freelancer />
            </Tab>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default BecomeSeller;
