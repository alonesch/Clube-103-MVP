import type React from "react"
import type { Metadata } from "next"
import { PageTransition } from "../providers/PageTransition"
import "./login.css"

export const metadata: Metadata = {
  title: "Clube 103% | Área do Aluno",
  description: "Acesse sua área exclusiva do Clube 103%",
}

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-[#F8F5F2] flex items-center justify-center px-4 py-8">
      <PageTransition>{children}</PageTransition>
    </div>
  );
}
