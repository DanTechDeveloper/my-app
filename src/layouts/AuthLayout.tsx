import { Outlet} from "react-router-dom";
import Header from "../components/auth/Header";
import Footer from "../components/auth/Footer";
export default function AuthLayout() {
  
  return (
    <>
      <div className="bg-[#051a12] text-slate-200 min-h-screen overflow-hidden">
        <Header/>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-104px)] bg-[#051a12]">
          <Outlet />
        </div>
        <Footer/>
      </div>
    </>
  );
}
