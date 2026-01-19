export default function Footer() {
  return (
    <>
      <footer className="bg-[#061a12] h-10 w-full flex items-center justify-center gap-8 text-[#475569] text-xs border-t border-[#143d2e]">
        <span>© 2024 University Athletic Department</span>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]"></span>
            Server: Production-US-East
          </span>
          <span>Version 4.2.0-stable</span>
        </div>
      </footer>
    </>
  );
}
