"use client";

import { Menu, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

interface HeaderProps {
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const router = useRouter();

  const handleLogout = () => {

    localStorage.removeItem("token");

    router.push("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-[#F8F5F2] border-b border-[#E5E5E5] z-40">
      <div className="h-full px-4 lg:px-6 flex items-center justify-between">
        
        {/* Botão menu mobile + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-6 h-6 text-[#1C2635]" />
          </button>

          <div className="flex items-center gap-2">
            <div 
              className="text-[#00C26A] text-2xl lg:text-3xl"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
            >
              103%
            </div>
          </div>
        </div>

        {/* Botão Sair */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-[#3A3F47] hover:text-[#00C26A] transition-colors"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          <span className="hidden sm:inline">Sair</span>
          <LogOut className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
