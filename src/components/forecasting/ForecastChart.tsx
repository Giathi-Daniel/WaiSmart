import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

interface ForecastChartProps {
  type: "shortage" | "rainfall" | "reservoir";
}

const ForecastChart = ({ type }: ForecastChartProps) => {
  // Generate 14-day forecast data
  const generateForecastData = () => {
    const days = Array.from({ length: 14 }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() + i);
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    });

    if (type === "shortage") {
      return days.map((day, i) => ({
        day,
        predicted: Math.max(10, 85 - (i * 4) + Math.random() * 10),
        confidence: 90 + Math.random() * 8,
        threshold: 40,
      }));
    } else if (type === "rainfall") {
      return days.map((day, i) => ({
        day,
        predicted: Math.max(0, 15 + Math.sin(i / 3) * 20 + Math.random() * 10),
        historical: Math.max(0, 20 + Math.sin(i / 3) * 15 + Math.random() * 8),
      }));
    } else {
      return days.map((day, i) => ({
        day,
        level: Math.max(20, 42 - (i * 2) + Math.random() * 8),
        capacity: 100,
        critical: 30,
      }));
    }
  };

  const data = generateForecastData();

  const getChartConfig = () => {
    if (type === "shortage") {
      return {
        dataKeys: [
          { key: "predicted", name: "Water Availability (%)", color: "hsl(var(--primary))" },
          { key: "threshold", name: "Critical Threshold", color: "hsl(var(--destructive))", strokeDasharray: "5 5" },
        ],
        yAxisLabel: "Water Availability (%)",
      };
    } else if (type === "rainfall") {
      return {
        dataKeys: [
          { key: "predicted", name: "Predicted Rainfall (mm)", color: "hsl(var(--primary))" },
          { key: "historical", name: "Historical Average", color: "hsl(var(--muted-foreground))", strokeDasharray: "3 3" },
        ],
        yAxisLabel: "Rainfall (mm)",
      };
    } else {
      return {
        dataKeys: [
          { key: "level", name: "Reservoir Level (%)", color: "hsl(var(--secondary))" },
          { key: "critical", name: "Critical Level", color: "hsl(var(--destructive))", strokeDasharray: "5 5" },
        ],
        yAxisLabel: "Level (%)",
      };
    }
  };

  const config = getChartConfig();

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorPredicted" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSecondary" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="day" 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            style={{ fontSize: '12px' }}
            label={{ value: config.yAxisLabel, angle: -90, position: 'insideLeft', style: { fill: 'hsl(var(--muted-foreground))' } }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Legend />
          {config.dataKeys.map((dataKey, index) => {
            if (dataKey.strokeDasharray) {
              return (
                <Line
                  key={dataKey.key}
                  type="monotone"
                  dataKey={dataKey.key}
                  stroke={dataKey.color}
                  strokeWidth={2}
                  strokeDasharray={dataKey.strokeDasharray}
                  name={dataKey.name}
                  dot={false}
                />
              );
            }
            return (
              <Area
                key={dataKey.key}
                type="monotone"
                dataKey={dataKey.key}
                stroke={dataKey.color}
                strokeWidth={3}
                fillOpacity={1}
                fill={index === 0 ? (type === "reservoir" ? "url(#colorSecondary)" : "url(#colorPredicted)") : "none"}
                name={dataKey.name}
              />
            );
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ForecastChart;
