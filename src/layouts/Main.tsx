import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div className="flex flex-col h-screen items-center bg-zinc-50 font-sans dark:bg-black">
      <Navbar />
      <div className="flex w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
