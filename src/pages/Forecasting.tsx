import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ForecastChart from "@/components/forecasting/ForecastChart";
import DataSourceCard from "@/components/forecasting/DataSourceCard";
import RiskIndicator from "@/components/forecasting/RiskIndicator";
import RegionMap from "@/components/forecasting/RegionMap";
import { ArrowLeft, Download, RefreshCw, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getRandomHighRiskCounties, kenyaCounties } from "@/data/kenyaCounties";
import { useToast } from "@/hooks/use-toast";

const Forecasting = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [displayedCounties, setDisplayedCounties] = useState(getRandomHighRiskCounties(3));
  const [featuredAlert, setFeaturedAlert] = useState(displayedCounties[0]);

  useEffect(() => {
    // Refresh displayed counties when component mounts
    const counties = getRandomHighRiskCounties(3);
    setDisplayedCounties(counties);
    setFeaturedAlert(counties[0]);
  }, []);

  const handleRefresh = () => {
    const counties = getRandomHighRiskCounties(3);
    setDisplayedCounties(counties);
    setFeaturedAlert(counties[0]);
    toast({
      title: "Dashboard Refreshed",
      description: "Showing updated county risk assessments",
    });
  };

  const handleViewDetails = () => {
    toast({
      title: `${featuredAlert.name} County Details`,
      description: `Risk Level: ${featuredAlert.riskLevel.toUpperCase()} | Days until shortage: ${featuredAlert.daysUntilShortage} | Rainfall: ${featuredAlert.rainfallMm}mm | Reservoir: ${featuredAlert.reservoirPercent}%`,
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => navigate("/")}
                  className="flex-shrink-0"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
                <div className="min-w-0 flex-1">
                  <h1 className="text-base sm:text-xl md:text-2xl font-bold text-foreground truncate">Predictive Analytics</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">14-Day Water Shortage Forecast</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs flex-shrink-0 ml-2">
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-soft mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Live</span>
              </Badge>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="outline" size="sm" onClick={handleRefresh} className="text-xs h-8">
                <RefreshCw className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Refresh</span>
              </Button>
              <Button size="sm" className="bg-gradient-water text-xs h-8">
                <Download className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Export</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Alert Banner */}
        <Card className="mb-6 bg-gradient-alert border-none shadow-medium">
          <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-white">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-1 text-sm sm:text-base">{featuredAlert.riskLevel === "high" || featuredAlert.riskLevel === "critical" ? "Critical/High Risk" : "Medium Risk"} Alert - {featuredAlert.name} County</h3>
              <p className="text-xs sm:text-sm text-white/90">Water shortage predicted in {featuredAlert.daysUntilShortage} days. Immediate action recommended for affected communities.</p>
            </div>
            <Button variant="secondary" size="sm" onClick={handleViewDetails} className="w-full sm:w-auto text-xs sm:text-sm">
              View Details
            </Button>
          </div>
        </Card>

        {/* Data Sources Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DataSourceCard
            title="Rainfall Data"
            value={`${featuredAlert.rainfallMm}mm`}
            status={featuredAlert.rainfallMm < 15 ? "Below Average" : featuredAlert.rainfallMm < 25 ? "Moderate" : "Above Average"}
            lastUpdated="2 hours ago"
            trend={featuredAlert.rainfallMm < 15 ? "down" : "up"}
            changePercent={featuredAlert.rainfallMm < 15 ? "-35%" : "+12%"}
          />
          <DataSourceCard
            title="Reservoir Levels"
            value={`${featuredAlert.reservoirPercent}%`}
            status={featuredAlert.reservoirPercent < 40 ? "Critical" : featuredAlert.reservoirPercent < 60 ? "Moderate Risk" : "Healthy"}
            lastUpdated="30 mins ago"
            trend={featuredAlert.reservoirPercent < 50 ? "down" : "up"}
            changePercent={featuredAlert.reservoirPercent < 50 ? "-8%" : "+5%"}
          />
          <DataSourceCard
            title="Soil Moisture"
            value={`${featuredAlert.soilMoisturePercent}%`}
            status={featuredAlert.soilMoisturePercent < 30 ? "Critical" : featuredAlert.soilMoisturePercent < 50 ? "Moderate" : "Good"}
            lastUpdated="1 hour ago"
            trend={featuredAlert.soilMoisturePercent < 40 ? "down" : "up"}
            changePercent={featuredAlert.soilMoisturePercent < 40 ? "-22%" : "+8%"}
          />
        </div>

        {/* Main Forecast Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="lg:col-span-2">
            <Card className="p-4 sm:p-6 shadow-medium">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                <div>
                  <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-1">14-Day Water Shortage Forecast</h2>
                  <p className="text-xs sm:text-sm text-muted-foreground">ML-powered predictions using historical and real-time data</p>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20 w-fit text-xs sm:text-sm">
                  94% Accuracy
                </Badge>
              </div>
              
              <Tabs defaultValue="shortage" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4 sm:mb-6">
                  <TabsTrigger value="shortage" className="text-xs sm:text-sm">Shortage</TabsTrigger>
                  <TabsTrigger value="rainfall" className="text-xs sm:text-sm">Rainfall</TabsTrigger>
                  <TabsTrigger value="reservoir" className="text-xs sm:text-sm">Reservoir</TabsTrigger>
                </TabsList>
                
                <TabsContent value="shortage">
                  <ForecastChart type="shortage" />
                </TabsContent>
                
                <TabsContent value="rainfall">
                  <ForecastChart type="rainfall" />
                </TabsContent>
                
                <TabsContent value="reservoir">
                  <ForecastChart type="reservoir" />
                </TabsContent>
              </Tabs>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {displayedCounties.map((county, index) => (
              <RiskIndicator
                key={`${county.name}-${index}`}
                region={`${county.name} County`}
                riskLevel={county.riskLevel}
                daysUntilShortage={county.daysUntilShortage}
                affectedPopulation={county.affectedPopulation}
              />
            ))}
          </div>
        </div>

        {/* Regional Map */}
        <Card className="p-4 sm:p-6 shadow-medium">
          <h2 className="text-lg sm:text-2xl font-bold text-foreground mb-4">Water Stress Zones - Kenya</h2>
          <RegionMap />
        </Card>
      </div>
    </div>
  );
};

export default Forecasting;
