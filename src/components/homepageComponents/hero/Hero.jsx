import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css";
import Image1 from "../../../assets/c1.webp";
import Image2 from "../../../assets/c2.webp";
import { motion } from "framer-motion";

const Hero = () => {
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleResize = () => {
    setIsWideScreen(window.innerWidth >= 1060);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.div
        className={styles.hero_main}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.hero}>
          {/* <div className={styles.left}>
                <h5><i onClick={() => setIsWideScreen(!isWideScreen)} className={`bx bx-grid-alt ${styles.submenu}`}><TfiMenuAlt /></i> {" "}All categories</h5>
                <div className={`${styles.links} ${isWideScreen ? '' : 'd-none'}`}>
                  <p>Agriculture & Food</p>
                  <p>Apparel & Accessories</p>
                  <p>Arts & Crafts	</p>
                  <p>Auto, Motorcycle Parts & Accessories	</p>
                  <p>Bags, Cases & Boxes	</p>
                  <p>Building Materials	</p>
                  <p>Chemical Products	</p>
                  <p>Computer Products</p>
                  <p>Construction & Decoration</p>
                  <p>Consumer Electronics	</p>
                  <p>Consumer Goods	</p>
                  <p>Electrical & Electronics	</p>
                  <p>Electronics & Household Electrical Appliances	</p>
                  <p>Energy Resources</p>
                  <p>Food</p>
                  <p>Furniture</p>
                  <p>Gifts</p>
                  <p>Hardware & Tools</p>
                  <p>Health & Medicine	</p>
                  <p>Home Decorations	</p>
                  <p>Industrial Equipment & Components	</p>
                  <p>Instruments & Meters	</p>
                  <p>Light Industry & Daily Use	</p>
                  <p>Lighting Equipment	</p>
                  <p>Lights & Lighting	</p>
                  <p>Machinery	</p>
                  <p>Manufacturing & Processing Machinery	</p>
                  <p>Medicines, Medical Devices and Health Products</p>
                  <p>Metallurgy, Mineral & Energy</p>
                  <p>Office Supplies</p>
                  <p>Office Supplies, Cases & Bags, and Recreation Products</p>
                  <p>Packaging & Printing</p>
                  <p>Security & Protection</p>
                  <p>Shoes</p>
                  <p>Sporting Goods & Recreation</p>
                  <p>Textile</p>
                  <p>Textiles & Garments</p>
                  <p>Tools & Hardware</p>
                  <p>Toys Service</p>
                  <p>Transportation</p>
                  <p>Vehicles & Spare Parts</p>
                </div>
              </div> */}
          <div className={styles.right}>
            <div className={styles.crousel}>
              <div
                id="carouselExampleInterval"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval="10000"
                  >
                    <img src={Image1} alt="" className="d-block w-100" />
                  </div>
                  <div className="carousel-item" data-bs-interval="2000">
                    <img src={Image2} alt="" className="d-block w-100" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleInterval"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className={styles.right_btm}>
              <div className={styles.right_btm_prt1}>
                <img src="/im1.webp" width={100} height={100} alt="alt" />
              </div>
              <div className={styles.right_btm_prt2}>
                <img src="/im2.webp" width={100} height={100} alt="alt" />
              </div>
              <div className={styles.right_btm_prt3}>
                <img src="/im3.webp" width={100} height={100} alt="alt" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Hero;
