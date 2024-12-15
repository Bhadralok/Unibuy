import { Outlet } from "react-router-dom";
import Header from "../Components/Header.jsx";
import Footer from "../Components/Footer.jsx";
export default function AppLayout() {
  return (
    <div className="w-full ">
      <Header />
      <main className="w-full h-screen relative ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
