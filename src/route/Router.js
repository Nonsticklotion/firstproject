import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../component/header/navbar";

function Router() {
  const x = "<div>5</div>";
  return (
    <Routes>
      <Route path="/" element={x} />
      <Route path="/home" element={<Navbar/>} />
      <Route path="/builder" element={x} />
      <Route path="/choosebuild" element={x} />
    </Routes>
  );
}

export default Router;
