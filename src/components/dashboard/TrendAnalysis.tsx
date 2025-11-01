import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const generateTrendData = () => {
  const months = ["May", "Jun", "Jul", "Aug", "Sep", "Oct"];
  return months.map((month, i) => ({
    month,
    availability: 75 - i * 3 + Math.random() * 5,
    usage: 60 + i * 2 + Math.random() * 5,
    efficiency: 82 + i * 1.5 + Math.random() * 3,
    precipitation: 45 - i * 4 + Math.random() * 8
  }));
};

interface TrendAnalysisProps {
  timeRange: string;
}

const TrendAnalysis = ({ timeRange }: TrendAnalysisProps) => {
  const data = generateTrendData();

  return (
    <div className="w-full overflow-x-auto">
      <ResponsiveContainer width="100%" height={300} minWidth={300}>
        <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="month" 
          stroke="hsl(var(--muted-foreground))"
          tick={{ fontSize: 12 }}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          tick={{ fontSize: 12 }}
          label={{ value: 'Percentage (%)', angle: -90, position: 'insideLeft', style: { fontSize: 12 } }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px",
            fontSize: "12px"
          }}
          formatter={(value: number) => `${value.toFixed(1)}%`}
        />
        <Legend wrapperStyle={{ fontSize: '12px' }} />
        <Line
          type="monotone"
          dataKey="availability"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          name="Water Availability"
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
        <Line
          type="monotone"
          dataKey="usage"
          stroke="hsl(var(--destructive))"
          strokeWidth={3}
          name="Water Usage"
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
        <Line
          type="monotone"
          dataKey="efficiency"
          stroke="hsl(var(--secondary))"
          strokeWidth={3}
          name="Distribution Efficiency"
          dot={{ r: 5 }}
          activeDot={{ r: 7 }}
        />
        <Line
          type="monotone"
          dataKey="precipitation"
          stroke="hsl(var(--accent))"
          strokeWidth={2}
          strokeDasharray="5 5"
          name="Precipitation Trend"
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
    </div>
  );
};

export default TrendAnalysis;
