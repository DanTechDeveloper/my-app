import { Outlet, useNavigate, useLocation } from "react-router-dom";
export default function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  const handleClick = () => {
    navigate(isAdmin ? "/login" : "/admin"); // or "/register"
  };
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
              className="bg-[#166534] hover:bg-[#15803d] text-[#ffffff] text-xs font-bold py-2 px-4 rounded-md transition-colors duration-200 ml-4 flex items-center gap-2"
              onClick={handleClick}
            >
              <span className="material-symbols-outlined text-[16px]">
                {isAdmin ? "school" : "admin_panel_settings"}
              </span>
              {isAdmin ? "Login as Student" : "Login as Admin"}
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
