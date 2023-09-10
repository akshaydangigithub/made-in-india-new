import React from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import AllProducts from "./allproducts/AllProducts";
import Hero from "./hero/Hero";

const ProDetailsMain = () => {
  return (
    <div>
      <Navigation />
      <main style={{ backgroundColor: "#E3E3E3", padding: "0 1.2vmax" }}>
        <Hero />
        <AllProducts />
      </main>
    </div>
  );
};

export default ProDetailsMain;
