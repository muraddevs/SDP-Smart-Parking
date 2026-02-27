import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import RegisterVehicle from "./pages/RegisterVehicle";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import ParkingDetails from "./pages/ParkingDetails";

import AdminRoute from "./components/AdminRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/register" element={<Register />} />
      <Route path="/register-vehicle" element={<RegisterVehicle />} />
      <Route path="/profile" element={<Profile />} />

      {/* admin-only */}
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <AdminRoute>
            <Admin />
          </AdminRoute>
        }
      />

      {/* parking details: решим так — тоже только admin, раз main screen admin-only */}
      <Route
        path="/parking/:id"
        element={
          <AdminRoute>
            <ParkingDetails />
          </AdminRoute>
        }
      />
    </Routes>
  );
}