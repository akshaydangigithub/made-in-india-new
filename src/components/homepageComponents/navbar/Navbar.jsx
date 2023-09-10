import React, { useContext } from "react";
import styles from "./style.module.css";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { motion } from "framer-motion";
import { BsCart2 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../../contextApi";
import logo from "../../../assets/logo.jpg"

const Navigation = () => {
  const navigate = useNavigate();
  const { cartValue } = useContext(DataContext);

  const userToken = localStorage.getItem("userToken");
  const venderToken = localStorage.getItem("venderToken");
  const adminToken = localStorage.getItem("superAdminToken");

  function logoutHandel() {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("venderToken");
    localStorage.removeItem("venderId");
    localStorage.removeItem("superAdminToken");
    localStorage.removeItem("superAdminId");
    alert("successfully logout");
    navigate("/");
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.3, type: "spring", stiffness: 100 }}
    >
      <Navbar expand="lg" className="bg-body-tertiary border px-4">
        <Container fluid>
          <Navbar.Brand href="/">
            <div style={{ lineHeight: 0.1 }}>
              {/* <h1 style={{ fontSize: "28px", lineHeight: 1, color: "#DC3545" }}>
                Made-in-India
              </h1>
              <p style={{ fontSize: "10px" }}>
                Connecting Buyers with Indian Suppliers
              </p> */}
              <img src={logo} alt="" height={50} width={100} />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex mx-lg-auto w-50">
              {/* <div style={{ width: "90%" }} className="">
                <InputGroup>
                  <DropdownButton
                    variant="outline-danger"
                    title="Products"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Products</Dropdown.Item>
                    <Dropdown.Item href="#">Suppliers</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control
                    className={styles.form}
                    style={{
                      border: "1px solid #DC3545",
                      outline: "none",
                      boxShadow: "0 0 2px 2px white",
                      color: "red",
                    }}
                    aria-label="Text input with dropdown button"
                    placeholder="Tell us what you are looking for...."
                  />
                  <Button variant="outline-danger">Search</Button>
                </InputGroup>
              </div> */}
              <InputGroup className={styles.input}>
                <Form.Control
                  className={styles.form}
                  style={{
                    border: "1px solid #DC3545",
                    outline: "none",
                    boxShadow: "0 0 2px 2px white",
                    color: "red",
                  }}
                  aria-label="Text input with dropdown button"
                  placeholder="Tell us what you are looking for...."
                />
                <Button variant="outline-danger">Search</Button>
              </InputGroup>
            </Form>
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
            >
              <Link className={styles.navlink} to="/">
                Home
              </Link>
              <Link className={styles.navlink} to="/aboutUs">
                About us
              </Link>
              {userToken ? (
                <Link
                  className={styles.navlink}
                  to="/preLogin"
                  onClick={() => logoutHandel()}
                >
                  Logout
                </Link>
              ) : venderToken ? (
                <Link
                  className={styles.navlink}
                  to="/prelogin"
                  onClick={() => logoutHandel()}
                >
                  Logout
                </Link>
              ) : adminToken ? (
                <Link
                  className={styles.navlink}
                  to="/prelogin"
                  onClick={() => logoutHandel()}
                >
                  Logout
                </Link>
              ) : (
                <Link className={styles.navlink} to="/prelogin">
                  Login
                </Link>
              )}

              {userToken ? (
                <Link className={styles.navlink} to="/userDashboard">
                  UserDashboard
                </Link>
              ) : adminToken ? (
                <Link className={styles.navlink} to="/AdminPanel">
                  AdminDashboard
                </Link>
              ) : venderToken ? (
                <Link className={styles.navlink} to="/venderDashboard">
                  VenderDashboard
                </Link>
              ) : (
                ""
              )}

              <div style={{ position: "relative" }}>
                <Link
                  style={{ position: "relative" }}
                  className={styles.navlink}
                  to="/productDetails/cart"
                >
                  <i className="bx bx-grid-alt">
                    <BsCart2 />
                  </i>
                </Link>
                <span
                  style={{
                    position: "absolute",
                    fontSize: 12,
                    top: 0,
                    right: 0,
                    color: "red",
                  }}
                >
                  {cartValue > 0 ? cartValue : ""}
                </span>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
