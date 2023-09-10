import React from "react";
import Navigation from "../../homepageComponents/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const PreLogin = () => {
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
            <h3 className="mb-1 text-center">Login as</h3>
            <button
              onClick={() => navigate("/userLogin")}
              className="btn btn-danger m-3"
            >
              User
            </button>
            <button
              onClick={() => navigate("/sellerLogin")}
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

export default PreLogin;
