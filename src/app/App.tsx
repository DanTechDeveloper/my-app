import AuthLayout from "../layouts/AuthLayout";
import { Routes, Route } from "react-router";
import LoginPage from "../pages/Login";
import AdminPage from "../pages/Dashboard/Admin";
export default function App() {
  debugger;
  return (
    <>
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route index element={<LoginPage/>}/>
          <Route path="login" element={<LoginPage/>}/>
          <Route path="/admin" element={<AdminPage/>}/>
        </Route>
      </Routes>
    </>
  );
}
