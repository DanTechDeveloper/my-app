export default function Header() {
  return (
    <>
      <header className="h-16 bg-[#062016] border-b border-[#143d2e] flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="font-semibold text-white">System Overview</h2>
          <span className="px-2 py-0.5 bg-[#166534] text-[#22c55e] text-[10px] font-bold rounded uppercase tracking-wider">
            Live
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="material-symbols-outlined text-[#94a3b8] absolute left-3 top-1/2 -translate-y-1/2 text-lg">
              search
            </span>
            <input
              className="bg-[#0c2a1f] border border-[#143d2e] rounded-md pl-10 pr-4 py-1.5 text-sm text-slate-200 focus:outline-none focus:border-[#22c55e] w-64 transition-all"
              placeholder="Search data..."
              type="text"
            />
          </div>
          <button className="w-10 h-10 flex items-center justify-center text-[#94a3b8] hover:text-white relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-[#062016]"></span>
          </button>
          <button className="bg-[#166534] hover:bg-[#15803d] text-[#ffffff] text-xs font-bold py-2 px-4 rounded-md transition-colors duration-200 flex items-center gap-2">
            <span className="material-symbols-outlined text-[16px]">add</span>
            Create League
          </button>
        </div>
      </header>
    </>
  );
}
