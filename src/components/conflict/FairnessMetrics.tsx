import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Award, BarChart3 } from "lucide-react";

const fairnessData = [
  { month: "May", score: 78, disputes: 8 },
  { month: "Jun", score: 81, disputes: 6 },
  { month: "Jul", score: 83, disputes: 5 },
  { month: "Aug", score: 85, disputes: 4 },
  { month: "Sep", score: 86, disputes: 3 },
  { month: "Oct", score: 87, disputes: 2 },
];

const equityMetrics = [
  { metric: "Access Equality", value: 92 },
  { metric: "Per Capita Distribution", value: 85 },
  { metric: "Response Time", value: 88 },
  { metric: "Transparency", value: 90 },
  { metric: "Community Satisfaction", value: 84 },
];

const FairnessMetrics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Fairness Score Trend */}
      <Card className="p-6 lg:col-span-2 shadow-medium">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Fairness Score Trend</h2>
          <p className="text-sm text-muted-foreground">Monthly fairness score and dispute correlation</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={fairnessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis yAxisId="left" stroke="hsl(var(--muted-foreground))" />
            <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="score" stroke="hsl(var(--primary))" strokeWidth={3} name="Fairness Score" />
            <Line yAxisId="right" type="monotone" dataKey="disputes" stroke="hsl(var(--destructive))" strokeWidth={3} name="Disputes" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Equity Radar Chart */}
      <Card className="p-6 shadow-medium">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-2">Equity Assessment</h2>
          <p className="text-sm text-muted-foreground">Multi-dimensional fairness evaluation</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={equityMetrics}>
            <PolarGrid stroke="hsl(var(--border))" />
            <PolarAngleAxis dataKey="metric" stroke="hsl(var(--muted-foreground))" />
            <PolarRadiusAxis stroke="hsl(var(--muted-foreground))" />
            <Radar name="Score" dataKey="value" stroke="hsl(var(--primary))" fill="hsl(var(--primary))" fillOpacity={0.3} />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </Card>

      {/* Key Performance Indicators */}
      <Card className="p-6 shadow-medium">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-foreground mb-2">Key Performance Indicators</h2>
          <p className="text-sm text-muted-foreground">Detailed fairness metrics</p>
        </div>
        <div className="space-y-4">
          {equityMetrics.map((metric, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-foreground">{metric.metric}</span>
                <span className="text-sm font-bold text-primary">{metric.value}%</span>
              </div>
              <Progress value={metric.value} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      {/* Insights Cards */}
      <Card className="p-6 lg:col-span-2 shadow-medium bg-gradient-sustainability">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">11% Improvement</h3>
              <p className="text-sm text-white/90">Fairness score increased by 11 points over 6 months through data-driven interventions</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">75% Reduction</h3>
              <p className="text-sm text-white/90">Active disputes decreased by 75% with transparent allocation algorithms</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">92% Access Rate</h3>
              <p className="text-sm text-white/90">Equal access to water resources across all participating communities</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FairnessMetrics;
