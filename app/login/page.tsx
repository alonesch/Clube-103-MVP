"use client"

import type React from "react"

import { useState } from "react"
import { Logo103 } from "@/modules/login/components/logo-103"
import { Button } from "@/modules/ui/button"
import { Input } from "@/modules/ui/input"
import { Label } from "@/modules/ui/label"
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { ChevronLeft } from "lucide-react"
import { useRouter } from "next/navigation"


export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    //provisorio
    localStorage.setItem("token", "mock-token")

    router.push("/dashboard")
    
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F5F2] px-4 py-8">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="rounded-2xl border border-[#E5E0DB] bg-white/80 px-6 py-10 backdrop-blur-sm sm:px-10">
          {/* Back Button */}
          <button
          onClick={() => router.push("/")}
          className="mb-6 flex items-center text-[#0B0F12]/60 hover:text-[#0B0F12] transition-colors"
          arial-label="Voltar"
          >
            <ChevronLeft className=" h-5 w-5" />
          </button>
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <Logo103 />
          </div>

          {/* Title */}
          <h1
            className="mb-8 text-center text-xl font-semibold text-[#0B0F12] sm:text-2xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Entrar no Clube 103%
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-[#0B0F12]">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  
                  autoComplete="email"
                  autoCorrect="off"
                  autoCapitalize="none"
                  spellCheck={false}
                  inputMode="email"
                  
                  className="h-12 rounded-xl border-[#E5E0DB] bg-[#F8F5F2] pl-10 text-[#0B0F12] placeholder:text-[#9CA3AF] focus:border-[#00C26A] focus:ring-[#00C26A]"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-[#0B0F12]">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 rounded-xl border-[#E5E0DB] bg-[#F8F5F2] pl-10 pr-10 text-[#0B0F12] placeholder:text-[#9CA3AF] focus:border-[#00C26A] focus:ring-[#00C26A]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6B7280] transition-colors hover:text-[#0B0F12]"
                  aria-label={showPassword ? "Esconder senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="h-12 w-full rounded-xl bg-[#00C26A] text-base font-semibold text-white transition-all hover:bg-[#00A85A] focus:ring-2 focus:ring-[#00C26A] focus:ring-offset-2"
            >
              Acessar minha conta
            </Button>
          </form>

          {/* Forgot Password Link */}
          <div className="mt-6 text-center">
            <a href="#" className="text-sm font-medium text-[#6B7280] transition-colors hover:text-[#00C26A]">
              Esqueci minha senha
            </a>
          </div>
        </div>

        {/* Footer Notice */}
        <p className="mt-6 text-center text-xs text-[#9CA3AF]">
          Ao entrar você concorda com nossos{" "}
          <a href="#" className="underline transition-colors hover:text-[#00C26A]">
            termos
          </a>{" "}
          e{" "}
          <a href="#" className="underline transition-colors hover:text-[#00C26A]">
            políticas
          </a>
          .
        </p>
      </div>
    </main>
  )
}
