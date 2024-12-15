import { Outlet } from "react-router-dom";
import LoginHeader from "../Components/LoginHeader.jsx";
import Footer from "../Components/Footer.jsx";
export default function AppLayout() {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <LoginHeader />
      <main className="w-fit h-full]">
        <Outlet />
      </main>
      <footer className="h-full w-full bg-red-500">
        <Footer />
      </footer>
    </div>
  );
}
