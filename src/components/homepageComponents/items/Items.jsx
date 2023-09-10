import React from "react";
import styles from "./style.module.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/pro_img1.jpg";
import img2 from "../../../assets/pro_img2.jpg";

const cards = [
  {
    img: "https://image.made-in-china.com/252f0j10yQzEpusPRahI/yeyirynpicuhnsnosryrsss.webp",
    name: "Agriculture & Food",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Apparel & Accessories",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Arts & Crafts",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10kagEurjqTtVI/yeyigynpicuhgiieshussss.webp",
    name: "Auto, Motorcycle Parts & Accessories	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Bags, Cases & Boxes	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10SaPElHTITQhC/isnheinpicuhryyyyuyesss.webp",
    name: "Building Materials	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10QTuapgjEttiL/yeyisynpicuhnsnosouusss.webp",
    name: "Chemical Products	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10zaITYlfKmtVS/iuueynnpicuhosehesoesss.webp",
    name: "Computer Products	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10ITHEqzQdFaip/isgyiynpicuhriygsonhsss.webp",
    name: "Construction & Decoration	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Consumer Electronics",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Consumer Goods",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10yQzEpusPRahI/yeyirynpicuhnsnosryrsss.webp",
    name: "Electrical & Electronics",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Electronics & Household Electrical Appliances	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Energy Resources	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10ITHEqzQdFaip/isgyiynpicuhriygsonhsss.webp",
    name: "Food	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10kagEurjqTtVI/yeyigynpicuhgiieshussss.webp",
    name: "Furniture	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Gifts	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Hardware & Tools	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10QTuapgjEttiL/yeyisynpicuhnsnosouusss.webp",
    name: "Health & Medicine	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10zaITYlfKmtVS/iuueynnpicuhosehesoesss.webp",
    name: "Home Decorations	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10ITHEqzQdFaip/isgyiynpicuhriygsonhsss.webp",
    name: "Industrial Equipment & Components	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Instruments & Meters	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Light Industry & Daily Use	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10zaITYlfKmtVS/iuueynnpicuhosehesoesss.webp",
    name: "Lighting Equipment	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10yQzEpusPRahI/yeyirynpicuhnsnosryrsss.webp",
    name: "Lights & Lighting	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10NEutQslzmahp/ynsyrenpicuhsnghsyissss.webp",
    name: "Machinery	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10ITHEqzQdFaip/isgyiynpicuhriygsonhsss.webp",
    name: "Manufacturing & Processing Machinery	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10kagEurjqTtVI/yeyigynpicuhgiieshussss.webp",
    name: "Medicines, Medical Devices and Health Products	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Metallurgy, Mineral & Energy	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10SaPElHTITQhC/isnheinpicuhryyyyuyesss.webp",
    name: "Office Supplies	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10QTuapgjEttiL/yeyisynpicuhnsnosouusss.webp",
    name: "Office Supplies, Cases & Bags, and Recreation Products	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10zaITYlfKmtVS/iuueynnpicuhosehesoesss.webp",
    name: "Packaging & Printing	",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10ITHEqzQdFaip/isgyiynpicuhriygsonhsss.webp",
    name: "Security & Protection	",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10kagEurjqTtVI/yeyigynpicuhgiieshussss.webp",
    name: "Shoes",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Sporting Goods & Recreation",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10yQzEpusPRahI/yeyirynpicuhnsnosryrsss.webp",
    name: "Textile",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10kagEurjqTtVI/yeyigynpicuhgiieshussss.webp",
    name: "Textiles & Garments",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Tools & Hardware",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10yQzEpusPRahI/yeyirynpicuhnsnosryrsss.webp",
    name: "Toys Service",
    logo_img: img1,
  },
  {
    img: "https://image.made-in-china.com/252f0j10kagEurjqTtVI/yeyigynpicuhgiieshussss.webp",
    name: "Transportation",
    logo_img: img2,
  },
  {
    img: "https://image.made-in-china.com/252f0j10YTutzrKgDahD/yeyiuynpicuhginnnioesss.webp",
    name: "Vehicles & Spare Parts",
    logo_img: img1,
  },
];

const Items = () => {
  const navigate = useNavigate();

  const redirectToProductDetails = () => {
    navigate("/productDetails");
  };
  return (
    <div>
      <div className={styles.items_main}>
        <div className={styles.items}>
          <h4>All Categories</h4>
          <div className="row mt-4">
            {cards.map((c, i) => (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => redirectToProductDetails()}
                key={i}
                className="col-md-2 mb-4 position-relative"
              >
                <motion.div
                  className={styles.top}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <img src={c.img} alt="" />
                </motion.div>
                <div className={styles.btm}>
                  <p style={{ fontSize: "1.2vmax" }}>{c.name}</p>
                </div>
                <img
                  style={{ position: "absolute", top: "0", right: "0" }}
                  height={30}
                  width={70}
                  src={c.logo_img}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
