import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../component/header/navbar";
import Footer from "../component/Footer/Footer";

function Router() {
  const x = "<div>5</div>";
  return (
    <Routes>
      <Route path="/" element={x} />
      <Route path="/home" element={<Navbar/>} />
      <Route path="/builder" element={<Footer/>} />
      <Route path="/choosebuild" element={x} />
    </Routes>
  );
}

export default Router;
