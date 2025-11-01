import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets } from "lucide-react";

interface County {
  name: string;
  riskLevel: string;
  daysUntilShortage: number;
  affectedPopulation: string;
  position: { top: string; left: string };
  rainfallMm: number;
  reservoirPercent: number;
}

interface WaterStressMapProps {
  counties: County[];
  onCountySelect: (name: string) => void;
}

const WaterStressMap = ({ counties, onCountySelect }: WaterStressMapProps) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "critical": return "bg-destructive hover:bg-destructive/80";
      case "high": return "bg-orange-500 hover:bg-orange-600";
      case "medium": return "bg-yellow-500 hover:bg-yellow-600";
      case "low": return "bg-secondary hover:bg-secondary/80";
      default: return "bg-muted hover:bg-muted/80";
    }
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg border border-border overflow-hidden">
      {/* Kenya Map Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-4xl">
          {/* Legend */}
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-card/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-medium z-10 border border-border">
            <h3 className="text-xs sm:text-sm font-bold text-foreground mb-2 sm:mb-3">Risk Level</h3>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-destructive" />
                <span className="text-xs text-foreground">Critical</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-orange-500" />
                <span className="text-xs text-foreground">High</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-yellow-500" />
                <span className="text-xs text-foreground">Medium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-secondary" />
                <span className="text-xs text-foreground">Low</span>
              </div>
            </div>
          </div>

          {/* County Markers */}
          {counties.map((county) => (
            <div
              key={county.name}
              className="absolute group cursor-pointer"
              style={{ top: county.position.top, left: county.position.left }}
              onClick={() => onCountySelect(county.name)}
            >
              <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getRiskColor(county.riskLevel)} animate-pulse-soft shadow-glow transition-all`} />
              
              {/* Tooltip */}
              <Card className="absolute left-1/2 -translate-x-1/2 bottom-6 w-48 sm:w-64 p-3 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-elegant z-20">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h4 className="font-bold text-foreground text-xs sm:text-sm">{county.name}</h4>
                  <Badge variant="outline" className="text-xs capitalize">{county.riskLevel}</Badge>
                </div>
                <div className="space-y-1 sm:space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Days to shortage:</span>
                    <span className="font-medium text-foreground">{county.daysUntilShortage} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Population:</span>
                    <span className="font-medium text-foreground">{county.affectedPopulation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rainfall:</span>
                    <span className="font-medium text-foreground">{county.rainfallMm}mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Reservoir:</span>
                    <span className="font-medium text-foreground">{county.reservoirPercent}%</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-border">
                  <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span className="text-xs text-muted-foreground">Click to filter by region</span>
                </div>
              </Card>
            </div>
          ))}

          {/* Kenya Outline (simplified) */}
          <svg
            className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M400 100 L500 150 L550 200 L580 300 L600 400 L580 500 L550 600 L500 650 L450 680 L400 700 L350 680 L300 650 L250 600 L220 500 L200 400 L220 300 L250 200 L300 150 Z"
              stroke="currentColor"
              strokeWidth="2"
              className="text-border"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default WaterStressMap;
