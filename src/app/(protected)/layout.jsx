"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import {
  FaHome,
  FaBed,
  FaBook,
  FaUsers,
  FaChartBar,
  FaHistory,
  FaUser,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "Dashboard",
      path: "/dashboard",
      icon: <FaHome />,
    },
    {
      id: 2,
      name: "Rooms",
      path: "/rooms",
      icon: <FaBed />,
    },
    {
      id: 3,
      name: "Bookings",
      path: "/bookings",
      icon: <FaBook />,
    },

    {
      id: 5,
      name: "Reports",
      path: "/reports",
      icon: <FaChartBar />,
    },
    {
      id: 6,
      name: "History",
      path: "/history",
      icon: <FaHistory />,
    },
    {
      id: 7,
      name: "Profile",
      path: "/profile",
      icon: <FaUser />,
    },
    {
      id: 8,
      name: "Logout",
      path: "/",
      icon: <FaSignOutAlt />,
    },
  ]);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (!mounted) {
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 flex flex-col border-r border-slate-200 bg-white">
          <div className="p-6 border-b border-slate-200">
            <h1 className="text-2xl font-bold text-slate-900">CheckInn</h1>
          </div>
          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-3">
              {menu.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    className={`flex items-center px-4 py-3 text-sm font-medium transition-colors rounded-md ${
                      pathname === item.path
                        ? "bg-slate-100 text-slate-900 border border-slate-300"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  >
                    <span className="mr-4 text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="flex-1 bg-slate-50">
          <div className="p-6">{children}</div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col border-r border-slate-200 bg-white transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">CheckInn</h1>
            <button
              onClick={closeSidebar}
              className="lg:hidden p-1 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            >
              <FaTimes className="h-5 w-5" />
            </button>
          </div>
        </div>
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-3">
            {menu.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.path}
                  onClick={closeSidebar}
                  className={`flex items-center px-4 py-3 text-sm font-medium transition-colors rounded-md ${
                    pathname === item.path
                      ? "bg-slate-100 text-slate-900 border border-slate-300"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="mr-4 text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64">
        {/* Mobile header */}
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-3 fixed top-0 left-0 right-0 z-30">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-100"
            >
              <FaBars className="h-5 w-5" />
            </button>
            <h1 className="text-lg font-semibold text-slate-900">CheckInn</h1>
            <div className="w-9" /> {/* Spacer for centering */}
          </div>
        </div>

        <main className="bg-slate-50 min-h-screen lg:min-h-0">
          <div className="pt-16 lg:pt-0 lg:p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
