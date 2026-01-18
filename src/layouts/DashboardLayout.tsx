import Sidebar from "../components/dashboard/Sidebar";
import Header from "../components/dashboard/Header";
import Footer from "../components/dashboard/Footer";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
  return (
    <>
      <div className="h-screen w-screen bg-[#020617] overflow-hidden flex text-slate-200">
        <Sidebar />
        <div className="flex flex-col flex-1 h-full overflow-hidden">
          <Header />
          <div className="flex-1 overflow-y-auto bg-[#020617]">
            <Outlet/>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
