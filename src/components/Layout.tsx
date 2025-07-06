// src/components/Layout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Sidebar";
// import Nvabar from "./Nvabar";
import Navbar from "./NavBar";
import Navigation from "./Navigation";
import { History, MessageSquareDiff } from "lucide-react";

export default function Layout() {
  const location = useLocation();
  const showSidebar = location.pathname === "/chat";

  return (
    <div className="flex min-h-screen overflow-hidden">
      {showSidebar && (
        <Sidebar>
          <SidebarItem icon={<MessageSquareDiff size={20} />} text="New Chat" />
          <SidebarItem icon={<History size={20} />} text="History" />
        </Sidebar>
      )}

      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Navbar />
        <Navigation />
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
