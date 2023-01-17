import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../component/layout/Footer/Footer";
import LoginForm from "../component/auth/loginForm";
import RegisterForm from "../component/auth/registerForm";


function Router() {
  const x = "<div>Hi</div>";
  return (
    <Routes>
      <Route path="/" element={x} />
      <Route path="/home" element={<LoginForm/>} />
      <Route path="/builder" element={<RegisterForm/>} />
      <Route path="/choosebuild" element={x} />
    </Routes>
  );
}

export default Router;
