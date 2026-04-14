import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Toaster position="top-center" />
      <Navbar />
      <main className="min-h-[calc(100vh-450px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;