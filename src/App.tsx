export default function App() {
  return (
    <>
      <aside className="w-64 bg-sidebar-bg text-white flex flex-col justify-between py-6 shrink-0 shadow-2xl">
        <div className="px-6 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-deep-teal text-2xl">
                sports_soccer
              </span>
            </div>
            <div>
              <h1 className="text-lime-light text-lg font-bold leading-tight uppercase tracking-wider">
                UniSports
              </h1>
              <p className="text-pale-green/60 text-[10px] font-medium uppercase">
                Intramural Hub
              </p>
            </div>
          </div>
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-primary text-deep-teal shadow-md"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="text-sm font-bold">Dashboard</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-pale-green/80 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">groups</span>
              <span className="text-sm font-medium">My Teams</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-pale-green/80 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">trophy</span>
              <span className="text-sm font-medium">Leagues</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-pale-green/80 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_today</span>
              <span className="text-sm font-medium">Schedule</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-pale-green/80 transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">leaderboard</span>
              <span className="text-sm font-medium">Standings</span>
            </a>
            <a
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/10 text-pale-green/80 transition-colors mt-4"
              href="#"
            >
              <span className="material-symbols-outlined">settings</span>
              <span className="text-sm font-medium">Settings</span>
            </a>
          </nav>
        </div>
        <div className="px-6">
          <button className="w-full py-3 bg-lime-light hover:bg-white rounded-lg text-deep-teal text-sm font-bold transition-all shadow-lg">
            Create a Team
          </button>
        </div>
      </aside>
    </>
  );
}
