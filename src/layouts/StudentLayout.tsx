import Header from "../components/student/Header";
import Footer from "../components/student/Footer";
export default function StudentLayout() {
  return (
    <>
      <div className="flex flex-col min-h-screen w-screen bg-[#020617] text-slate-100 overflow-x-hidden">
        <div className="w-full bg-[#dc2626] text-white py-2 px-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest animate-pulse sticky top-0 z-[60]">
          <span className="material-symbols-outlined text-sm">sensors</span>
          Live Match Tracking Active
        </div>
        <Header />
        <Footer/>
      </div>
    </>
  );
}
