import { PageTransition } from "../providers/PageTransition";
import type { Metadata } from "next";
import "./dashboard.css";

export const metadata: Metadata = {
  title: "Clube 103% | Dashboard",
  description: "Acesso ao conteúdo exclusivo",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageTransition>
      {children}
    </PageTransition>
  );
}
