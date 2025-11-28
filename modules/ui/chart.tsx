"use client"

import {
  Bar,
  BarChart,
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
  PieChart,
  Pie,
  Cell
} from "recharts"

import { cn } from "./utils"

// Tipagem genérica para os gráficos
export interface ChartProps {
  data: any[]
  xKey: string
  yKey: string
  color?: string
  height?: number
  className?: string
}

/* ----------------------- BAR CHART ----------------------- */

export function ChartBar({
  data,
  xKey,
  yKey,
  color = "#00C26A",
  height = 300,
  className
}: ChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={yKey} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ----------------------- LINE CHART ----------------------- */

export function ChartLine({
  data,
  xKey,
  yKey,
  color = "#00C26A",
  height = 300,
  className
}: ChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={yKey} stroke={color} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ----------------------- AREA CHART ----------------------- */

export function ChartArea({
  data,
  xKey,
  yKey,
  color = "#00C26A",
  height = 300,
  className
}: ChartProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={xKey} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey={yKey}
            stroke={color}
            fill={color}
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

/* ----------------------- PIE CHART ----------------------- */

export interface ChartPieProps {
  data: any[]
  nameKey: string
  valueKey: string
  colors?: string[]
  height?: number
  className?: string
}

export function ChartPie({
  data,
  nameKey,
  valueKey,
  colors = ["#00C26A", "#0B0F12", "#F8F5F2", "#FFB100"],
  height = 320,
  className
}: ChartPieProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Tooltip />
          <Legend />
          <Pie
            data={data}
            dataKey={valueKey}
            nameKey={nameKey}
            outerRadius={110}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={`slice-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
