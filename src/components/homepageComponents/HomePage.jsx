import React from "react";
import Navigation from "./navbar/Navbar";
import Subnav from "./subnav/Subnav";
import Hero from "./hero/Hero";
import Items from "./items/Items";
import Info from "./info/Info";
import Footer from "../footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Subnav />
      <Hero />
      <Items/>
      <Info/>
      <Footer/>
    </>
  );
};

export default HomePage;
