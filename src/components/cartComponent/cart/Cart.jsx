import React, { useContext, useState } from "react";
import { Table } from "react-bootstrap";
import { DataContext } from "../../../contextApi";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantity, setquantity] = useState(1);
  let [totalPrice, settotalPrice] = useState(0);

  const { cartData } = useContext(DataContext);
  console.log(cartData);

  cartData.map((data) => {
    let price = Number(data.price);
    return (totalPrice += price);
  });

  const IncQut = () => {
    setquantity(quantity + 1);
  };
  const DicQut = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <p>
            Inquiry Basket works like an online shopping cart in which you can
            add the companies and products you are interested in and send an
            inquiry to some or all of them.
          </p>
          <h5 className="mt-3">All Products Info.</h5>
          {cartData.length > 0 ? (
            <Table className="mt-3" bordered variant="light">
              <thead>
                <tr>
                  <th>S. No.</th>
                  <th>Products</th>
                  <th>The Price of Product</th>
                  <th>Purchase Qty</th>
                </tr>
              </thead>
              <tbody>
                {cartData &&
                  cartData.map((data, index) => (
                    <tr key={index}>
                      <td>1</td>
                      <td>
                        <div className="row">
                          <div className="col">
                            <img
                              src={data.image}
                              width={100}
                              height={100}
                              alt="alt"
                            />
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col">
                            <Link to="#">
                              Man Sport Campus Shoes Men <br /> Sneakers Men
                              Sport Shoes 2022
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td>{data.price}</td>
                      <td>
                        <div className="row">
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <button
                              onClick={DicQut}
                              className="btn btn-secondary"
                            >
                              -
                            </button>
                          </div>
                          <div className="col-6 d-flex align-items-center justify-content-center">
                            <h6>{quantity}</h6>
                          </div>
                          <div className="col-3 d-flex align-items-center justify-content-center">
                            <button
                              onClick={IncQut}
                              className="btn btn-secondary"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}

                <tr>
                  <td colSpan={12}>
                    <span className="d-flex align-items-center justify-content-end">
                      <p className="mt-2">
                        Total Price of Products : <b>$ {totalPrice}</b>
                      </p>
                    </span>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <h2 className="mt-5">You haven't select any product yet</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
