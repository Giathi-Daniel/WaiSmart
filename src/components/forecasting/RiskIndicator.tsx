import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Clock, Users } from "lucide-react";

interface RiskIndicatorProps {
  region: string;
  riskLevel: "critical" | "high" | "medium" | "low";
  daysUntilShortage: number;
  affectedPopulation: string;
}

const RiskIndicator = ({ region, riskLevel, daysUntilShortage, affectedPopulation }: RiskIndicatorProps) => {
  const getRiskConfig = () => {
    switch (riskLevel) {
      case "critical":
        return {
          color: "bg-destructive",
          gradient: "bg-gradient-alert",
          text: "text-destructive",
          bgColor: "bg-destructive/10",
          label: "Critical Risk",
        };
      case "high":
        return {
          color: "bg-orange-500",
          gradient: "bg-gradient-to-br from-orange-500 to-orange-600",
          text: "text-orange-500",
          bgColor: "bg-orange-500/10",
          label: "High Risk",
        };
      case "medium":
        return {
          color: "bg-accent",
          gradient: "bg-accent",
          text: "text-accent",
          bgColor: "bg-accent/10",
          label: "Medium Risk",
        };
      default:
        return {
          color: "bg-secondary",
          gradient: "bg-secondary",
          text: "text-secondary",
          bgColor: "bg-secondary/10",
          label: "Low Risk",
        };
    }
  };

  const config = getRiskConfig();

  return (
    <Card className="p-5 hover:shadow-medium transition-all border-l-4" style={{ borderLeftColor: riskLevel === 'critical' ? 'hsl(var(--destructive))' : riskLevel === 'high' ? 'hsl(24, 100%, 55%)' : riskLevel === 'medium' ? 'hsl(var(--accent))' : 'hsl(var(--secondary))' }}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-bold text-foreground">{region}</h3>
        <Badge className={`${config.gradient} text-white border-none`}>
          {config.label}
        </Badge>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center`}>
            <Clock className={`w-5 h-5 ${config.text}`} />
          </div>
          <div>
            <div className="text-2xl font-bold text-foreground">{daysUntilShortage}</div>
            <div className="text-xs text-muted-foreground">Days until shortage</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center`}>
            <Users className={`w-5 h-5 ${config.text}`} />
          </div>
          <div>
            <div className="text-lg font-semibold text-foreground">{affectedPopulation}</div>
            <div className="text-xs text-muted-foreground">People affected</div>
          </div>
        </div>

        <div className="pt-3 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <AlertTriangle className="w-3 h-3" />
            <span>Alert scheduled for local farmers</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RiskIndicator;
