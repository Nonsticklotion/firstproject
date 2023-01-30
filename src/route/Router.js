import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../component/auth/loginForm";
import RegisterForm from "../component/auth/registerForm";
import Footer from "../component/layout/Footer/Footer";
import Navbar from "../component/layout/header/Navbar";
import Builder from "../component/builder/Builder";
import Product from "../component/allproduct/Product";
import Allproduct from "../component/allproduct/Allproduct";
import Cpu from "../component/allproduct/product/Cpu";
import Case from "../component/allproduct/product/Case";
import CpuCooler from "../component/allproduct/product/CpuCooler";
import InternalDrive from "../component/allproduct/product/InternalDrive";
import Memory from "../component/allproduct/product/Memory";
import Motherboard from "../component/allproduct/product/Motherboard";
import PowerSupply from "../component/allproduct/product/PowerSupply";
import VideoCard from "../component/allproduct/product/VideoCard";
import UserPage from "../component/userPage/UserPage";
import YourCart from "../component/userPage/YourCart";
import AllAdd from "../component/addproduct/AllAdd";
import AddCpu from "../component/addproduct/product/AddCpu";
import AddCpuCooler from "../component/addproduct/product/AddCpuCooler";
import AddMotherboard from "../component/addproduct/product/AddMotherboard";
import AddMemory from "../component/addproduct/product/AddMemory";
import AddInternalDrive from "../component/addproduct/product/AddInternalDrive";
import AddVideoCard from "../component/addproduct/product/AddVideoCard";
import AddCase from "../component/addproduct/product/AddCase";
import AddPowerSupply from "../component/addproduct/product/AddPowerSupply";
import AdminOrder from "../component/addproduct/AdminOrder";
import AdminFirstPage from "../component/addproduct/AdminFirstPage";
import BfHome from "../component/BfHome";
import Home from "../component/Home";

function Router() {
  // const x = "<div>Hi</div>";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BfHome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/product">
          <Route path="" element={<Allproduct />} />
          <Route path="cpu" element={<Cpu />} />
          <Route path="cpu-cooler" element={<CpuCooler />} />
          <Route path="motherboard" element={<Motherboard />} />
          <Route path="memory" element={<Memory />} />
          <Route path="internal-drive" element={<InternalDrive />} />
          <Route path="video-card" element={<VideoCard />} />
          <Route path="case" element={<Case />} />
          <Route path="power-supply" element={<PowerSupply />} />
          <Route path=":id" element={<Product />} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/user">
          <Route path=":id" element={<UserPage />} />
          <Route path="yourcart" element={<YourCart />} />
        </Route>
        <Route path="/adminhome">
          <Route path="" element={<AdminFirstPage/>} />
          <Route path="addproduct">
            <Route path="" element={<AllAdd />} />
            <Route path="cpu" element={<AddCpu />} />
            <Route path="cpu-cooler" element={<AddCpuCooler />} />
            <Route path="motherboard" element={<AddMotherboard />} />
            <Route path="memory" element={<AddMemory />} />
            <Route path="internal-drive" element={<AddInternalDrive />} />
            <Route path="video-card" element={<AddVideoCard />} />
            <Route path="case" element={<AddCase />} />
            <Route path="power-supply" element={<AddPowerSupply />} />
          </Route>
          <Route path="order" element={<AdminOrder />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
