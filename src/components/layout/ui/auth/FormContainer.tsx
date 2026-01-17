import type { PropsWithChildren } from "react";
interface FormContainer {
  children : React.ReactNode,
  label? : string
}
export default function Form({children,label} : FormContainer){
    return <>
    <div className="w-[450px] bg-[#0c2a1f] p-10 rounded-xl border border-[#1a4a38] shadow-2xl">
         <div className="mb-8 text-center">
          <h1 className="mb-2 font-bold text-white t ext-2xl">Welcome Back {label}!</h1>
          <p className="text-[#94a3b8] text-sm">
            Access your intramural sports dashboard
          </p>
        </div>
        {children}
    </div>
    </>
}