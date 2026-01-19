import { Routes, Route } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import LoginPage from "../pages/Auth/Login";
import AdminPage from "../pages/Auth/Admin";
import DashboardContent from "../pages/Dashboard/DashboardContent";
import LeagueContent from "../pages/Dashboard/LeagueContent";
import TeamsContent from "../pages/Dashboard/TeamsContent";
import ScheduleContent from "../pages/Dashboard/ScheduleContent";
import Reports from "../pages/Dashboard/Reports";
import Registrations from "../pages/Dashboard/Registrations";

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
          <Route element={<DashboardContent/>}/>
          <Route path="leagues" element={<LeagueContent/>}/>
          <Route path="teams" element={<TeamsContent/>}/>
          <Route path="schedules" element={<ScheduleContent/>}/>
          <Route path="registrations" element={<Registrations/>}/>
          <Route path="reports" element={<Reports/>}/>
        </Route>
      </Routes>
    </>
  );
}
