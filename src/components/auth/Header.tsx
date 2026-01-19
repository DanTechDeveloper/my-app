import {useNavigate, useLocation} from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  const handleClick = () => {
    navigate(isAdmin ? "/login" : "/admin"); // or "/register"
  };
  return (
    <>
      <header className="bg-[#062016] h-16 w-full flex items-center justify-between px-8 border-b border-[#143d2e]">
        <div className="flex items-center gap-2 text-[#f8fafc] font-bold text-lg">
          <span className="material-symbols-outlined text-[#22c55e]">
            sports_kabaddi
          </span>
          <span>
            SACLI <span className="text-[#22c55e]">INTRAMURALS</span>
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
    </>
  );
}
