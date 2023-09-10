import React from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import Subnav from "../homepageComponents/subnav/Subnav";
import Footer from "../footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navigation />
      <Subnav />
      <div>
        <>
          <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h2 className="text-center">About us</h2>
                <h6 className="text-center">
                  Celebrating Made In India Products
                </h6>
                <h5 className="mt-5">About us :</h5>
                <p>
                  India has always been known for its rich culture, heritage,
                  and diversity. But did you know that India is also home to
                  some of the best products in the world? Yes, you read that
                  right! From textiles to technology, India has been producing
                  some of the finest products that are not only popular in the
                  country but also globally.
                </p>
                <p>
                  The 'Made in India' tag has become a symbol of quality,
                  innovation, and affordability. The country has been producing
                  a wide range of products that cater to the needs of people
                  from different walks of life. Be it food, fashion, or
                  technology, India has been making its mark in every field.
                </p>
                <p>
                  One of the most popular products that India is known for is
                  its textiles. From traditional sarees to modern-day clothing,
                  Indian textiles have always been in demand. The intricate
                  designs, vibrant colors, and unique patterns make Indian
                  textiles stand out from the rest. The country is also known
                  for its handloom products, which are not only beautiful but
                  also eco-friendly.
                </p>
                <p>
                  Apart from textiles, India is also known for its spices and
                  food products. Indian spices are famous for their unique
                  flavor and aroma. They are used in various cuisines across the
                  world. The country is also known for its tea and coffee, which
                  are grown in different parts of the country. The taste and
                  aroma of Indian tea and coffee are unmatched.
                </p>
                <p>
                  India has also been making its mark in the technology sector.
                  The country has been producing some of the best software and
                  hardware products that are used globally. From smartphones to
                  laptops, India has been making its presence felt in the tech
                  world.
                </p>
                <p>
                  India has been producing some of the finest products that are
                  loved by people across the world. The 'Made in India' tag has
                  become a symbol of quality, innovation, and affordability. So,
                  let's celebrate the products that are made in India and
                  support our local manufacturers.
                </p>
                <h5 className="mt-4">Services :</h5>
                <div className="row">
                  <div className="col-md-6">
                    <p> Home Decorations |</p>
                    <p> Gifts |</p>
                    <p>
                      {" "}
                      Office Supplies, Cases & Bags, and Recreation Products |
                    </p>
                    <p> Textiles & Garments |</p>
                    <p>Electronics & Household Electrical Appliances |</p>
                    <p> Vehicles & Spare Parts |</p>
                    <p> Medicines, Medical Devices and Health Products |</p>
                    <p> Machinery |</p>
                    <p> Building Materials |</p>
                    <p> Food |</p>
                    <p> Hardware & Tools |</p>
                    <p> Lighting Equipment |</p>
                    <p> Shoes |</p>
                    <p> Chemical Products |</p>
                    <p> Energy Resources |</p>
                    <p> Manufacturing & Processing Machinery |</p>
                    <p> Consumer Electronics |</p>
                    <p> Industrial Equipment & Components |</p>
                    <p> Electrical & Electronics |</p>
                    <p> Construction & Decoration |</p>
                  </div>
                  <div className="col-md-6">
                    <p> Light Industry & Daily Use |</p>
                    <p> Auto, Motorcycle Parts & Accessories |</p>
                    <p> Apparel & Accessories |</p>
                    <p> Lights & Lighting |</p>
                    <p> Sporting Goods & Recreation |</p>
                    <p> Transportation |</p>
                    <p> Arts & Crafts |</p>
                    <p> Health & Medicine |</p>
                    <p> Packaging & Printing |</p>
                    <p> Computer Products |</p>
                    <p> Tools & Hardware |</p>
                    <p> Bags, Cases & Boxes |</p>
                    <p> Furniture |</p>
                    <p> Metallurgy, Mineral & Energy |</p>
                    <p> Security & Protection |</p>
                    <p> Textile |</p>
                    <p> Instruments & Meters |</p>
                    <p> Office Supplies |</p>
                    <p> Agriculture & Food |</p>
                    <p> Toys Service |</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
