import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Dashboard", icon: "dashboard", path: "/dashboard" },
    { label: "Leagues", icon: "emoji_events", path: "/dashboard/leagues" },
    { label: "Teams", icon: "groups", path: "/dashboard/teams" },
    { label: "Schedules", icon: "calendar_month", path: "/dashboard/schedules" },
    { label: "Registrations", icon: "person_search", path: "/dashboard/registrations" },
    { label: "Reports", icon: "assessment", path: "/dashboard/reports" },
  ];

  const handleOnClick = () => {
    navigate("/admin");
  }
  return (
    <>
      <aside className="w-64 bg-[#062016] border-r border-[#143d2e] flex flex-col p-4 shrink-0">
        <div className="flex items-center gap-2 text-[#f8fafc] font-bold text-lg mb-8 px-2">
          
          <span>
            SACLI <span className="text-[#22c55e] white">INTRAMURALS</span>
          </span>
        </div>
        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            debugger;
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-left ${
                  isActive
                    ? "bg-[#113a2b] text-white"
                    : "text-[#94a3b8] hover:bg-[#113a2b] hover:text-white"
                }`}
              >
                <span className="text-xl material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
        <div className="mt-auto pt-4 border-t border-[#143d2e]">
          <button
            onClick={() => navigate("/dashboard/settings")}
            className={`flex items-center gap-3 px-4 py-3 transition-colors w-full text-left ${
              location.pathname === "/dashboard/settings"
                ? "text-white"
                : "text-[#94a3b8] hover:text-white"
            }`}
          >
            <span className="text-xl material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </button>
          <div className="mt-4 p-4 bg-[#0c2a1f] rounded-xl border border-[#1a4a38]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#166534] flex items-center justify-center text-xs font-bold">
                AD
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-xs font-bold text-white truncate">Admin User</p>
                <p className="text-[10px] text-[#94a3b8] truncate">
                  Director of Athletics
                </p>
              </div>
              <button onClick={handleOnClick} className="text-[#94a3b8] hover:text-white cursor-pointer">
                <span className="text-lg material-symbols-outlined">logout</span>
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
