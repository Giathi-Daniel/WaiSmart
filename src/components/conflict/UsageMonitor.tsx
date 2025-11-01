import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Bell, TrendingUp, TrendingDown, AlertCircle, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const hourlyUsage = [
  { time: "00:00", usage: 420 },
  { time: "04:00", usage: 380 },
  { time: "08:00", usage: 890 },
  { time: "12:00", usage: 1250 },
  { time: "16:00", usage: 1100 },
  { time: "20:00", usage: 750 },
];

const communityMonitoring = [
  { name: "Turkana North", current: 7800, threshold: 8500, trend: "stable", alert: false },
  { name: "Turkana South", current: 9100, threshold: 9200, trend: "up", alert: true },
  { name: "Marsabit East", current: 5200, threshold: 6300, trend: "down", alert: false },
  { name: "Marsabit West", current: 7400, threshold: 7100, trend: "up", alert: true },
  { name: "Samburu Central", current: 4900, threshold: 5800, trend: "stable", alert: false },
  { name: "Wajir North", current: 9800, threshold: 10200, trend: "up", alert: true },
];

const UsageMonitor = () => {
  const { toast } = useToast();

  const handleSendAlert = (community: string) => {
    toast({
      title: "Alert Sent",
      description: `Usage threshold alert sent to ${community} community leaders.`,
    });
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-destructive" />;
      case "down":
        return <TrendingDown className="w-4 h-4 text-secondary" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Real-time Usage Chart */}
      <Card className="p-6 shadow-medium">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Real-Time Usage Monitoring</h2>
          <p className="text-sm text-muted-foreground">24-hour water consumption pattern (liters/hour)</p>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={hourlyUsage}>
            <defs>
              <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Area type="monotone" dataKey="usage" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#usageGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </Card>

      {/* Community Monitoring Table */}
      <Card className="p-6 shadow-medium">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Community Usage Alerts</h2>
          <p className="text-sm text-muted-foreground">Real-time monitoring of water usage against allocated thresholds</p>
        </div>
        <div className="space-y-4">
          {communityMonitoring.map((community, index) => {
            const usagePercent = Math.round((community.current / community.threshold) * 100);
            const isNearThreshold = usagePercent >= 90;
            const isOverThreshold = usagePercent > 100;

            return (
              <div 
                key={index} 
                className={`p-4 rounded-lg border ${
                  isOverThreshold 
                    ? 'bg-destructive/10 border-destructive/40' 
                    : isNearThreshold 
                    ? 'bg-accent/10 border-accent/40' 
                    : 'bg-muted/30 border-border'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-foreground">{community.name}</h3>
                    {getTrendIcon(community.trend)}
                    {community.alert && (
                      <Badge className="bg-destructive/20 text-destructive border-destructive/40">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Alert
                      </Badge>
                    )}
                  </div>
                  {community.alert && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleSendAlert(community.name)}
                    >
                      <Bell className="w-4 h-4 mr-2" />
                      Send Alert
                    </Button>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Current: {community.current.toLocaleString()}L / Threshold: {community.threshold.toLocaleString()}L
                    </span>
                    <span className={`font-semibold ${
                      isOverThreshold 
                        ? 'text-destructive' 
                        : isNearThreshold 
                        ? 'text-accent' 
                        : 'text-foreground'
                    }`}>
                      {usagePercent}%
                    </span>
                  </div>
                  <Progress 
                    value={Math.min(usagePercent, 100)} 
                    className={`h-3 ${
                      isOverThreshold 
                        ? '[&>div]:bg-destructive' 
                        : isNearThreshold 
                        ? '[&>div]:bg-accent' 
                        : ''
                    }`}
                  />
                </div>

                {isOverThreshold && (
                  <div className="mt-3 text-sm text-destructive flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Usage exceeds threshold - immediate intervention required</span>
                  </div>
                )}
                {isNearThreshold && !isOverThreshold && (
                  <div className="mt-3 text-sm text-accent flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Approaching threshold - monitor closely</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default UsageMonitor;
