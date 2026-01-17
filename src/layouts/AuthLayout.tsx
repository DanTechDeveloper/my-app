import { Outlet,useNavigate } from "react-router-dom";
const navigate = useNavigate();
export default function AuthLayout() {
  return (
    <>
      <div className="bg-[#051a12] text-slate-200 min-h-screen overflow-hidden">
        <header className="bg-[#062016] h-16 w-full flex items-center justify-between px-8 border-b border-[#143d2e]">
          <div className="flex items-center gap-2 text-[#f8fafc] font-bold text-lg">
            <span className="material-symbols-outlined text-[#22c55e]">
              sports_kabaddi
            </span>
            <span>
              UNIVERSITY <span className="text-[#22c55e]">INTRAMURALS</span>
            </span>
          </div>
          <nav className="flex items-center gap-6 text-[#94a3b8] text-sm">
            <button
              className="w-full h-3.5 bg-[#166534] hover:bg-[#15803d] text-white font-bold py-3 px-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              type="submit"
              onClick={()=> navigate("/admin")}
            >
              <p className="p-3">Login As Admin</p>
            </button>
          </nav>
        </header>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-104px)] bg-[#051a12]">
          <Outlet />
        </div>
        <footer className="bg-[#061a12] h-10 w-full flex items-center justify-center gap-8 text-[#475569] text-xs border-t border-[#143d2e]">
          <span>© 2024 University Athletic Department</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
              Server: Production-US-East
            </span>
            <span>Version 4.2.0-stable</span>
          </div>
        </footer>
      </div>
    </>
  );
}
