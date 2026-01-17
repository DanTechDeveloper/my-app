export default function LoginForm() {
  return (
    <>
      <form>
        <div className="mb-1">
          <label className="block text-[#94a3b8] text-xs font-semibold uppercase tracking-wider mb-2 ml-1">
            Administrator ID / Email
          </label>
          <input
            className="w-full bg-[#061a12] border border-[#1e3a2f] rounded-lg p-3 text-white focus:outline-none focus:border-[#22c55e] transition-all mb-4 placeholder:text-slate-600"
            placeholder="name@university.edu"
            type="text"
          />
        </div>
        <div className="mb-1">
          <div className="flex items-center justify-between px-1 mb-2">
            <label className="text-[#94a3b8] text-xs font-semibold uppercase tracking-wider">
              Password
            </label>
            <a className="text-[#22c55e] text-xs hover:underline" href="#">
              Forgot password?
            </a>
          </div>
          <input
            className="w-full bg-[#061a12] border border-[#1e3a2f] rounded-lg p-3 text-white focus:outline-none focus:border-[#22c55e] transition-all mb-4 placeholder:text-slate-600"
            placeholder="••••••••"
            type="password"
          />
        </div>
        <div className="flex items-center gap-3 px-1 mb-8">
          <input
            className="w-4 h-4 rounded bg-[#061a12] border-[#1e3a2f] text-[#166534] focus:ring-[#166534] focus:ring-offset-[#0c2a1f]"
            id="remember"
            type="checkbox"
          />
          <label
            className="text-sm text-[#94a3b8] cursor-pointer select-none"
            htmlFor="remember"
          >
            Remember this device
          </label>
        </div>
        <button
          className="w-full bg-[#166534] hover:bg-[#15803d] text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          type="submit"
        >
          <span className="text-xl material-symbols-outlined">login</span>
          Sign In
        </button>
      </form>
    </>
  );
}
