export function Logo103({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <span className="text-3xl font-bold tracking-tight text-[#0B0F12]" style={{ fontFamily: "Poppins, sans-serif" }}>
        Login
      </span>
      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#00C26A]">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
    </div>
  )
}
