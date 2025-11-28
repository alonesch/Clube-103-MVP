"use client";

import { Folder, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const router = useRouter();

  const menuItems = [
    { id: "contents", label: "Conteúdos", icon: Folder, active: true },
    { id: "logout", label: "Sair", icon: LogOut, active: false },
  ];

  const handleItemClick = (id: string) => {
    if (id === "logout") {
      localStorage.removeItem("token");
      router.push("/login");
      return;
    }

    onClose();
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block fixed left-0 top-16 w-[220px] h-[calc(100vh-4rem)] bg-white border-r border-[#E5E5E5]">
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      item.active
                        ? "bg-[#F8F5F2] text-[#00C26A] border-l-4 border-[#00C26A]"
                        : "text-[#3A3F47] hover:bg-[#F8F5F2]"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed left-0 top-16 w-[280px] h-[calc(100vh-4rem)] bg-white border-r border-[#E5E5E5] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      item.active
                        ? "bg-[#F8F5F2] text-[#00C26A] border-l-4 border-[#00C26A]"
                        : "text-[#3A3F47] hover:bg-[#F8F5F2]"
                    }`}
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}
