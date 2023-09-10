import React from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import Subnav from "../homepageComponents/subnav/Subnav";
import SpecificProductDetails from "./details/SpecificProductDetails";

const specificProductMain = () => {
  return (
    <>
      <Navigation />
      <Subnav />
      <div style={{ backgroundColor: "#F5F7FA" }} className="px-3">
        <SpecificProductDetails />
      </div>
    </>
  );
};

export default specificProductMain;
