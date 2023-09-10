import React, { useContext, useState } from "react";
import { DataContext } from "../../../contextApi";
import { useNavigate } from "react-router-dom";

const SpecificProductDetails = () => {
  const navigate = useNavigate();
  const { cartValue, setcartValue, addToCart } = useContext(DataContext);

  const IncCartValue = () => {
    setcartValue(cartValue + 1);
    alert("Product added to cart");
    addToCart({ image: "/specificPro/i1.webp", price: "299" });
  };

  const goToStartNowPage = () => {
    navigate("/startNow");
  };

  const [showImage1, setShowImage1] = useState(true);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);

  const showimage1 = () => {
    setShowImage1(true);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
    setShowImage5(false);
  };
  const showimage2 = () => {
    setShowImage1(false);
    setShowImage2(true);
    setShowImage3(false);
    setShowImage4(false);
    setShowImage5(false);
  };
  const showimage3 = () => {
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(true);
    setShowImage4(false);
    setShowImage5(false);
  };
  const showimage4 = () => {
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(true);
    setShowImage5(false);
  };
  const showimage5 = () => {
    setShowImage1(false);
    setShowImage2(false);
    setShowImage3(false);
    setShowImage4(false);
    setShowImage5(true);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "white" }}
        className="container-fluid mt-4 px-md-5 py-4 pb-5 mb-3"
      >
        <div className="row">
          <div className="col-md-3 mb-4">
            <div className="row">
              <div className="col-12">
                {showImage1 && (
                  <img
                    className="d-block w-100"
                    src="/specificPro/i1.webp"
                    width={320}
                    height={280}
                    alt="alt"
                  />
                )}
                {showImage2 && (
                  <img
                    className="d-block w-100"
                    src="/specificPro/i2.webp"
                    width={320}
                    height={280}
                    alt="alt"
                  />
                )}
                {showImage3 && (
                  <img
                    className="d-block w-100"
                    src="/specificPro/i3.webp"
                    width={320}
                    height={280}
                    alt="alt"
                  />
                )}
                {showImage4 && (
                  <img
                    className="d-block w-100"
                    src="/specificPro/i4.webp"
                    width={320}
                    height={280}
                    alt="alt"
                  />
                )}
                {showImage5 && (
                  <img
                    className="d-block w-100"
                    src="/specificPro/i5.webp"
                    width={320}
                    height={280}
                    alt="alt"
                  />
                )}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-2 ">
                <img
                  onClick={showimage1}
                  style={showImage1 ? { border: "1.5px solid red" } : {}}
                  src="/specificPro/i1.webp"
                  width={35}
                  height={35}
                  alt="alt"
                />
              </div>
              <div className="col-2">
                <img
                  onClick={showimage2}
                  style={showImage2 ? { border: "1.5px solid red" } : {}}
                  src="/specificPro/i2.webp"
                  width={35}
                  height={35}
                  alt="alt"
                />
              </div>
              <div className="col-2">
                <img
                  onClick={showimage3}
                  style={showImage3 ? { border: "1.5px solid red" } : {}}
                  src="/specificPro/i3.webp"
                  width={35}
                  height={35}
                  alt="alt"
                />
              </div>
              <div className="col-2">
                <img
                  onClick={showimage4}
                  style={showImage4 ? { border: "1.5px solid red" } : {}}
                  src="/specificPro/i4.webp"
                  width={35}
                  height={35}
                  alt="alt"
                />
              </div>
              <div className="col-2">
                <img
                  onClick={showimage5}
                  style={showImage5 ? { border: "1.5px solid red" } : {}}
                  src="/specificPro/i5.webp"
                  width={35}
                  height={35}
                  alt="alt"
                />
              </div>
            </div>
          </div>
          <div className="col-md-8 ms-3">
            <h6>
              Custom High Quality Unisex Washed Demin Baseball Vintage Dad Hat
            </h6>
            <div
              style={{ backgroundColor: "#F5F7FA" }}
              className="row mt-2 p-2"
            >
              <p>Reference FOB price / purchase quantity.</p>
              <div className="row">
                <div
                  style={{ backgroundColor: "white" }}
                  className="col-12 d-flex pt-3"
                >
                  <div className="col-md-2">
                    <h5>3,99 $</h5>
                    <p>10-99 piece</p>
                  </div>
                  <div className="col-md-2">
                    <h5>3,3 $</h5>
                    <p>100-990 piece</p>
                  </div>
                  <div className="col-md-2">
                    <h5>2,99 $</h5>
                    <p>10-99 piece</p>
                  </div>
                  <div className="col-md-2">
                    <h5>2,5 $</h5>
                    <p>1000+ piece</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div style={{ marginBottom: "-7px" }} className="row">
              <div className="col-3">
                <p style={{ fontSize: 15 }}>Art :</p>
              </div>
              <div className="col-6">
                <h6 style={{ fontSize: 16 }}>Rugby Cap</h6>
              </div>
            </div>
            <div style={{ marginBottom: "-7px" }} className="row">
              <div className="col-3">
                <p style={{ fontSize: 15 }}>Material :</p>
              </div>
              <div className="col-6">
                <h6 style={{ fontSize: 16 }}>100% cotton</h6>
              </div>
            </div>
            <div style={{ marginBottom: "-7px" }} className="row">
              <div className="col-3">
                <p style={{ fontSize: 15 }}>Style :</p>
              </div>
              <div className="col-6">
                <h6 style={{ fontSize: 16 }}>Striped</h6>
              </div>
            </div>
            <div style={{ marginBottom: "-7px" }} className="row">
              <div className="col-3">
                <p style={{ fontSize: 15 }}>Gender :</p>
              </div>
              <div className="col-6">
                <h6 style={{ fontSize: 16 }}>Unisex</h6>
              </div>
            </div>
            <div style={{ marginBottom: "-7px" }} className="row">
              <div className="col-3">
                <p style={{ fontSize: 15 }}>Applicable users :</p>
              </div>
              <div className="col-6">
                <h6 style={{ fontSize: 16 }}>Adult</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col d-block ms-auto">
            <button onClick={IncCartValue} className="btn btn-danger me-3">
              Add to Cart
            </button>
            <button onClick={goToStartNowPage} className="btn btn-danger">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecificProductDetails;
