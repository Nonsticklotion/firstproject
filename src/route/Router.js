import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../component/layout/Footer/Footer";
import LoginForm from "../component/auth/loginForm";
import RegisterForm from "../component/auth/registerForm";

function Router() {
  const x = "<div>Hi</div>";
  return (
    <Routes>
      <Route path="/" element={x} />
      <Route path="/home" element={x} />
      <Route path="/builder" element={x} />
      <Route path="/choosebuild" element={x} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/user" element={x}>
        <Route path="edit" element={x}/>
        <Route path="profile/:id" element={x}/>
        <Route path="yourcart" element={x}/>
      </Route>
      <Route path="/adminhome" element={x}>
        <Route path="" element={x} />
        <Route path="request" element={x} />
        <Route path="suggestion" element={x} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default Router;
