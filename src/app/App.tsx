import AuthLayout from "../layouts/AuthLayout";
import { Routes, Route } from "react-router";
import LoginPage from "../pages/Auth/Login";
import AdminPage from "../pages/Auth/Admin";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardContent from "../pages/Dashboard/DashboardContent";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardContent />} />
        </Route>
      </Routes>
    </>
  );
}
