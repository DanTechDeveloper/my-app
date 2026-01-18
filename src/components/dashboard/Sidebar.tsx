import {useNavigate} from "react-router-dom";
export default function Sidebar() {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate("/admin");
  }
  return (
    <>
      <aside className="w-64 bg-[#062016] border-r border-[#143d2e] flex flex-col p-4 shrink-0">
        <div className="flex items-center gap-2 text-[#f8fafc] font-bold text-lg mb-8 px-2">
          <span className="material-symbols-outlined text-[#22c55e]">
            sports_kabaddi
          </span>
          <span>
            UNI <span className="text-[#22c55e]">INTRA</span>
          </span>
        </div>
        <nav className="flex-1 space-y-1">
          <a
            className="flex items-center gap-3 px-4 py-3 bg-[#113a2b] text-white rounded-lg transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">dashboard</span>
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:bg-[#113a2b] hover:text-white rounded-lg transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">emoji_events</span>
            <span className="text-sm font-medium">Leagues</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:bg-[#113a2b] hover:text-white rounded-lg transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">groups</span>
            <span className="text-sm font-medium">Teams</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:bg-[#113a2b] hover:text-white rounded-lg transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">
              calendar_month
            </span>
            <span className="text-sm font-medium">Schedules</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:bg-[#113a2b] hover:text-white rounded-lg transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">person_search</span>
            <span className="text-sm font-medium">Registrations</span>
          </a>
          <a
            className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:bg-[#113a2b] hover:text-white rounded-lg transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">assessment</span>
            <span className="text-sm font-medium">Reports</span>
          </a>
        </nav>
        <div className="mt-auto pt-4 border-t border-[#143d2e]">
          <a
            className="flex items-center gap-3 px-4 py-3 text-[#94a3b8] hover:text-white transition-colors"
            href="#"
          >
            <span className="text-xl material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Settings</span>
          </a>
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
