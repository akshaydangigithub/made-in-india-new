import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepageComponents/HomePage";
import ProDetailsMain from "./components/productDetailsComponent/ProDetailsMain";
import SpecifiProductMain from "./components/specificProduct/specificProductMain";
import CartMain from "./components/cartComponent/CartMain";
import AboutUs from "./components/aboutUs/AboutUs";
import Login from "./components/login/UserLogin";
import AdminPanel from "./components/adminPanel/SuperAdminDashboard";
import SuperAdminDashboardView from "./components/adminPanel/SuperAdminDashboardView";
import UserRegister from "./components/register/UserRegister";
import User from "./components/userDashboard/UserDashboard";
import CategoryPageMain from "./components/categoryPage/CategoryPageMain";
import Contact from "./components/contact/Contact";
import StartNow from "./components/startNow/StartNow";
import AdminLogin from "./components/adminPanel/adminLogin";
import PreLogin from "./components/login/prelogin/PreLogin";
import SellerLogin from "./components/login/SellerLogin";
import PreRegister from "./components/register/preRegister/PreRegister";
import SellerRegister from "./components/register/SellerRegister";
import AllUsers from "./components/adminPanel/AllUsers";
import AllSuppliers from "./components/adminPanel/AllSuppliers";
import VenderDashboard from "./components/venderDashboard/VenderDashboard";
import VenderDashboardView from "./components/venderDashboard/VenderDashboardView";
import AllProducts from "./components/venderDashboard/AllProducts";
import Addproducts from "./components/venderDashboard/Addproducts";
import ContactDetails from "./components/venderDashboard/ContactDetails";
import DeliveredOrders from "./components/venderDashboard/DeliveredOrders";
import PendingOrders from "./components/venderDashboard/PendingOrders";
import AcceptedOrders from "./components/venderDashboard/AcceptedOrders";
import RejectedOrders from "./components/venderDashboard/RejectedOrders";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/productDetails" element={<ProDetailsMain />} />
          <Route path="/userDashboard" element={<User />} />
          <Route path="/categories" element={<CategoryPageMain />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/startNow" element={<StartNow />} />
          <Route path="/adminLogin" element={<AdminLogin />} />

          <Route
            path="/productDetails/specificProduct"
            element={<SpecifiProductMain />}
          />
          <Route path="/productDetails/cart" element={<CartMain />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/userLogin" element={<Login />} />
          <Route path="/sellerLogin" element={<SellerLogin />} />
          <Route path="prelogin" element={<PreLogin />} />
          <Route path="/userRegister" element={<UserRegister />} />
          <Route path="/sellerRegister" element={<SellerRegister />} />
          <Route path="/preRegister" element={<PreRegister />} />
          <Route path="/adminPanel" element={<AdminPanel />}>
            <Route
              path="superAdminDashboardView"
              element={<SuperAdminDashboardView />}
            />
            <Route path="allusers" element={<AllUsers />} />
            <Route path="allSuppliers" element={<AllSuppliers />} />
          </Route>

          <Route path="/venderDashboard" element={<VenderDashboard />}>
            <Route
              path="venderDashboardView"
              element={<VenderDashboardView />}
            />
            <Route path="allproducts" element={<AllProducts />} />
            <Route path="addproducts" element={<Addproducts />} />
            <Route path="contact-details" element={<ContactDetails />} />
            <Route path="delivered-orders" element={<DeliveredOrders />} />
            <Route path="pending-orders" element={<PendingOrders />} />
            <Route path="accepted-orders" element={<AcceptedOrders />} />
            <Route path="rejected-orders" element={<RejectedOrders />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
