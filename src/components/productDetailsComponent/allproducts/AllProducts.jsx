import React, { useEffect } from "react";
import styles from "./style.module.css";
import { FcDocument } from "react-icons/fc";
import { HiChatBubbleOvalLeft } from "react-icons/hi2";
import { BiChevronRight } from "react-icons/bi";
import Image1 from "../../../assets/c6.webp"
import Image2 from "../../../assets/c7.webp";
import Image3 from "../../../assets/c8.webp";
import { Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/pro_img1.jpg";
import img2 from "../../../assets/pro_img2.jpg";

const newcomersCards = [
  {
    img: "https://image.made-in-china.com/219f0j00GtkfLbmIvUYj/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/219f0j00fTcYZUmGVRGK/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/219f0j00fToYDIKgRURj/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/219f0j00UQcfHPAdaYGZ/made-in-china.jpg",
    name: "Anhänger, Bootsanhänger, Nutzfahrzeuga",
    subtittle: "lorem ipusun many more ",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/219f0j00GtkfLbmIvUYj/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/219f0j00fTcYZUmGVRGK/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/219f0j00fToYDIKgRURj/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/219f0j00UQcfHPAdaYGZ/made-in-china.jpg",
    name: "Anhänger, Bootsanhänger, Nutzfahrzeuga",
    subtittle: "lorem ipusun many more ",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/219f0j00GtkfLbmIvUYj/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/219f0j00fTcYZUmGVRGK/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/219f0j00fToYDIKgRURj/made-in-china.jpg",
    name: "Sportbekleidung, Babybekleidung, Jacke",
    subtittle: "lorem ipusun many more ",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/219f0j00UQcfHPAdaYGZ/made-in-china.jpg",
    name: "Anhänger, Bootsanhänger, Nutzfahrzeuga",
    subtittle: "lorem ipusun many more ",
    logo_img: img2,
  },
];


const AllProducts = () => {
  return (
    <>
      <motion.div
        style={{ backgroundColor: "#E3E3E3", paddingBottom: "1.2vmax" }}
        className="container-fluid"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="row">
          <div className={`col-md-3 pt-3 ${styles.left}`}>
            <div className="row bg-light py-3 px-2 mb-3">
              <h5 className="mb-4">product group</h5>
              <p>PVC-Plane</p>
              <p>Self-adhesive vinyl</p>
              <p>Flex-Banner</p>
              <p>EV charger</p>
              <p>matteress topper</p>
              <div className={styles.moreLinks}>
                <p>
                  Oberbett{" "}
                  <i className="bx bx-grid-alt">
                    <BiChevronRight />
                  </i>
                </p>
                <div className={` ${styles.links_div}`}>
                  <p>Polystar</p>
                  <p>Other duvet</p>
                </div>
              </div>
              <div className={styles.moreLinks}>
                <p>
                  bedding{" "}
                  <i className="bx bx-grid-alt">
                    <BiChevronRight />
                  </i>
                </p>
                <div className={` ${styles.links_div}`}>
                  <p>Polystar</p>
                  <p>Bamboo</p>
                  <p>Linen</p>
                  <p>Other Linens</p>
                </div>
              </div>
              <div className={styles.moreLinks}>
                <p>
                  camping product{" "}
                  <i className="bx bx-grid-alt">
                    <BiChevronRight />
                  </i>
                </p>
                <div className={` ${styles.links_div}`}>
                  <p>Hammock</p>
                  <p>Camping tent</p>
                  <p>Slepping begs</p>
                  <p>Camping blankets & mat</p>
                  <p>Other Camping products</p>
                </div>
              </div>
              <div className={styles.moreLinks}>
                <p>
                  knit blanket{" "}
                  <i className="bx bx-grid-alt">
                    <BiChevronRight />
                  </i>
                </p>
                <div className={` ${styles.links_div}`}>
                  <p>yarn strichen</p>
                  <p>Another knit weighted blanket</p>
                </div>
              </div>
              <p>Weighted Blanket</p>
              <p>Blankets & Throw</p>
              <p>Others</p>
            </div>
            <div className="row bg-light py-3 px-2">
              <div className="row mb-3">
                <div className="col-10">
                  <h5>Contact the supplier</h5>
                </div>
                <div className="col-2">
                  <i className="bx bx-grid-alt">
                    <FcDocument />
                  </i>
                </div>
              </div>
              <div className="row mb-3 d-flex align-items-center">
                <div className="col-6">
                  <div className={styles.profile_image}></div>
                </div>
                <div className="col-6">
                  <p style={{ fontSize: "15px" }} className="mb-1">
                    Miss Eva
                  </p>
                  <h6
                    style={{ fontSize: "13px", opacity: 0.6 }}
                    className="mb-2"
                  >
                    Sales Manger
                  </h6>
                  <h5 className={styles.chat}>
                    <i className="bx bx-grid-alt">
                      <HiChatBubbleOvalLeft />
                    </i>{" "}
                    Chat
                  </h5>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-12">
                  <div class="form-floating">
                    <textarea
                      class="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                    ></textarea>
                    <label style={{ fontSize: "10px" }} for="floatingTextarea">
                      Enter between 20 to <br /> 4,000 character
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className={`col-12 w-100 ${styles.btn}`}>
                  <button>From you</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className={`${styles.products_main}`}>
              <Products Arrayname={newcomersCards} name="newcomers" />
              <Profile name="company profile" />
              <CompanyShow name="COMPANY SHOW" />
              <Form name="Send your request directly to suppliers" />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Products = ({ Arrayname, name }) => {
    const navigate = useNavigate();
    const redirectToProductDetails = () => {
        navigate("/categories");
      };
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="row mt-3 overflow-hidden pt-3 px-2"
      >
        <h5 className="mb-4">{name}</h5>
        {Arrayname.map((c, i) => (
          <div key={i}
            className="col-md-3 mb-4"
            onClick={() => redirectToProductDetails()}
          >
            <div className="row mb-3 position-relative">
              <motion.div
                className={`col ${styles.card_img}`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img className="d-block w-100 h-100" src={c.img} alt="" />
                <img style={{position:"absolute", top:"0", right:"12px"}} src={c.logo_img} height={30} width={70} alt="" />
              </motion.div>
            </div>
            <div className="row">
              <div className="col">
                <p
                  className="mb-2"
                  style={{ fontSize: ".9rem", height: "50px" }}
                >
                  {c.name}
                </p>
                <p
                  style={{
                    fontSize: ".9rem",
                    zIndex: "-2",
                    color: "rgba(0, 0, 0, 0.500)",
                  }}
                >
                  {c.subtittle}
                </p>
                <button className={styles.btn2}>Contact Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

const Profile = ({ Arrayname, name }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="row mt-3 overflow-hidden pt-3 px-2"
      >
        <h5 className="mb-4">{name}</h5>
        <div className="row">
          <div className="col-md-5 py-3">
            <div className="row mb-3">
              <Carousel>
                <Carousel.Item>
                  <img src={Image1} alt="alt" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Image2} alt="alt" />
                </Carousel.Item>
                <Carousel.Item>
                  <img src={Image3} alt="alt" />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="row">
              <button className={`${styles.btn2}`}>Book a factory tour</button>
            </div>
          </div>
          <div className="col-md-7 mt-3">
            <div className="row">
              <div className="col-4">
                <p style={{ fontSize: "12px" }}> Company type:</p>
              </div>
              <div className="col-8">
                <h6 style={{ fontSize: "14px" }}>
                  Manufacturer/factory, trading company
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p style={{ fontSize: "12px" }}> Main products:</p>
              </div>
              <div className="col-8">
                <h6 style={{ fontSize: "14px" }}>
                  <a style={{ fontSize: "13px" }} href="#">
                    Weighted Blanket , Weighted Blanket , Down Blanket , Camping
                    Blanket , play tent , bedding
                  </a>
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p style={{ fontSize: "12px" }}> share capital:</p>
              </div>
              <div className="col-8">
                <h6 style={{ fontSize: "14px" }}>5000000 RMB</h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p style={{ fontSize: "12px" }}> Terms of payment:</p>
              </div>
              <div className="col-8">
                <h6 style={{ fontSize: "14px" }}>
                  {" "}
                  LC, T/T, D/P, PayPal, Western Union, Money Gram
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p style={{ fontSize: "12px" }}> Average delivery time:</p>
              </div>
              <div className="col-8">
                <h6 style={{ fontSize: "14px" }}>
                  {" "}
                  Lead Time In Peak Season: 1-3 Months Lead Time Off Season: ...
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p style={{ fontSize: "12px" }}> OEM/ODM Availability:</p>
              </div>
              <div className="col-8">
                <h6 style={{ fontSize: "14px" }}>Yes indeed</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <p>
            Anhui Kingson Household Products Co., Ltd. Located in Hefei Science
            and Technology City, Anhui, China
          </p>
          <p>
            We are a comprehensive textile manufacturer and trading company.
          </p>
          <p>
            Our main product lines include weighted blankets, knitted weighted
            blankets, outdoor camping blankets, quilt covers, bedding sets,
            comforters,
          </p>
        </div>
      </div>
    </>
  );
};

const CompanyShow = ({ Arrayname, name }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="row mt-3 overflow-hidden pt-3 px-2"
      >
        <h5 className="mb-4">{name}</h5>
        <div className="row">
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <div className="row mb-3">
              <img
                src="https://image.made-in-china.com/211f0j00NBsULwyWfzpY/202303-shanghai-hometextile-trade-fair.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <p className="text-center">
                202303 shanghai hometextile trade fair
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <div className="row mb-3">
              <img
                src="https://image.made-in-china.com/211f0j00NBKYpaPGVruz/frankfurt-Ausstellung.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <p className="text-center">
                202303 shanghai hometextile trade fair
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <div className="row mb-3">
              <img
                src="https://image.made-in-china.com/211f0j00yCsGrKbBnzpu/Shanghai-International-Home-Textile-Exhibition.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <p className="text-center">
                202303 shanghai hometextile trade fair
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <div className="row mb-3">
              <img
                src="https://image.made-in-china.com/211f0j00NBKYpaPGVruz/frankfurt-Ausstellung.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <p className="text-center">
                202303 shanghai hometextile trade fair
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Form = ({ Arrayname, name }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="row mt-3 overflow-hidden py-3 px-2"
      >
        <h5 className="mb-4">{name}</h5>
        <div className="row">
          <form>
            <div className="form-group mb-4">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-floating mb-4">
              <textarea
                className="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label style={{ fontSize: "10px" }} for="floatingTextarea">
               Enter your details
              </label>
            </div>
            <button
              style={{ backgroundColor: "#d63535", border: "none" }}
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
