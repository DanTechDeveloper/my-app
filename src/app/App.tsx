export default function App() {
  return (
    <>
      <main className="flex-1 flex items-center justify-center px-4 py-12 relative z-10">
        <div className="w-full max-w-[480px] animate-fade-in">
          {/* <!-- Login Card --> */}
          <div className="bg-white dark:bg-brand-dark p-8 md:p-12 rounded-xl shadow-2xl border border-brand-dark/5 dark:border-white/5 relative overflow-hidden">
            {/* <!-- Card Header --> */}
            <div className="text-center mb-10">
              <h1 className="text-black dark:text-white text-4xl font-heading font-extrabold tracking-tight mb-3">
                Welcome Back
              </h1>
              <p className="text-black/60 dark:text-white/60 text-base font-normal">
                Fuel your competitive spirit. Sign in to your account.
              </p>
            </div>
            {/* <!-- Login Form --> */}
            <form className="space-y-6">
              {/* <!-- Email Field --> */}
              <div className="flex flex-col gap-2">
                <label className="text-black dark:text-white text-sm font-semibold uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 text-xl">
                    mail
                  </span>
                  <input
                    className="form-input flex w-full rounded-xl text-black dark:text-white border border-brand-dark/20 dark:border-white/20 bg-background-light/30 dark:bg-background-dark/30 h-14 pl-12 pr-4 placeholder:text-black/30 dark:placeholder:text-white/30 text-base focus:ring-primary focus:border-primary transition-all"
                    placeholder="name@university.edu"
                    type="email"
                  />
                </div>
              </div>
              {/* <!-- Password Field --> */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <label className="text-black dark:text-white text-sm font-semibold uppercase tracking-wider">
                    Password
                  </label>
                  <a
                    className="text-primary text-sm font-bold hover:underline"
                    href="#"
                  >
                    Forgot?
                  </a>
                </div>
                <div className="relative flex">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary/60 text-xl z-10">
                    lock
                  </span>
                  <input
                    className="form-input flex w-full rounded-xl text-black dark:text-white border border-brand-dark/20 dark:border-white/20 bg-background-light/30 dark:bg-background-dark/30 h-14 pl-12 pr-12 placeholder:text-black/30 dark:placeholder:text-white/30 text-base focus:ring-primary focus:border-primary transition-all"
                    placeholder="••••••••"
                    type="password"
                  />
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 dark:text-white/40 hover:text-primary transition-colors"
                    type="button"
                  >
                    <span className="material-symbols-outlined">
                      visibility
                    </span>
                  </button>
                </div>
              </div>
              {/* <!-- Primary Action --> */}
              <div className="pt-4">
                <button className="w-full flex items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:bg-primary/90 hover:-translate-y-1 active:translate-y-0 transition-all group">
                  <span>Sign In to Portal</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
            {/* <!-- Footer CTA --> */}
            <div className="mt-10 pt-8 border-t border-brand-dark/5 dark:border-white/5 text-center">
              <p className="text-black/60 dark:text-white/60 font-medium">
                New to the league?
                <a
                  className="text-black dark:text-white font-bold ml-1 hover:text-primary transition-colors border-b-2 border-primary/30 hover:border-primary"
                  href="#"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
          {/* <!-- Social/Institutional Proof (Optional) --> */}
          <div className="mt-8 flex justify-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-1 font-heading text-xs uppercase tracking-widest text-black dark:text-white">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>
              University Secure
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
