export const metadata = {
  title: "Clube 103%",
  description: "Plataforma de conteúdos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased bg-[#F8F5F2]">
        {children}
      </body>
    </html>
  );
}
