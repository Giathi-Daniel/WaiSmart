import { Droplets, AlertTriangle, Users, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface KeyMetricsDashboardProps {
  metrics: {
    totalPopulation: string;
    avgRainfall: string;
    avgReservoir: string;
    criticalZones: number;
    totalZones: number;
  };
}

const KeyMetricsDashboard = ({ metrics }: KeyMetricsDashboardProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-4 sm:mb-6">
      <Card className="p-4 sm:p-6 shadow-medium hover:shadow-elegant transition-shadow">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 rounded-xl bg-gradient-alert shadow-soft">
            <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-destructive">
            {metrics.criticalZones}/{metrics.totalZones}
          </span>
        </div>
        <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Critical Zones</h3>
        <p className="text-xs text-muted-foreground hidden sm:block">Regions requiring immediate attention</p>
      </Card>

      <Card className="p-4 sm:p-6 shadow-medium hover:shadow-elegant transition-shadow">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 rounded-xl bg-gradient-water shadow-soft">
            <Droplets className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-primary">
            {metrics.avgReservoir}%
          </span>
        </div>
        <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Avg Reservoir Level</h3>
        <p className="text-xs text-muted-foreground hidden sm:block">Current water storage capacity</p>
      </Card>

      <Card className="p-4 sm:p-6 shadow-medium hover:shadow-elegant transition-shadow">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 rounded-xl bg-gradient-sustainability shadow-soft">
            <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-secondary">
            {metrics.avgRainfall}mm
          </span>
        </div>
        <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Avg Rainfall</h3>
        <p className="text-xs text-muted-foreground hidden sm:block">Recent precipitation levels</p>
      </Card>

      <Card className="p-4 sm:p-6 shadow-medium hover:shadow-elegant transition-shadow">
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-accent to-accent/70 shadow-soft">
            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          </div>
          <span className="text-xl sm:text-2xl font-bold text-accent">
            {metrics.totalPopulation}
          </span>
        </div>
        <h3 className="text-xs sm:text-sm font-medium text-muted-foreground mb-1">Affected Population</h3>
        <p className="text-xs text-muted-foreground hidden sm:block">People in monitored regions</p>
      </Card>
    </div>
  );
};

export default KeyMetricsDashboard;
