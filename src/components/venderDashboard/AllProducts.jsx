import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT_OF_VENDER } from "../../graphql/Query";
import { DELETE_PRODUCT } from "../../graphql/Mutation";

const AllProducts = () => {
  const venderToken = localStorage.getItem("venderToken");

  const venderId = localStorage.getItem("venderId");

  const { data } = useQuery(GET_ALL_PRODUCT_OF_VENDER, {
    variables: { venderId: venderId },
  });
  console.log(data);

  const [deleteProduct] = useMutation(DELETE_PRODUCT, {
    refetchQueries: [GET_ALL_PRODUCT_OF_VENDER],
  });

  const DeleteHandler = (itmeId) => {
    deleteProduct({
      variables: {
        productId: itmeId,
      },
    });
  };

  return (
    <>
      <h5>All Products</h5>
      <div className="row">
        {data?.getAllProductOfVender.map((product, index) => (
          <div className="col-md-5" key={index}>
            <div className="card">
              <img
                src={
                  "https://hariom-bucket.s3.ap-south-1.amazonaws.com/" +
                  product.image[0]
                }
                className="card-img-top"
                alt="..."
                height={250}
              />
              <div className="card-body">
                <p className="card-text">
                  Product Name : <b>{product.productName}</b>{" "}
                </p>
                <p className="card-text">
                  Product Desctiption : <b>{product.productDescription}</b>
                </p>
                <p className="card-text">
                  Product Price : <b>{product.productPrice}</b>
                </p>
                <p className="card-text">
                  Product Category : <b>{product.productCategory}</b>
                </p>

                <button
                  className="btn btn-danger"
                  onClick={() => DeleteHandler(product.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
