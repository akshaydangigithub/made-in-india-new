import React from "react";
import Navigation from "../../homepageComponents/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const PreRegister = () => {
    const navigate = useNavigate();
  return (
    <>
      <Navigation />
      <div
        className="container d-flex align-items-center justify-content-center"
        style={{ height: "88vh" }}
      >
        <div className="row">
          <div className="col">
            <h3 className="mb-1 text-center">Register as</h3>
            <button
              onClick={() => navigate("/userRegister")}
              className="btn btn-danger m-3"
            >
              User
            </button>
            <button
              onClick={() => navigate("/sellerRegister")}
              className="btn btn-danger m-3"
            >
              Seller
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreRegister;
