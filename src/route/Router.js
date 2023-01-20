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

function Router() {
  const x = "<div>Hi</div>";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={x} />
        <Route path="/home" element={x} />
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
          <Route path=":id" element={x} />
          <Route path="yourcart" element={x} />
        </Route>
        <Route path="/adminhome">
          <Route path="" element={x} />
          <Route path="request" element={x} />
          <Route path="suggestion" element={x} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
