import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

interface DataSourceCardProps {
  title: string;
  value: string;
  status: string;
  lastUpdated: string;
  trend: "up" | "down" | "neutral";
  changePercent: string;
}

const DataSourceCard = ({ title, value, status, lastUpdated, trend, changePercent }: DataSourceCardProps) => {
  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4" />;
      case "down":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-secondary";
      case "down":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const getStatusColor = () => {
    if (status.includes("Critical")) return "bg-destructive/10 text-destructive border-destructive/20";
    if (status.includes("Risk")) return "bg-accent/10 text-accent border-accent/20";
    if (status.includes("Below")) return "bg-accent/10 text-accent border-accent/20";
    return "bg-secondary/10 text-secondary border-secondary/20";
  };

  return (
    <Card className="p-6 hover:shadow-medium transition-all">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <Badge variant="outline" className={getStatusColor()}>
          {status}
        </Badge>
      </div>
      
      <div className="flex items-end justify-between mb-3">
        <div className="text-4xl font-bold text-foreground">{value}</div>
        <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor()}`}>
          {getTrendIcon()}
          <span>{changePercent}</span>
        </div>
      </div>

      <div className="text-xs text-muted-foreground">
        Last updated: {lastUpdated}
      </div>
    </Card>
  );
};

export default DataSourceCard;
