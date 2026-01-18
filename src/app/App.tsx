import AuthLayout from "../layouts/AuthLayout";
import { Routes, Route } from "react-router";
import LoginPage from "../pages/Auth/Login";
import AdminPage from "../pages/Auth/Admin";
export default function App() {
  return (
    <>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </>
  );
}
