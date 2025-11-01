import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kenyaCounties } from "@/data/kenyaCounties";

const RegionMap = () => {
  // Use all 47 counties from the data file
  const regions = kenyaCounties.map(county => ({
    name: county.name,
    risk: county.riskLevel,
    position: county.position
  }));

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "bg-destructive/20 border-destructive text-destructive";
      case "medium":
        return "bg-accent/20 border-accent text-accent";
      default:
        return "bg-secondary/20 border-secondary text-secondary";
    }
  };

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-muted/30 rounded-xl overflow-hidden border border-border">
      {/* Simplified Kenya map background */}
      <div className="absolute inset-0 opacity-10">
        <svg viewBox="0 0 800 600" className="w-full h-full">
          <path
            d="M 200,50 L 350,50 L 400,100 L 450,120 L 500,100 L 550,150 L 580,200 L 600,280 L 590,350 L 570,420 L 540,470 L 480,500 L 420,520 L 360,510 L 300,480 L 250,430 L 220,360 L 200,280 L 190,200 L 200,120 Z"
            fill="hsl(var(--primary))"
            stroke="hsl(var(--primary))"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Region markers */}
      {regions.map((region, index) => (
        <div
          key={index}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-slide-in"
          style={{ 
            top: region.position.top, 
            left: region.position.left,
            animationDelay: `${index * 100}ms`
          }}
        >
          <div className="relative group cursor-pointer">
            {/* Pulse effect for high-risk regions */}
            {region.risk === "high" && (
              <div className="absolute inset-0 animate-pulse-soft">
                <div className="w-full h-full rounded-full bg-destructive/30 blur-xl" />
              </div>
            )}
            
            {/* Region badge */}
            <Badge 
              variant="outline"
              className={`${getRiskColor(region.risk)} px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm font-semibold shadow-medium hover:scale-110 transition-transform relative z-10 whitespace-nowrap`}
            >
              {region.name}
            </Badge>

            {/* Tooltip on hover */}
            <Card className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 p-3 min-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 shadow-strong">
              <div className="text-sm">
                <div className="font-semibold text-foreground mb-1">{region.name} County</div>
                <div className="text-xs text-muted-foreground">
                  Risk Level: <span className={`font-semibold ${region.risk === 'high' ? 'text-destructive' : region.risk === 'medium' ? 'text-accent' : 'text-secondary'}`}>
                    {region.risk.toUpperCase()}
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 bg-card/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-border shadow-medium">
        <div className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3">Risk Levels</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-destructive" />
            <span className="text-xs text-muted-foreground">High Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent" />
            <span className="text-xs text-muted-foreground">Medium Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-secondary" />
            <span className="text-xs text-muted-foreground">Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionMap;
