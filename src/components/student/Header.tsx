import { useNavigate } from "react-router-dom";
export default function Header() {
  const navigate = useNavigate();
  const handleClick = () => navigate("/login");
  return (
    <>
      <nav className="sticky top-10 md:top-8 z-50 flex h-16 w-full items-center justify-between px-4 md:px-8 bg-[#062016] border-b border-[#143d2e] backdrop-blur-md bg-opacity-90">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-400">
            sports_kabaddi
          </span>
          <div className="text-emerald-400 font-black text-xl tracking-tight uppercase">
            SACLI <span className="text-white">INTRAMURALS</span>
          </div>
        </div>
        <div className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-wider">
          <a
            className="text-emerald-400 border-b-2 border-emerald-400 py-5"
            href="#"
          >
            Dashboard
          </a>
          <a
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            href="#"
          >
            Tournaments
          </a>
          <a
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            href="#"
          >
            Standings
          </a>
          <a
            className="text-slate-400 hover:text-emerald-400 transition-colors"
            href="#"
          >
            My Team
          </a>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-xs font-bold text-white">Alex Rivera</span>
            <span className="text-[10px] text-emerald-500 font-bold uppercase">
              Titans Captain
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-[#020617] font-black border-2 border-[#143d2e]">
            AR
          </div>
          <button
            className="bg-[#166534] hover:bg-[#15803d] text-[#ffffff] text-xs font-bold py-2 px-4 rounded-md transition-colors duration-200 ml-4 flex items-center gap-2"
            onClick={handleClick}
          >
            <span className="material-symbols-outlined text-[16px]">
              logout
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
