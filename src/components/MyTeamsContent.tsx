export default function MyTeamsContent() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 border-b border-deep-teal/10 bg-white/20 backdrop-blur-md shrink-0">
        <div className="flex items-center flex-1 gap-8">
          <h2 className="text-2xl font-black tracking-tight uppercase text-deep-teal">
            My Teams
          </h2>
          <div className="relative flex w-full max-w-lg gap-2">
            <div className="relative flex-1">
              <span className="absolute -translate-y-1/2 material-symbols-outlined left-3 top-1/2 text-deep-teal/50">
                search
              </span>
              <input
                className="w-full py-2 pl-10 pr-4 text-sm transition-all border-none rounded-lg bg-white/50 text-deep-teal placeholder:text-deep-teal/40 focus:ring-2 focus:ring-primary/50"
                placeholder="Search your teams..."
                type="text"
              />
            </div>
            <select className="px-4 py-2 text-sm font-medium border-none rounded-lg cursor-pointer bg-white/50 text-deep-teal focus:ring-2 focus:ring-primary/50">
              <option>All Sports</option>
              <option>Soccer</option>
              <option>Flag Football</option>
              <option>Basketball</option>
              <option>Volleyball</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="text-right">
              <p className="text-xs font-bold text-deep-teal">Alex Johnson</p>
              <p className="text-[10px] text-deep-teal/60 uppercase font-semibold">
                Sophomore
              </p>
            </div>
            <div
              className="bg-center bg-cover border-2 rounded-full size-10 border-primary"
            ></div>
          </div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="flex-1 p-8 space-y-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black tracking-widest uppercase text-deep-teal/40">
              Active Directory (4 Teams)
            </h3>
            <div className="flex gap-2">
              <button className="p-2 transition-colors rounded-lg bg-pale-green text-deep-teal hover:bg-primary/20">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="p-2 transition-colors rounded-lg bg-white/40 text-deep-teal/40 hover:bg-primary/20">
                <span className="material-symbols-outlined">view_list</span>
              </button>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between p-5 transition-shadow border shadow-sm bg-pale-green rounded-2xl border-deep-teal/5 hover:shadow-md group">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center text-3xl font-bold size-16 rounded-xl bg-deep-teal text-lime-light">
                  W
                </div>
                <div>
                  <h4 className="text-xl font-bold text-deep-teal">
                    Wildcats - Flag Football
                  </h4>
                  <p className="text-sm font-medium text-deep-teal/60">
                    Division 2 • Tuesdays &amp; Thursdays
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex -space-x-2">
                      <div
                        className="bg-center bg-cover border-2 rounded-full size-8 border-pale-green"
                      ></div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-300 flex items-center justify-center text-[10px] font-bold">
                        JD
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-400 flex items-center justify-center text-[10px] font-bold">
                        MS
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-deep-teal/10 flex items-center justify-center text-[10px] font-bold text-deep-teal">
                        +8
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-teal/40 uppercase ml-2">
                      Mini-Roster
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-white/50 text-deep-teal text-[10px] font-black rounded-full uppercase mb-2">
                    Next Game
                  </span>
                  <p className="text-sm font-bold text-deep-teal">
                    Oct 24, 7:00 PM
                  </p>
                  <p className="text-xs font-bold text-primary">Stadium Field 3</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 font-bold text-white transition-all shadow-lg bg-primary hover:bg-deep-teal hover:text-lime-light rounded-xl">
                  View Team Hub
                  <span className="text-sm material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 transition-shadow border shadow-sm bg-pale-green rounded-2xl border-deep-teal/5 hover:shadow-md group">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center text-3xl font-bold size-16 rounded-xl bg-primary text-deep-teal">
                  S
                </div>
                <div>
                  <h4 className="text-xl font-bold text-deep-teal">
                    Strikers - Soccer
                  </h4>
                  <p className="text-sm font-medium text-deep-teal/60">
                    Elite League • Monday Nights
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex -space-x-2">
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-300 flex items-center justify-center text-[10px] font-bold">
                        AK
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-400 flex items-center justify-center text-[10px] font-bold">
                        LP
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-200 flex items-center justify-center text-[10px] font-bold text-deep-teal">
                        +12
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-teal/40 uppercase ml-2">
                      Mini-Roster
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-white/50 text-deep-teal text-[10px] font-black rounded-full uppercase mb-2">
                    Next Game
                  </span>
                  <p className="text-sm font-bold text-deep-teal">
                    Oct 23, 8:30 PM
                  </p>
                  <p className="text-xs font-bold text-primary">North Field B</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 font-bold text-white transition-all shadow-lg bg-primary hover:bg-deep-teal hover:text-lime-light rounded-xl">
                  View Team Hub
                  <span className="text-sm material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 transition-shadow border shadow-sm bg-pale-green rounded-2xl border-deep-teal/5 hover:shadow-md group">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center text-3xl font-bold size-16 rounded-xl bg-white/40 text-deep-teal">
                  B
                </div>
                <div>
                  <h4 className="text-xl font-bold text-deep-teal">
                    Bulls - Basketball
                  </h4>
                  <p className="text-sm font-medium text-deep-teal/60">
                    Rec League • Wednesday Nights
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex -space-x-2">
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-300 flex items-center justify-center text-[10px] font-bold">
                        TG
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-200 flex items-center justify-center text-[10px] font-bold text-deep-teal">
                        +5
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-teal/40 uppercase ml-2">
                      Mini-Roster
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-white/50 text-deep-teal text-[10px] font-black rounded-full uppercase mb-2">
                    Next Game
                  </span>
                  <p className="text-sm font-bold text-deep-teal">
                    Oct 25, 6:00 PM
                  </p>
                  <p className="text-xs font-bold text-primary">Main Gym Court 1</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 font-bold text-white transition-all shadow-lg bg-primary hover:bg-deep-teal hover:text-lime-light rounded-xl">
                  View Team Hub
                  <span className="text-sm material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-5 transition-shadow border shadow-sm bg-pale-green rounded-2xl border-deep-teal/5 hover:shadow-md group">
              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center text-3xl font-bold size-16 rounded-xl bg-deep-teal/5 text-deep-teal">
                  A
                </div>
                <div>
                  <h4 className="text-xl font-bold text-deep-teal">
                    Aces - Volleyball
                  </h4>
                  <p className="text-sm font-medium text-deep-teal/60">
                    Co-Ed League • Sundays
                  </p>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex -space-x-2">
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-300 flex items-center justify-center text-[10px] font-bold">
                        RM
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-400 flex items-center justify-center text-[10px] font-bold">
                        BJ
                      </div>
                      <div className="size-8 rounded-full border-2 border-pale-green bg-gray-200 flex items-center justify-center text-[10px] font-bold text-deep-teal">
                        +4
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-deep-teal/40 uppercase ml-2">
                      Mini-Roster
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-white/50 text-red-teal text-[10px] font-bold rounded-full uppercase mb-2 text-red-500">
                    BYE WEEK
                  </span>
                  <p className="text-sm font-bold text-deep-teal/40">
                    Next: Nov 01
                  </p>
                  <p className="text-xs font-bold text-primary/40">TBD</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 font-bold text-white transition-all shadow-lg bg-primary hover:bg-deep-teal hover:text-lime-light rounded-xl">
                  View Team Hub
                  <span className="text-sm material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <aside className="flex flex-col gap-6 p-6 overflow-y-auto border-l w-80 bg-white/30 backdrop-blur-sm border-deep-teal/10">
          <h3 className="flex items-center gap-2 text-lg font-bold tracking-wide uppercase text-deep-teal">
            <span className="material-symbols-outlined text-primary">
              notifications_active
            </span>
            Team Notifications
          </h3>
          <div className="space-y-4">
            <div className="p-4 border-l-4 shadow-sm bg-pale-green rounded-xl border-deep-teal">
              <p className="text-[10px] text-deep-teal/60 font-black uppercase mb-1">
                Soccer • 10m ago
              </p>
              <h5 className="text-sm font-bold text-deep-teal">
                New roster change
              </h5>
              <p className="mt-1 text-xs text-deep-teal/80">
                Marco Polo has joined the Strikers as a Substitute.
              </p>
            </div>
            <div className="p-4 border shadow-sm bg-white/60 rounded-xl border-white/50">
              <p className="text-[10px] text-deep-teal/40 font-black uppercase mb-1">
                Flag Football • 2h ago
              </p>
              <h5 className="text-sm font-bold text-deep-teal">Score Update</h5>
              <p className="mt-1 text-xs text-deep-teal/80">
                Wildcats won 24-12 against the Eagles in last night's game.
              </p>
            </div>
            <div className="p-4 border shadow-sm bg-white/60 rounded-xl border-white/50">
              <p className="text-[10px] text-deep-teal/40 font-black uppercase mb-1">
                Volleyball • 1d ago
              </p>
              <h5 className="text-sm font-bold text-deep-teal">
                Bye Week Confirmed
              </h5>
              <p className="mt-1 text-xs text-deep-teal/80">
                Aces have no game scheduled for this Sunday.
              </p>
            </div>
            <div className="p-4 border shadow-sm bg-white/60 rounded-xl border-white/50">
              <p className="text-[10px] text-deep-teal/40 font-black uppercase mb-1">
                Basketball • 2d ago
              </p>
              <h5 className="text-sm font-bold text-deep-teal">Uniform Update</h5>
              <p className="mt-1 text-xs text-deep-teal/80">
                Team jersey orders are ready for pickup at the student center.
              </p>
            </div>
          </div>
          <div className="p-4 mt-auto text-center bg-sidebar-bg rounded-xl">
            <p className="mb-3 text-xs font-medium text-pale-green">
              Want more updates?
            </p>
            <button className="w-full py-2 text-xs font-black tracking-tight uppercase rounded-lg bg-primary text-deep-teal">
              Notification Settings
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
