import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MetricsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
  gradient?: string;
}

const MetricsCard = ({ title, value, change, trend, icon: Icon, gradient = "bg-gradient-water" }: MetricsCardProps) => {
  const trendColors = {
    up: "text-secondary",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  };

  return (
    <Card className="relative overflow-hidden group hover:shadow-medium transition-all duration-300">
      <div className={`absolute top-0 right-0 w-32 h-32 ${gradient} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
      
      <div className="p-6 relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-3 rounded-xl ${gradient} shadow-soft`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <span className={`text-sm font-medium ${trendColors[trend]}`}>
            {change}
          </span>
        </div>
        
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{title}</h3>
        <p className="text-3xl font-bold text-foreground">{value}</p>
      </div>
    </Card>
  );
};

export default MetricsCard;
