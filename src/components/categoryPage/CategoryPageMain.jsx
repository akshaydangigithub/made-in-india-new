import React from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import Subnav from "../homepageComponents/subnav/Subnav";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import img1 from "../../assets/pro_img1.jpg";
import img2 from "../../assets/pro_img2.jpg";

const items = [
  {
    img: "https://media.istockphoto.com/id/889176872/photo/fresh-ginger.webp?b=1&s=170667a&w=0&k=20&c=4lcgzVsV76FhMFy8CCl6FwJNmRvuYchhoaPq2dzSJC0=",
    name: " Fresh Garlic Price Per Ton From China Wholesale Price for  Supermarket (Normal White Garlic ...)",
    details:
      " Product Description Product Name 2023 New Crop Normal White Garlic , Pure White Garlic, Red Garlic, Purple Garlic Size ...",
      logo_img: img1,
       logo_img: img1,
  },
  {
    img: "https://media.istockphoto.com/id/939646998/photo/ginger-root-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=6tGxla1YbjPAOcrLN3OJAPcgBP3KBk3kZf3z0rO98Cw=",
    name: " Fresh Garlic Price Per Ton From China Wholesale Price for  Supermarket (Normal White Garlic ...)",
    details:
      " Product Description Product Name 2023 New Crop Normal White Garlic , Pure White Garlic, Red Garlic, Purple Garlic Size ...",
       logo_img: img2,
  },
  {
    img: "https://media.istockphoto.com/id/1434044850/photo/harvest-ginger-root-from-organic-farms-fresh-ginger-in-the-garden-with-green-leaves-is-dug.webp?b=1&s=170667a&w=0&k=20&c=jml2x-g1aO5RXGMA1Wq-binnVz79u7lDIoH-eM48kHo=",
    name: " Fresh Garlic Price Per Ton From China Wholesale Price for  Supermarket (Normal White Garlic ...)",
    details:
      " Product Description Product Name 2023 New Crop Normal White Garlic , Pure White Garlic, Red Garlic, Purple Garlic Size ...",
       logo_img: img1,
  },
  {
    img: "https://media.istockphoto.com/id/889176872/photo/fresh-ginger.webp?b=1&s=170667a&w=0&k=20&c=4lcgzVsV76FhMFy8CCl6FwJNmRvuYchhoaPq2dzSJC0=",
    name: " Fresh Garlic Price Per Ton From China Wholesale Price for  Supermarket (Normal White Garlic ...)",
    details:
      " Product Description Product Name 2023 New Crop Normal White Garlic , Pure White Garlic, Red Garlic, Purple Garlic Size ...",
       logo_img: img2,
  },
  {
    img: "https://media.istockphoto.com/id/939646998/photo/ginger-root-isolated-on-white-background.webp?b=1&s=170667a&w=0&k=20&c=6tGxla1YbjPAOcrLN3OJAPcgBP3KBk3kZf3z0rO98Cw=",
    name: " Fresh Garlic Price Per Ton From China Wholesale Price for  Supermarket (Normal White Garlic ...)",
    details:
      " Product Description Product Name 2023 New Crop Normal White Garlic , Pure White Garlic, Red Garlic, Purple Garlic Size ...",
       logo_img: img1,
  },
  {
    img: "https://media.istockphoto.com/id/1434044850/photo/harvest-ginger-root-from-organic-farms-fresh-ginger-in-the-garden-with-green-leaves-is-dug.webp?b=1&s=170667a&w=0&k=20&c=jml2x-g1aO5RXGMA1Wq-binnVz79u7lDIoH-eM48kHo=",
    name: " Fresh Garlic Price Per Ton From China Wholesale Price for  Supermarket (Normal White Garlic ...)",
    details:
      " Product Description Product Name 2023 New Crop Normal White Garlic , Pure White Garlic, Red Garlic, Purple Garlic Size ...",
       logo_img: img2,
  },
];

const CategoryPageMain = () => {
  const navigate = useNavigate();
  const redirectToConatactPage = () => {
    navigate("/contact");

    // productDetails/specificProduct
  };
  return (
    <>
      <Navigation />
      <Subnav />

      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <div className="row align-items-center">
              <div className="col-md-2 col-4 border py-3">
                <h6 className="m-0">Product List</h6>
              </div>
              <div className="col-md-10 col-8 text-end">
                <Link to="#">
                  View Related <b>Garlic </b> Suppliers
                </Link>
              </div>
            </div>

            {items &&
              items.map((item, index) => (
                <div
                  key={index}
                  className="row mt-5 border-bottom pb-3 bg-light p-3 position-relative"
                >
                  <div className="col-md-3">
                    <img src={item.img} alt="image" className="d-block w-100" />
                    <img
                      style={{ position: "absolute", top: "15px", left: "28px" }}
                      src={item.logo_img}
                      height={30}
                      width={70}
                      alt=""
                    />
                  </div>
                  <div className="col-md-5 pe-5">
                    <Link
                      to="/productDetails/specificProduct"
                      className="text-decoration-none fs-6"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-2">
                      Min: Order : <b>1 Ton</b>
                    </p>
                    <p>{item.details}</p>
                  </div>
                  <div className="col-md-4">
                    <p className="mb-2">
                      Lorem ipsum dolor sit, amet adipisicing...
                    </p>
                    <p style={{ fontSize: 14 }} className="mb-0 opacity-50">
                      Lorem, ipsum.
                    </p>
                    <p style={{ fontSize: 14 }} className="opacity-50">
                      ISO 9001
                    </p>
                    <button
                      onClick={redirectToConatactPage}
                      className="btn btn-danger mb-2"
                    >
                      Contact now
                    </button>{" "}
                    <br />
                    <Link
                      to="/productDetails/cart"
                      className="text-decoration-none"
                    >
                      Inquiry Basket
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryPageMain;
