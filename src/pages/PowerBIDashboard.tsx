import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Download, RefreshCw, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";
import FilterPanel from "@/components/dashboard/FilterPanel";
import SupplyDemandChart from "@/components/dashboard/SupplyDemandChart";
import WaterStressMap from "@/components/dashboard/WaterStressMap";
import RegionalComparison from "@/components/dashboard/RegionalComparison";
import TrendAnalysis from "@/components/dashboard/TrendAnalysis";
import KeyMetricsDashboard from "@/components/dashboard/KeyMetricsDashboard";
import { kenyaCounties } from "@/data/kenyaCounties";

const PowerBIDashboard = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedRisk, setSelectedRisk] = useState<string>("all");
  const [timeRange, setTimeRange] = useState<string>("30d");
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Filter counties based on selection
  const filteredCounties = useMemo(() => {
    return kenyaCounties.filter(county => {
      const regionMatch = selectedRegion === "all" || county.name === selectedRegion;
      const riskMatch = selectedRisk === "all" || county.riskLevel === selectedRisk;
      return regionMatch && riskMatch;
    });
  }, [selectedRegion, selectedRisk]);

  // Calculate aggregate metrics
  const metrics = useMemo(() => {
    const totalPopulation = filteredCounties.reduce((sum, c) => sum + parseInt(c.affectedPopulation.replace(/,/g, '')), 0);
    const avgRainfall = filteredCounties.reduce((sum, c) => sum + c.rainfallMm, 0) / filteredCounties.length;
    const avgReservoir = filteredCounties.reduce((sum, c) => sum + c.reservoirPercent, 0) / filteredCounties.length;
    const criticalCount = filteredCounties.filter(c => c.riskLevel === "critical").length;
    
    return {
      totalPopulation: totalPopulation.toLocaleString(),
      avgRainfall: avgRainfall.toFixed(1),
      avgReservoir: avgReservoir.toFixed(0),
      criticalZones: criticalCount,
      totalZones: filteredCounties.length
    };
  }, [filteredCounties]);

  const handleRefresh = () => {
    setLastUpdated(new Date());
    // In a real app, this would fetch fresh data
  };

  const handleExport = () => {
    // Export functionality
    console.log("Exporting dashboard data...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="flex-shrink-0">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <div className="min-w-0 flex-1">
                  <h1 className="text-base sm:text-xl md:text-2xl font-bold text-foreground truncate">Water Analytics Dashboard</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    Real-time insights for policy officers and NGOs
                  </p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs flex-shrink-0 ml-2">
                <span className="w-2 h-2 rounded-full bg-secondary mr-1 sm:mr-2 animate-pulse" />
                <span className="hidden sm:inline">Live</span>
              </Badge>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground">
                {lastUpdated.toLocaleTimeString()}
              </span>
              <Button variant="outline" size="sm" onClick={handleRefresh} className="text-xs h-8">
                <RefreshCw className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Refresh</span>
              </Button>
              <Button variant="outline" size="sm" onClick={handleExport} className="text-xs h-8">
                <Download className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Export</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Filter Panel */}
        <Card className="p-4 sm:p-6 mb-4 sm:mb-6 shadow-medium">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            <h2 className="text-base sm:text-lg font-bold text-foreground">Filters & Controls</h2>
          </div>
          <FilterPanel
            selectedRegion={selectedRegion}
            selectedRisk={selectedRisk}
            timeRange={timeRange}
            onRegionChange={setSelectedRegion}
            onRiskChange={setSelectedRisk}
            onTimeRangeChange={setTimeRange}
          />
        </Card>

        {/* Key Metrics */}
        <KeyMetricsDashboard metrics={metrics} />

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Water Stress Map */}
          <Card className="p-4 sm:p-6 lg:col-span-2 shadow-medium">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Water Stress Zones</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Interactive map showing risk levels across Kenya</p>
            <WaterStressMap 
              counties={filteredCounties}
              onCountySelect={setSelectedRegion}
            />
          </Card>

          {/* Supply vs Demand */}
          <Card className="p-4 sm:p-6 shadow-medium">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Supply-Demand Balance</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Daily water availability vs consumption</p>
            <SupplyDemandChart timeRange={timeRange} />
          </Card>

          {/* Regional Comparison */}
          <Card className="p-4 sm:p-6 shadow-medium">
            <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Regional Comparison</h2>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Key metrics across filtered regions</p>
            <RegionalComparison counties={filteredCounties} />
          </Card>
        </div>

        {/* Trend Analysis */}
        <Card className="p-4 sm:p-6 shadow-medium">
          <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2">Historical Trends</h2>
          <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">6-month water availability and usage patterns</p>
          <TrendAnalysis timeRange={timeRange} />
        </Card>
      </div>
    </div>
  );
};

export default PowerBIDashboard;
