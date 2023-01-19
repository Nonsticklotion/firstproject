import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../component/auth/loginForm";
import RegisterForm from "../component/auth/registerForm";
import Footer from "../component/layout/Footer/Footer";
import Navbar from "../component/layout/header/Navbar";
import Builder from "../component/builder/Builder";
import Product from "../component/allproduct/Product"
import Allproduct from "../component/allproduct/Allproduct"

function Router() {
  const x = "<div>Hi</div>";
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={x} />
        <Route path="/home" element={x} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/product" element={<Product/>}>
          <Route path="/product:id" element={<Allproduct/>} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/user" element={x}>
          <Route path="edit" element={x} />
          <Route path="profile/:id" element={x} />
          <Route path="yourcart" element={x} />
        </Route>
        <Route path="/adminhome" element={x}>
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
