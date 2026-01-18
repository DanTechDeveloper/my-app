export default function DashboardContent() {
  return (
    <>
      <div className="grid grid-cols-4 gap-6 p-8">
        <div className="bg-[#0c2a1f] border border-[#1a4a38] rounded-xl p-6 flex flex-col justify-between shadow-xl min-h-[140px]">
          <div className="flex items-start justify-between">
            <span className="text-[#94a3b8] text-xs font-bold uppercase tracking-wider">
              Active Leagues
            </span>
            <div className="w-10 h-10 bg-[#166534]/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#22c55e]">
                trophy
              </span>
            </div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">12</div>
            <div className="flex items-center gap-1 text-[10px] text-[#22c55e]">
              <span className="text-xs material-symbols-outlined">
                trending_up
              </span>
              <span>+2 from last month</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0c2a1f] border border-[#1a4a38] rounded-xl p-6 flex flex-col justify-between shadow-xl min-h-[140px]">
          <div className="flex items-start justify-between">
            <span className="text-[#94a3b8] text-xs font-bold uppercase tracking-wider">
              Pending Registrations
            </span>
            <div className="w-10 h-10 bg-[#166534]/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#22c55e]">
                person_add
              </span>
            </div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">148</div>
            <div className="flex items-center gap-1 text-[10px] text-amber-500">
              <span className="text-xs material-symbols-outlined">pending</span>
              <span>Requires review</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0c2a1f] border border-[#1a4a38] rounded-xl p-6 flex flex-col justify-between shadow-xl min-h-[140px]">
          <div className="flex items-start justify-between">
            <span className="text-[#94a3b8] text-xs font-bold uppercase tracking-wider">
              Matches Today
            </span>
            <div className="w-10 h-10 bg-[#166534]/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#22c55e]">
                sports_soccer
              </span>
            </div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">24</div>
            <div className="flex items-center gap-1 text-[10px] text-[#94a3b8]">
              <span className="text-xs material-symbols-outlined">
                schedule
              </span>
              <span>Next game in 45m</span>
            </div>
          </div>
        </div>
        <div className="bg-[#0c2a1f] border border-[#1a4a38] rounded-xl p-6 flex flex-col justify-between shadow-xl min-h-[140px]">
          <div className="flex items-start justify-between">
            <span className="text-[#94a3b8] text-xs font-bold uppercase tracking-wider">
              Field Utilization
            </span>
            <div className="w-10 h-10 bg-[#166534]/20 rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-[#22c55e]">
                grid_view
              </span>
            </div>
          </div>
          <div>
            <div className="mb-1 text-3xl font-bold text-white">86%</div>
            <div className="w-full bg-[#143d2e] h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-[#22c55e] h-full w-[86%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-8 mb-8 bg-[#0c2a1f] border border-[#1a4a38] rounded-xl overflow-hidden shadow-2xl">
        <div className="bg-[#062016] p-4 flex items-center justify-between border-b border-[#143d2e]">
          <span className="text-xs font-bold tracking-wider uppercase text-slate-400">
            Recent Registrations
          </span>
          <button className="text-[#22c55e] text-xs font-semibold hover:underline">
            View All
          </button>
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-[#082319] border-b border-[#143d2e] text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <div className="w-1/4">Athlete Name</div>
          <div className="w-1/4">Sport / League</div>
          <div className="w-1/4">Team Status</div>
          <div className="w-1/6 text-right">Actions</div>
        </div>
        <div className="p-4 border-b border-[#143d2e] text-slate-100 flex items-center justify-between hover:bg-[#113a2b] transition-colors cursor-pointer">
          <div className="flex items-center w-1/4 gap-3">
            <div className="w-8 h-8 rounded bg-[#1e3a2f] flex items-center justify-center text-xs font-bold">
              JD
            </div>
            <div>
              <p className="text-sm font-medium">Jordan Davis</p>
              <p className="text-[10px] text-slate-400">ID: 2024-8842</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="text-sm">Flag Football</p>
            <p className="text-[10px] text-[#22c55e]">Men's Intramural A</p>
          </div>
          <div className="w-1/4">
            <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold">
              Pending Payment
            </span>
          </div>
          <div className="flex justify-end w-1/6 gap-2">
            <button className="p-1 hover:bg-[#166534] rounded transition-colors">
              <span className="text-lg material-symbols-outlined">
                check_circle
              </span>
            </button>
            <button className="p-1 transition-colors rounded hover:bg-red-900/40">
              <span className="text-lg material-symbols-outlined">cancel</span>
            </button>
          </div>
        </div>
        <div className="p-4 border-b border-[#143d2e] text-slate-100 flex items-center justify-between hover:bg-[#113a2b] transition-colors cursor-pointer">
          <div className="flex items-center w-1/4 gap-3">
            <div className="w-8 h-8 rounded bg-[#1e3a2f] flex items-center justify-center text-xs font-bold">
              SK
            </div>
            <div>
              <p className="text-sm font-medium">Sarah Kendrick</p>
              <p className="text-[10px] text-slate-400">ID: 2024-1102</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="text-sm">Sand Volleyball</p>
            <p className="text-[10px] text-[#22c55e]">Co-Ed Recreational</p>
          </div>
          <div className="w-1/4">
            <span className="px-2 py-1 rounded-full bg-[#166534]/20 text-[#22c55e] text-[10px] font-bold">
              Approved
            </span>
          </div>
          <div className="flex justify-end w-1/6 gap-2">
            <button className="p-1 hover:bg-[#166534] rounded transition-colors">
              <span className="text-lg material-symbols-outlined">
                check_circle
              </span>
            </button>
            <button className="p-1 transition-colors rounded hover:bg-red-900/40">
              <span className="text-lg material-symbols-outlined">cancel</span>
            </button>
          </div>
        </div>
        <div className="p-4 border-b border-[#143d2e] text-slate-100 flex items-center justify-between hover:bg-[#113a2b] transition-colors cursor-pointer">
          <div className="flex items-center w-1/4 gap-3">
            <div className="w-8 h-8 rounded bg-[#1e3a2f] flex items-center justify-center text-xs font-bold">
              MT
            </div>
            <div>
              <p className="text-sm font-medium">Marcus Thompson</p>
              <p className="text-[10px] text-slate-400">ID: 2024-5591</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="text-sm">Indoor Soccer</p>
            <p className="text-[10px] text-[#22c55e]">Men's Open</p>
          </div>
          <div className="w-1/4">
            <span className="px-2 py-1 rounded-full bg-[#166534]/20 text-[#22c55e] text-[10px] font-bold">
              Approved
            </span>
          </div>
          <div className="flex justify-end w-1/6 gap-2">
            <button className="p-1 hover:bg-[#166534] rounded transition-colors">
              <span className="text-lg material-symbols-outlined">
                check_circle
              </span>
            </button>
            <button className="p-1 transition-colors rounded hover:bg-red-900/40">
              <span className="text-lg material-symbols-outlined">cancel</span>
            </button>
          </div>
        </div>
        <div className="p-4 border-b border-[#143d2e] text-slate-100 flex items-center justify-between hover:bg-[#113a2b] transition-colors cursor-pointer">
          <div className="flex items-center w-1/4 gap-3">
            <div className="w-8 h-8 rounded bg-[#1e3a2f] flex items-center justify-center text-xs font-bold">
              EL
            </div>
            <div>
              <p className="text-sm font-medium">Elena Lopez</p>
              <p className="text-[10px] text-slate-400">ID: 2024-3329</p>
            </div>
          </div>
          <div className="w-1/4">
            <p className="text-sm">Pickleball Doubles</p>
            <p className="text-[10px] text-[#22c55e]">Competitive Tier 1</p>
          </div>
          <div className="w-1/4">
            <span className="px-2 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold">
              Incomplete
            </span>
          </div>
          <div className="flex justify-end w-1/6 gap-2">
            <button className="p-1 hover:bg-[#166534] rounded transition-colors">
              <span className="text-lg material-symbols-outlined">
                check_circle
              </span>
            </button>
            <button className="p-1 transition-colors rounded hover:bg-red-900/40">
              <span className="text-lg material-symbols-outlined">cancel</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
