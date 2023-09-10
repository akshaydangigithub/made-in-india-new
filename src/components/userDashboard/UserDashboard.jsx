import React from "react";
import Navigation from "../homepageComponents/navbar/Navbar";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { motion } from "framer-motion";
import Footer from "../footer/Footer";

const User = () => {
  return (
    <>
      <Navigation />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        <Navbar
          collapseOnSelect
          expand="lg"
          className="shadow bg-body-tertiary px-4"
        >
          <Container fluid>
            <Navbar.Brand className="d-lg-none" href="#home">
              User
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto align-items-lg-center">
                <NavDropdown
                  style={{ fontSize: ".9rem" }}
                  title="Virtual Office"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    style={{ fontSize: 12 }}
                    href="#action/3.1"
                  ></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  style={{ fontSize: ".9rem" }}
                  title="Buying Leads"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                    About Made In India
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  style={{ fontSize: ".9rem" }}
                  title="Channel Info"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                    About Made In India
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  style={{ fontSize: ".9rem" }}
                  title="Account"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                    About Made In India
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  style={{ fontSize: ".9rem" }}
                  title="Transactions"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                    About Made In India
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown
                  style={{ fontSize: ".9rem" }}
                  title="Trade Service"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item style={{ fontSize: 12 }} href="#action/3.1">
                    About Made In India
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </motion.div>

      <div className="container my-4">
        <div className="row">
          <div className="col">
            <div className="row">
              <div className="col-md-3 border p-3">
                <div className="row border-bottom">
                  <h6 className="mb-3 ">Contact Info</h6>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    Basic Info
                  </p>
                  <p style={{ fontSize: 14 }}>Edit Password</p>
                </div>
                <div className="row border-bottom mt-3">
                  <h6 className="mb-3 ">Trade Info</h6>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    Company Info
                  </p>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    Sourcing Info
                  </p>
                  <p style={{ fontSize: 14 }}>Manage Certificate</p>
                </div>
                <div className="row border-bottom mt-3">
                  <h6 className="mb-3 ">Manage Privacy Info</h6>
                  <p style={{ fontSize: 14 }}>Privacy Info</p>
                </div>
                <div className="row mt-3 border-bottom">
                  <h6 className="mb-3 ">My List</h6>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    Bonus Points
                  </p>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    Product Alert
                  </p>
                  <p className="mb-1" style={{ fontSize: 14 }}>
                    E-Catalogs
                  </p>
                  <p>Visit History</p>
                </div>
              </div>
              <div className="col-md-9 px-4 mt-5 mt-md-0">
                <h5>
                  Basic Info. <span>(Approved)</span>
                </h5>
                <p>
                  Accurate and verified contacts will help to build trust with
                  suppliers.
                </p>
                <div className="row border">
                  <div
                    className="col-2 border"
                    style={{ backgroundColor: "#F5F5F5" }}
                  >
                    <div className="row border-bottom" style={{ height: 170 }}>
                      <p className="text-end" style={{ fontSize: 13 }}>
                        Photo
                      </p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Full Name </p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Email Address</p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Backup Email</p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Department </p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Position </p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Telephone </p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Mobile </p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Fax</p>
                    </div>
                    <div
                      className="row border-bottom text-end"
                      style={{ fontSize: 13 }}
                    >
                      <p className="my-2">Social Media Contact</p>
                    </div>
                  </div>
                  <div className="col-10">
                    <div
                      className="row p-2 border-bottom"
                      style={{ height: 170 }}
                    >
                      <div className="col-md-3 h-100 border d-flex align-items-center justify-content-center">
                        <img className="d-block w-100 h-100"
                          src="https://www.micstatic.com/aladdin/img/personphoto/male_e2ef1186.svg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">Akshay Dangi</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">randomone1233@gmail.com</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">randomone100#gmail.com</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">Computer</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">Something</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">54410164</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">+91 32546019854</p>
                    </div>
                    <div className="row border-bottom" style={{ fontSize: 13 }}>
                      <p className="my-2">---</p>
                    </div>
                    <div className="row" style={{ fontSize: 13 }}>
                      <p className="my-2">----</p>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col ">
                    <button className="btn btn-warning mb-3 d-block mx-auto">Edit</button>
                    <ul className="p-0">
                      <li style={{ fontSize: 13 }}>
                        <b>Approved:</b> Submission has been accepted. Only
                        "Approved" submissions can be published on
                        Made-in-China.com.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default User;
