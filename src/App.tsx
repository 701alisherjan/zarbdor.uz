import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/pages/navbar/Navbar";
import Footer from "./components/pages/footer/Footer";
import AdminLogin from "./admin/adminLogin/AdminLogin";
import PrivateRoute from "./admin/adminLogin/PrivateRoute";
import AdminLayout from "./admin/dashboard";
import HomeDashboard from "./admin/sidebarItems/homeDashboard";
import LiveDashboard from "./admin/sidebarItems/liveDashboard";
import EndDashboard from "./admin/sidebarItems/endDashboard";
import TrendDashboard from "./admin/sidebarItems/trendDashboard";

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
        <Route
          path="/admin/dashboard/home-videos"
          element={<HomeDashboard />}
        />
        <Route path="/admin/dashboard/live-news" element={<LiveDashboard />} />
        <Route path="/admin/dashboard/latest-news" element={<EndDashboard />} />
        <Route path="/admin/dashboard/trending" element={<TrendDashboard />} />
      </Route>
    </Routes>
  );
}
