import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import AdminLogin from "./admin/adminLogin/AdminLogin";
import PrivateRoute from "./admin/adminLogin/PrivateRoute";
import AdminLayout from "./admin/dashboard";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
            <Footer />
          </>
        }
      />

      <Route path="/admin/login" element={<AdminLogin />} />

      <Route element={<PrivateRoute />}>
        <Route path="/admin/dashboard" element={<AdminLayout />} />
      </Route>
    </Routes>
  );
}
