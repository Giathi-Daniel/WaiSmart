import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

interface SupplyDemandChartProps {
  timeRange: string;
}

const SupplyDemandChart = ({ timeRange }: SupplyDemandChartProps) => {
  const data = useMemo(() => {
    const days = timeRange === "7d" ? 7 : timeRange === "30d" ? 30 : 90;
    return Array.from({ length: days }, (_, i) => ({
      day: i + 1,
      supply: 850 + Math.sin(i * 0.3) * 150 + Math.random() * 50,
      demand: 750 + Math.cos(i * 0.2) * 100 + Math.random() * 80,
      capacity: 1000
    }));
  }, [timeRange]);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="supplyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="demandGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="hsl(var(--destructive))" stopOpacity={0.3} />
            <stop offset="95%" stopColor="hsl(var(--destructive))" stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="day" 
          stroke="hsl(var(--muted-foreground))"
          label={{ value: 'Days', position: 'insideBottom', offset: -5 }}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          label={{ value: 'Million Liters', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px"
          }}
          formatter={(value: number) => [`${value.toFixed(0)}M L`, '']}
        />
        <Legend />
        <Area
          type="monotone"
          dataKey="supply"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          fill="url(#supplyGradient)"
          name="Water Supply"
        />
        <Area
          type="monotone"
          dataKey="demand"
          stroke="hsl(var(--destructive))"
          strokeWidth={3}
          fill="url(#demandGradient)"
          name="Water Demand"
        />
        <Area
          type="monotone"
          dataKey="capacity"
          stroke="hsl(var(--secondary))"
          strokeWidth={2}
          strokeDasharray="5 5"
          fill="none"
          name="Max Capacity"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default SupplyDemandChart;
