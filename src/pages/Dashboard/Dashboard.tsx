import { Routes, Route } from "react-router";
import Sidebar from "../../components/layout/Sidebar";
import DashboardContent from "../../components/DashboardContent";
import MyTeamsContent from "../../components/MyTeamsContent";

export default function Dashboard() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex flex-col flex-1 overflow-hidden bg-linear-to-br from-lime-light to-pale-green">
        <Routes>
          <Route
            index
            element={<DashboardContent/>}
          />
          <Route
            path="my-teams"
            element={<MyTeamsContent/>}
          />
          <Route
            path="leagues"
            element={<div className="p-8">Leagues Content</div>}
          />
          <Route
            path="schedule"
            element={<div className="p-8">Schedule Content</div>}
          />
          <Route
            path="standings"
            element={<div className="p-8">Standings Content</div>}
          />
          <Route
            path="settings"
            element={<div className="p-8">Settings Content</div>}
          />
        </Routes>
      </main>
    </div>
  );
}
