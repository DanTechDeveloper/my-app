import Dashboard from "./Dashboard";
import { useState } from "react";
export default function Admin() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <div className="bg-background-light dark:bg-background-dark h-screen flex items-center justify-center">
        <div className="w-full max-w-[440px] flex flex-col items-center">
          {/* <!-- Login Card --> */}
          <div className="login-card w-full p-10 rounded-xl shadow-2xl flex flex-col gap-6 border border-white/20">
            <div className="flex flex-col gap-1">
              <h2 className="text-[#013237] text-xl font-bold">Sign In</h2>
              <p className="text-[#013237]/70 text-sm">
                Enter your credentials to manage competitions.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              {/* <!-- Admin Email --> */}
              <div className="flex flex-col gap-2">
                <label className="text-[#013237] text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    alternate_email
                  </span>
                  Admin Email
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg border-2 border-[#013237]/10 bg-white/50 text-[#013237] focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#013237]/40"
                  placeholder="admin@university.edu"
                  type="email"
                />
              </div>
              {/* <!-- Password --> */}
              <div className="flex flex-col gap-2">
                <label className="text-[#013237] text-sm font-semibold flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">
                    lock
                  </span>
                  Password
                </label>
                <div className="relative">
                  <input
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#013237]/10 bg-white/50 text-[#013237] focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-[#013237]/40 pr-12"
                    placeholder="••••••••"
                    //   required=""
                    type="password"
                  />
                  <button
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#013237]/50 hover:text-[#013237]"
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- Action Button --> */}
              <button
                className="w-full py-4 bg-primary hover:bg-[#3d8c5d] text-white font-bold rounded-lg shadow-md transition-all active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
                type="submit"
              >
                <span>Admin Access</span>
                <span className="material-symbols-outlined">login</span>
              </button>
            </form>
            <div className="flex flex-col items-center gap-3 mt-2">
              <a
                className="text-[#013237]/60 hover:text-[#013237] text-sm font-medium transition-colors border-b border-transparent hover:border-[#013237]/30"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>
          {/* <!-- Footer Links --> */}
          <div className="mt-8 flex items-center justify-between w-full px-2">
            <a
              className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-medium group"
              href="#"
            >
              <span className="material-symbols-outlined text-base group-hover:-translate-x-1 transition-transform">
                arrow_back
              </span>
              Return to Student Login
            </a>
            <div className="flex gap-4">
              <span className="text-white/20 text-xs">v2.4.1-stable</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
