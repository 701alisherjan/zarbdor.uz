import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Admin Dashboard</h2>
      <button
        onClick={handleLogout}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
