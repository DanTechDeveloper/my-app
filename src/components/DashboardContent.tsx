export default function DashboardContent() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-4 border-b border-deep-teal/10 bg-white/20 backdrop-blur-md">
        <div className="flex items-center flex-1 gap-6">
          <h2 className="hidden text-xl font-black tracking-tight uppercase text-deep-teal lg:block">
            Overview
          </h2>
          <div className="relative w-full max-w-md">
            <span className="absolute -translate-y-1/2 material-symbols-outlined left-3 top-1/2 text-deep-teal/50">
              search
            </span>
            <input
              className="w-full py-2 pl-10 pr-4 text-sm transition-all border-none rounded-lg bg-white/50 text-deep-teal placeholder:text-deep-teal/40 focus:ring-2 focus:ring-primary/50"
              placeholder="Find leagues, teams, or results..."
              type="text"
            />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 transition-colors rounded-full text-deep-teal/60 hover:bg-primary/20">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute w-2 h-2 rounded-full top-2 right-2 bg-primary ring-2 ring-lime-light"></span>
          </button>
          <button className="p-2 transition-colors rounded-full text-deep-teal/60 hover:bg-primary/20">
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
          <div className="w-px h-8 mx-2 bg-deep-teal/10"></div>
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="text-right">
              <p className="text-xs font-bold text-deep-teal">Alex Johnson</p>
              <p className="text-[10px] text-deep-teal/60 uppercase font-semibold">
                Sophomore
              </p>
            </div>
            <div
              className="bg-center bg-cover border-2 rounded-full size-10 border-primary"
              data-alt="Student profile headshot"
            ></div>
          </div>
        </div>
      </header>
      <div className="flex flex-col flex-1 gap-8 p-8 overflow-y-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex items-start gap-4 p-6 border shadow-sm bg-white/60 backdrop-blur-sm rounded-xl border-white/50">
            <div className="p-3 text-white rounded-lg bg-primary">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-deep-teal/60">
                Next Game
              </p>
              <h3 className="mt-1 text-lg font-bold text-deep-teal">
                7:00 PM Tonight
              </h3>
              <p className="text-sm text-primary font-bold mt-0.5">
                vs. Rockets • Court 2
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 border shadow-sm bg-white/60 backdrop-blur-sm rounded-xl border-white/50">
            <div className="p-3 rounded-lg bg-deep-teal/10 text-deep-teal">
              <span className="material-symbols-outlined">military_tech</span>
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-deep-teal/60">
                League Rank
              </p>
              <h3 className="mt-1 text-lg font-bold text-deep-teal">
                #4 in West Div
              </h3>
              <p className="text-sm text-deep-teal/40 font-bold mt-0.5">
                8W - 2L - 1D
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-6 border shadow-sm bg-white/60 backdrop-blur-sm rounded-xl border-white/50">
            <div className="p-3 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">app_registration</span>
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider uppercase text-deep-teal/60">
                Active Registrations
              </p>
              <h3 className="mt-1 text-lg font-bold text-deep-teal">3 Seasons</h3>
              <p className="text-sm text-deep-teal/40 font-bold mt-0.5">
                Soccer, B-Ball, Flag Football
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <div className="space-y-4 xl:col-span-2">
            <div className="flex items-center justify-between px-2">
              <h2 className="flex items-center gap-2 text-xl font-bold text-deep-teal">
                <span className="material-symbols-outlined text-primary">
                  event_upcoming
                </span>
                Upcoming Games
              </h2>
              <button className="text-sm font-black tracking-tighter uppercase text-primary hover:underline">
                Full Schedule
              </button>
            </div>
            <div className="overflow-hidden border divide-y bg-white/40 backdrop-blur-sm rounded-xl border-white/50 divide-deep-teal/5">
              <div className="flex items-center gap-4 p-5 transition-colors hover:bg-white/60">
                <div className="flex items-center -space-x-3">
                  <div
                    className="bg-gray-200 bg-center bg-cover border-2 border-white rounded-full shadow-sm size-12"
                    data-alt="Wildcats team logo"
                  ></div>
                  <div
                    className="bg-gray-300 bg-center bg-cover border-2 border-white rounded-full shadow-sm size-12"
                    data-alt="Eagles team logo"
                  ></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-deep-teal">Wildcats vs. Eagles</h4>
                  <p className="text-sm text-deep-teal/60 flex items-center gap-1.5 font-medium">
                    <span className="text-sm material-symbols-outlined">
                      location_on
                    </span>{" "}
                    Main Gym A •{" "}
                    <span className="font-black text-primary">7:00 PM</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-primary/20 text-primary text-[10px] font-black rounded uppercase ring-1 ring-primary/20">
                    Confirmed
                  </span>
                  <button className="px-4 py-2 text-sm font-bold transition-all rounded-lg shadow-sm bg-white/80 hover:bg-primary hover:text-white text-deep-teal">
                    Details
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 transition-colors hover:bg-white/60">
                <div className="flex items-center -space-x-3">
                  <div
                    className="bg-gray-200 bg-center bg-cover border-2 border-white rounded-full shadow-sm size-12"
                    data-alt="Wildcats team logo"
                  ></div>
                  <div
                    className="bg-gray-300 bg-center bg-cover border-2 border-white rounded-full shadow-sm size-12"
                    data-alt="Bulls team logo"
                  ></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-deep-teal">Wildcats vs. Bulls</h4>
                  <p className="text-sm text-deep-teal/60 flex items-center gap-1.5 font-medium">
                    <span className="text-sm material-symbols-outlined">
                      location_on
                    </span>{" "}
                    North Field 3 •{" "}
                    <span className="text-deep-teal/40">Tomorrow, 5:30 PM</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-amber-500/10 text-amber-600 text-[10px] font-black rounded uppercase">
                    Pending
                  </span>
                  <button className="px-4 py-2 text-sm font-bold transition-all rounded-lg shadow-sm bg-white/80 hover:bg-primary hover:text-white text-deep-teal">
                    Details
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 p-5 transition-colors hover:bg-white/60">
                <div className="flex items-center -space-x-3">
                  <div
                    className="bg-gray-200 bg-center bg-cover border-2 border-white rounded-full shadow-sm size-12"
                    data-alt="Wildcats team logo"
                  ></div>
                  <div
                    className="bg-gray-300 bg-center bg-cover border-2 border-white rounded-full shadow-sm size-12"
                    data-alt="Striker team logo"
                  ></div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-deep-teal">
                    Wildcats vs. Strikers
                  </h4>
                  <p className="text-sm text-deep-teal/60 flex items-center gap-1.5 font-medium">
                    <span className="text-sm material-symbols-outlined">
                      location_on
                    </span>{" "}
                    Arena Center •{" "}
                    <span className="text-deep-teal/40">Thu, 8:00 PM</span>
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button className="px-4 py-2 text-sm font-bold transition-all rounded-lg shadow-sm bg-white/80 hover:bg-primary hover:text-white text-deep-teal">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 px-2 text-lg font-bold tracking-wide uppercase text-deep-teal">
                <span className="material-symbols-outlined text-primary">
                  campaign
                </span>
                Announcements
              </h3>
              <div className="flex flex-col gap-3">
                <div className="p-4 border-l-4 shadow-lg bg-sidebar-bg text-pale-green rounded-xl border-primary">
                  <p className="text-[10px] text-primary font-black uppercase mb-1">
                    Alert • 2h ago
                  </p>
                  <h5 className="text-sm font-bold text-white">
                    Rain Delay: Outdoor Soccer
                  </h5>
                  <p className="mt-1 text-xs text-pale-green/70">
                    All games on North Field are moved to the indoor facility
                    tonight.
                  </p>
                </div>
                <div className="p-4 border shadow-sm bg-white/60 backdrop-blur-sm rounded-xl border-white/50">
                  <p className="text-[10px] text-deep-teal/50 font-black uppercase mb-1">
                    League Update • 1d ago
                  </p>
                  <h5 className="text-sm font-bold text-deep-teal">
                    Playoff Seeding Released
                  </h5>
                  <p className="mt-1 text-xs text-deep-teal/60">
                    Check the standings to see where your team ranks for next
                    week's playoffs.
                  </p>
                </div>
              </div>
            </section>
            <section className="space-y-4">
              <h3 className="flex items-center gap-2 px-2 text-lg font-bold tracking-wide uppercase text-deep-teal">
                <span className="material-symbols-outlined text-primary">
                  emoji_events
                </span>
                Top Scorers
              </h3>
              <div className="overflow-hidden border shadow-sm bg-white/40 backdrop-blur-sm rounded-xl border-white/50">
                <table className="w-full text-sm text-left">
                  <thead className="bg-deep-teal/5 text-deep-teal/40 text-[10px] uppercase font-black tracking-widest">
                    <tr>
                      <th className="px-4 py-3">Player</th>
                      <th className="px-4 py-3 text-right">PTS</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-deep-teal/5">
                    <tr className="transition-colors hover:bg-white/30">
                      <td className="flex items-center gap-3 px-4 py-3">
                        <div className="flex items-center justify-center text-xs font-bold text-white rounded-full shadow-sm size-8 bg-primary">
                          MA
                        </div>
                        <div>
                          <p className="font-bold text-deep-teal">Mike Adams</p>
                          <p className="text-[10px] text-deep-teal/40 uppercase font-black">
                            Bulls
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-black text-right text-primary">
                        24.5
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-white/30">
                      <td className="flex items-center gap-3 px-4 py-3">
                        <div className="flex items-center justify-center text-xs font-bold rounded-full size-8 bg-primary/20 text-primary">
                          SK
                        </div>
                        <div>
                          <p className="font-bold text-deep-teal">Sarah King</p>
                          <p className="text-[10px] text-deep-teal/40 uppercase font-black">
                            Wildcats
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-black text-right text-primary">
                        21.2
                      </td>
                    </tr>
                    <tr className="transition-colors hover:bg-white/30">
                      <td className="flex items-center gap-3 px-4 py-3">
                        <div className="flex items-center justify-center text-xs font-bold rounded-full size-8 bg-deep-teal/10 text-deep-teal">
                          JR
                        </div>
                        <div>
                          <p className="font-bold text-deep-teal">Jordan Reed</p>
                          <p className="text-[10px] text-deep-teal/40 uppercase font-black">
                            Eagles
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-black text-right text-primary">
                        19.8
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
