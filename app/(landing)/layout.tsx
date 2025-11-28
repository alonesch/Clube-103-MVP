import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./landing.css";

export const metadata: Metadata = {
  title: "Clube 103%",
  description: "Acesso ao Clube 103%",
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return <div className="landing-root">{children}</div>;
}