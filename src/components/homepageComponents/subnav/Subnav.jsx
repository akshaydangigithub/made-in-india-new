import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";

const Subnav = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3, type: "spring", stiffness: 100 }}
    >
      <Navbar
        collapseOnSelect
        expand="lg"
        className="shadow bg-body-tertiary px-4"
      >
        <Container fluid>
          <Navbar.Brand className="d-lg-none" href="#home">
            All Categories
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto align-items-lg-center">
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="All categories"
                id="collasible-nav-dropdown"
              >
                <div className="d-lg-flex shadow">
                  <div>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Agriculture & Food
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Apparel & Accessories
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Arts & Crafts
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Auto, Motorcycle Parts & Accessories{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Bags, Cases & Boxes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Building Materials
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Chemical Products
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Computer Products
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Construction & Decoration
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Consumer Electronics
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Consumer Goods
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Electrical & Electronics
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Electronics & Household Electrical Appliances{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Energy Resources
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Food
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Furniture
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Gifts
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Hardware & Tools
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Health & Medicine
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Home Decorations
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Industrial Equipment & Components{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Instruments & Meters
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Light Industry & Daily Use
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Lighting Equipment
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Lights & Lighting
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Machinery
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Manufacturing & Processing Machinery{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Medicines, Medical Devices and Health Products{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Metallurgy, Mineral & Energy
                    </NavDropdown.Item>
                  </div>
                  <div>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Office Supplies
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Office Supplies, Cases & Bags, and Recreation Products{" "}
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Packaging & Printing
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Security & Protection
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Shoes
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Sporting Goods & Recreation
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Textile
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Textiles & Garments
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Tools & Hardware
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Toys Service
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Transportation
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      style={{ fontSize: 12 }}
                      href="/productDetails"
                    >
                      Vehicles & Spare Parts
                    </NavDropdown.Item>
                  </div>
                </div>
              </NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Top Products"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Most Popular Product
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Best Selling Product
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  New Selling Product
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  High Demand Product
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Supplier"
                id="collasible-nav-dropdown"
              ></NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Buyer"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  User Guide
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Audited Supplier
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Meet Supplier
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Buyer Center
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Product Discovery
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Supplier Discovery
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Post Sourcing request
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Browsing History
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.2">
                  Favourite
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Supplier Assistant"
                id="collasible-nav-dropdown"
              ></NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Buyer Assistant"
                id="collasible-nav-dropdown"
              ></NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Join Us"
                id="collasible-nav-dropdown"
              ></NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Send MII Request"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Create the form
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="Inqury Cart"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Show added sourcing data
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                style={{ fontSize: ".9rem" }}
                title="About MII"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  About Made In India
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Audited Supplier
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Secure Payment
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Submit Compalient
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  Contact US
                </NavDropdown.Item>
                <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                  FAQ
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Subnav;
