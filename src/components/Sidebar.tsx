import { NavLink } from "react-router";

export default function Sidebar(){
    const getLinkClass = ({ isActive }: { isActive: boolean }) =>
        `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
            isActive
            ? "bg-primary text-deep-teal shadow-md"
            : "hover:bg-white/10 text-pale-green/80"
        }`;

        
        
    return <>
    <aside className="flex flex-col justify-between w-64 py-6 text-white shadow-2xl bg-sidebar-bg shrink-0">
        <div className="flex flex-col gap-8 px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center rounded-lg size-10 bg-primary">
              <span className="text-2xl material-symbols-outlined text-deep-teal">
                sports_soccer
              </span>
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-wider uppercase text-lime-light">
                UniSports
              </h1>
              <p className="text-pale-green/60 text-[10px] font-medium uppercase">
                Intramural Hub
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <NavLink to="/" end className={getLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined">dashboard</span>
                  <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                    Dashboard
                  </span>
                </>
              )}
            </NavLink>
            <NavLink to="/my-teams" className={getLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined">groups</span>
                  <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                    My Teams
                  </span>
                </>
              )}
            </NavLink>
            <NavLink to="/leagues" className={getLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined">trophy</span>
                  <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                    Leagues
                  </span>
                </>
              )}
            </NavLink>
            <NavLink to="/schedule" className={getLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined">calendar_today</span>
                  <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                    Schedule
                  </span>
                </>
              )}
            </NavLink>
            <NavLink to="/standings" className={getLinkClass}>
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined">leaderboard</span>
                  <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                    Standings
                  </span>
                </>
              )}
            </NavLink>
            <NavLink to="/settings" className={(props) => `${getLinkClass(props)} mt-4`}>
              {({ isActive }) => (
                <>
                  <span className="material-symbols-outlined">settings</span>
                  <span className={`text-sm ${isActive ? "font-bold" : "font-medium"}`}>
                    Settings
                  </span>
                </>
              )}
            </NavLink>
          </nav>
        </div>
        <div className="px-6">
          <button className="w-full py-3 text-sm font-bold transition-all rounded-lg shadow-lg bg-lime-light hover:bg-white text-deep-teal">
            Create a Team
          </button>
        </div>
      </aside>
    </>
}