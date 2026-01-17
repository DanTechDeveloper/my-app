interface Button {
  type: "submit" | "reset" | "button";
  label: string;
  span?: string;
}
export default function Button({ type, label,span }: Button) {
  return (
    <>
  
        <button
          className="w-full bg-[#166534] hover:bg-[#15803d] text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
          type={type}
        >
          <span className="text-xl material-symbols-outlined">{span}</span>
          {label}
        </button>
    </>
  );
}
