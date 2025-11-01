import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { Users, Droplets, TrendingUp, AlertCircle } from "lucide-react";

const allocationData = [
  { community: "Turkana North", allocated: 8500, used: 7800, population: 12000, status: "optimal" },
  { community: "Turkana South", allocated: 9200, used: 9100, population: 13500, status: "high" },
  { community: "Marsabit East", allocated: 6300, used: 5200, population: 8200, status: "optimal" },
  { community: "Marsabit West", allocated: 7100, used: 7400, population: 9800, status: "over" },
  { community: "Samburu Central", allocated: 5800, used: 4900, population: 7600, status: "optimal" },
  { community: "Wajir North", allocated: 10200, used: 9800, population: 15200, status: "high" },
];

const distributionData = [
  { name: "Domestic Use", value: 45, color: "hsl(var(--primary))" },
  { name: "Agriculture", value: 35, color: "hsl(var(--secondary))" },
  { name: "Livestock", value: 15, color: "hsl(var(--accent))" },
  { name: "Commercial", value: 5, color: "hsl(var(--muted))" },
];

const CommunityAllocation = () => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case "optimal":
        return <Badge className="bg-secondary/20 text-secondary border-secondary/40">Optimal</Badge>;
      case "high":
        return <Badge className="bg-accent/20 text-accent border-accent/40">High Usage</Badge>;
      case "over":
        return <Badge className="bg-destructive/20 text-destructive border-destructive/40">Over Limit</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Allocation Chart */}
      <Card className="p-6 lg:col-span-2 shadow-medium">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Water Allocation</h2>
          <p className="text-sm text-muted-foreground">Allocated vs actual usage by community (liters/day)</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={allocationData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="community" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Legend />
            <Bar dataKey="allocated" fill="hsl(var(--primary))" name="Allocated" radius={[8, 8, 0, 0]} />
            <Bar dataKey="used" fill="hsl(var(--secondary))" name="Used" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Distribution Pie Chart */}
      <Card className="p-6 shadow-medium">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-2">Usage Distribution</h2>
          <p className="text-sm text-muted-foreground">Water allocation by sector</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={distributionData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {distributionData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Card>

      {/* Community Details List */}
      <Card className="p-6 lg:col-span-3 shadow-medium">
        <h2 className="text-2xl font-bold text-foreground mb-6">Community Allocation Details</h2>
        <div className="space-y-4">
          {allocationData.map((community, index) => {
            const usagePercent = Math.round((community.used / community.allocated) * 100);
            const perCapita = Math.round(community.used / community.population);

            return (
              <div key={index} className="p-4 bg-muted/30 rounded-lg border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">{community.community}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {community.population.toLocaleString()} people
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Droplets className="w-4 h-4" />
                        {perCapita}L per capita
                      </span>
                    </div>
                  </div>
                  {getStatusBadge(community.status)}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Usage: {community.used.toLocaleString()}L / {community.allocated.toLocaleString()}L</span>
                    <span className="font-semibold text-foreground">{usagePercent}%</span>
                  </div>
                  <Progress value={usagePercent} className="h-3" />
                </div>

                {community.status === "over" && (
                  <div className="mt-3 p-2 bg-destructive/10 rounded-md flex items-center gap-2 text-sm text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    <span>Usage exceeds allocation - intervention recommended</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default CommunityAllocation;
