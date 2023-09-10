import { useRef, useState } from "react";
import {
  Form,
  Row,
  Col,
  Container,
  Card,
  Button,
  Table,
  Spinner,
} from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import uniqid from "uniqid";
import AWS from "aws-sdk";
import { useMutation } from "@apollo/client";
import { CREATE_PRODUCT } from "../../graphql/Mutation";
import { GET_ALL_PRODUCT } from "../../graphql/Query";

const ID = "AKIA6GB4RFKTFTDLNJFT";
const SECRET = "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";
const BUCKET_NAME = "hariom-bucket";

const Addproducts = () => {
  const notify = () =>
    toast.success("🦄 Product Added successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [addproducts, { loading }] = useMutation(CREATE_PRODUCT, {
    refetchQueries: [{ query: GET_ALL_PRODUCT }],
  });

  const venderToken = localStorage.getItem("venderToken");

  const venderId = localStorage.getItem("venderId");

  const uploadFunction = (file, fileName, bucketName) => {
    return new Promise((resolve, reject) => {
      const s3 = new AWS.S3({
        accessKeyId: ID,
        secretAccessKey: SECRET,
      });
      const params = {
        Bucket: bucketName,
        Key: fileName,
        Body: file,
      };
      s3.upload(params, function (err, data) {
        if (err) {
          reject(err);
        } else {
          resolve(fileName);
        }
      });
    });
  };

  const [validated, setValidated] = useState(false);
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  // const [images, setImages] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  const [imageLoading, setImageLoading] = useState(false);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
    setImageLoading(false);
  };

  const handleUploadImage = async () => {
    if (selectedImage) {
      setImageLoading(true);
      try {
        const uniqueId = uniqid();
        const idProofExtension = selectedImage.name.match(new RegExp("[^.]+$"));
        const idProofFileName = uniqueId + "-idproof." + idProofExtension[0];

        console.log("Uploading image:", idProofFileName);

        const idProofImageName = await uploadFunction(
          selectedImage,
          idProofFileName,
          BUCKET_NAME
        );

        console.log("Image uploaded successfully:", idProofImageName);

        setImages([...images, idProofImageName]);

        setSelectedImage(null);
        fileInputRef.current.value = "";
        setImageLoading(false);
      } catch (err) {
        console.error("Error uploading image:", err);
      }
    }
  };

  const [category, setCategory] = useState("Choose Category");

  function handleSelectForCategory(e) {
    const value = e.target.value;
    setCategory(value);
  }

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(false);
      event.preventDefault();
      try {
        addproducts({
          variables: {
            productInput: {
              productName: productName,
              productPrice: productPrice,
              productDescription: productDescription,
              vender: venderId,
              image: images,
              productCategory: category,
            },
          },
        }).then(() => {
          setProductName("");
          setProductPrice("");
          setProductDescription("");
          setImages([]);
          setCategory("Choose Category");
          // alert("Product Added Successfully");
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <h5>Add Products</h5>

      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        className="bg-body-secondary p-3 rounded mt-3"
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setProductName(e.target.value)}
              value={productName}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setProductPrice(e.target.value)}
              value={productPrice}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setProductDescription(e.target.value)}
              value={productDescription}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mt-4 mb-4">
          <Col md={12}>
            <h6 className="mb-3 complaintText">Categories</h6>
            <Form.Select
              aria-label=" select Category"
              onChange={handleSelectForCategory}
              value={category}
            >
              <option>Choose Category</option>
              <option>Agriculture & Food </option>
              <option>Apparel & Accessories </option>
              <option>Arts & Crafts </option>
              <option>Auto, Motorcycle Parts & Accessories </option>
              <option>Bags, Cases & Boxes </option>
              <option>Building Materials </option>
              <option>Chemical Products </option>
              <option>Computer Products </option>
              <option>Construction & Decoration </option>
              <option>Consumer Electronics </option>
              <option>Consumer Goods </option>
              <option>Electrical & Electronics </option>
              <option>Electronics & Household Electrical Appliances </option>
              <option>Energy Resources </option>
              <option>Food </option>
              <option>Furniture </option>
              <option>Gifts </option>
              <option>Hardware & Tools </option>
              <option>Health & Medicine </option>
              <option>Home Decorations </option>
              <option>Industrial Equipment & Components </option>
              <option>Instruments & Meters </option>
              <option>Light Industry & Daily Use </option>
              <option>Lighting Equipment </option>
              <option>Lights & Lighting </option>
              <option>Machinery </option>
              <option>Manufacturing & Processing Machinery </option>
              <option>Medicines, Medical Devices and Health Products </option>
              <option>Metallurgy, Mineral & Energy </option>
              <option>Office Supplies </option>
              <option>
                Office Supplies, Cases & Bags, and Recreation Products{" "}
              </option>
              <option>Packaging & Printing </option>
              <option>Security & Protection </option>
              <option>Shoes </option>
              <option>Sporting Goods & Recreation </option>
              <option>Textile </option>
              <option>Textiles & Garments </option>
              <option>Tools & Hardware </option>
              <option>Toys Service </option>
              <option>Transportation </option>
              <option>Vehicles & Spare Parts </option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mt-4 mb-4">
          <Col md={12} className="pt-3 pb-3">
            <h6 className="complaintText mb-3">Product Images</h6>
            {images.length !== 0 ? (
              <Table bordered style={{ fontSize: 12 }}>
                <thead>
                  <tr>
                    <th>S.NO.</th>
                    <th>image</th>
                    <th>status</th>
                  </tr>
                </thead>
                <tbody>
                  {images &&
                    images.map((image, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{image}</td>
                        <td style={{ color: "green" }}>uploaded</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            ) : (
              ""
            )}

            <Form.Group as={Col} md="12" className="d-flex align-items-center">
              <Form.Control
                ref={fileInputRef}
                type="file"
                onChange={handleImageChange}
              />
              {imageLoading ? (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                <Button
                  style={{
                    padding: "5px 10px",
                    background: "#FF5748",
                    border: "none",
                    marginLeft: "10px",
                  }}
                  variant="danger"
                  onClick={handleUploadImage}
                >
                  Upload
                </Button>
              )}
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" onClick={notify} className="btn btn-danger">
          Add product
          <ToastContainer />
        </Button>
      </Form>
    </>
  );
};

export default Addproducts;
