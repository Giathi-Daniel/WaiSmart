import MetricsCard from "./MetricsCard";
import { Droplets, CloudRain, AlertTriangle, TrendingUp, Sprout, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import dashboardBg from "@/assets/dashboard-bg.jpg";

const Dashboard = () => {
  const alerts = [
    { id: 1, severity: "high", location: "Reservoir A", message: "Water level critical - 15% capacity", time: "2 hours ago" },
    { id: 2, severity: "medium", location: "Zone 3", message: "Irrigation schedule adjustment needed", time: "5 hours ago" },
    { id: 3, severity: "low", location: "Pump Station B", message: "Routine maintenance due", time: "1 day ago" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-gradient-alert text-white";
      case "medium": return "bg-accent/20 text-accent";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-muted/30 relative">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url(${dashboardBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Real-Time </span>
            <span className="bg-gradient-water bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor water resources, predict shortages, and optimize irrigation scheduling with AI-powered analytics
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-slide-up">
          <MetricsCard
            title="Current Water Level"
            value="68%"
            change="+3.2%"
            trend="up"
            icon={Droplets}
            gradient="bg-gradient-water"
          />
          <MetricsCard
            title="Rainfall Forecast"
            value="42mm"
            change="Next 7 days"
            trend="neutral"
            icon={CloudRain}
            gradient="bg-gradient-sustainability"
          />
          <MetricsCard
            title="Active Alerts"
            value="12"
            change="-8 today"
            trend="down"
            icon={AlertTriangle}
            gradient="bg-gradient-alert"
          />
          <MetricsCard
            title="Irrigation Efficiency"
            value="87%"
            change="+12%"
            trend="up"
            icon={Sprout}
            gradient="bg-gradient-sustainability"
          />
          <MetricsCard
            title="Water Saved"
            value="2.3M L"
            change="This month"
            trend="up"
            icon={TrendingUp}
            gradient="bg-gradient-water"
          />
          <MetricsCard
            title="Active Farmers"
            value="850"
            change="+45 this week"
            trend="up"
            icon={Users}
            gradient="bg-gradient-sustainability"
          />
        </div>

        {/* Alerts Section */}
        <Card className="p-6 shadow-medium animate-slide-up">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-foreground">Recent Alerts</h3>
            <Badge variant="outline" className="text-sm">
              Live Updates
            </Badge>
          </div>
          
          <div className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
              >
                <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity)}`}>
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground">{alert.location}</span>
                    <Badge variant="outline" className="text-xs">{alert.severity}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{alert.message}</p>
                  <span className="text-xs text-muted-foreground">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Dashboard;
