import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useMemo } from "react";

interface County {
  name: string;
  rainfallMm: number;
  reservoirPercent: number;
  soilMoisturePercent: number;
}

interface RegionalComparisonProps {
  counties: County[];
}

const RegionalComparison = ({ counties }: RegionalComparisonProps) => {
  const data = useMemo(() => {
    // Take top 10 counties by risk or all if less than 10
    return counties.slice(0, 10).map(county => ({
      name: county.name.length > 12 ? county.name.substring(0, 12) + '...' : county.name,
      rainfall: county.rainfallMm,
      reservoir: county.reservoirPercent,
      soil: county.soilMoisturePercent
    }));
  }, [counties]);

  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis 
          dataKey="name" 
          stroke="hsl(var(--muted-foreground))"
          angle={-45}
          textAnchor="end"
          height={80}
          fontSize={11}
        />
        <YAxis stroke="hsl(var(--muted-foreground))" />
        <Tooltip
          contentStyle={{
            backgroundColor: "hsl(var(--card))",
            border: "1px solid hsl(var(--border))",
            borderRadius: "8px"
          }}
        />
        <Legend />
        <Bar 
          dataKey="rainfall" 
          fill="hsl(var(--primary))" 
          name="Rainfall (mm)"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="reservoir" 
          fill="hsl(var(--secondary))" 
          name="Reservoir (%)"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="soil" 
          fill="hsl(var(--accent))" 
          name="Soil Moisture (%)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RegionalComparison;
