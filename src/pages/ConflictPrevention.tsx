import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, AlertTriangle, CheckCircle2, Users, Droplets, TrendingDown, FileText, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import DisputeHistory from "@/components/conflict/DisputeHistory";
import CommunityAllocation from "@/components/conflict/CommunityAllocation";
import FairnessMetrics from "@/components/conflict/FairnessMetrics";
import UsageMonitor from "@/components/conflict/UsageMonitor";

const ConflictPrevention = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeDisputes, setActiveDisputes] = useState(2);

  const handleGenerateReport = () => {
    toast({
      title: "Report Generated",
      description: "Water distribution fairness report has been downloaded.",
    });
  };

  const handleSendAlert = () => {
    toast({
      title: "Alert Sent",
      description: "Usage threshold alerts sent to community leaders.",
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
                  <h1 className="text-base sm:text-xl md:text-2xl font-bold text-foreground truncate">Conflict Prevention</h1>
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Fair water distribution and dispute resolution</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs flex-shrink-0 ml-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-soft mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{activeDisputes} Disputes</span>
                <span className="sm:hidden">{activeDisputes}</span>
              </Badge>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Button variant="outline" size="sm" onClick={handleSendAlert} className="text-xs h-8">
                <Bell className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Alerts</span>
              </Button>
              <Button size="sm" className="bg-gradient-water text-xs h-8" onClick={handleGenerateReport}>
                <FileText className="w-3 h-3 mr-1" />
                <span className="hidden xs:inline">Report</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <Card className="p-6 shadow-medium border-l-4 border-l-secondary">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Resolved Disputes</p>
                <h3 className="text-3xl font-bold text-foreground mb-1">48</h3>
                <div className="flex items-center gap-2 text-xs text-secondary">
                  <TrendingDown className="w-3 h-3" />
                  <span>-23% this month</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-medium border-l-4 border-l-accent">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Active Disputes</p>
                <h3 className="text-3xl font-bold text-foreground mb-1">{activeDisputes}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>Requires attention</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-medium border-l-4 border-l-primary">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Communities Served</p>
                <h3 className="text-3xl font-bold text-foreground mb-1">127</h3>
                <div className="flex items-center gap-2 text-xs text-primary">
                  <Users className="w-3 h-3" />
                  <span>18 new this quarter</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-medium border-l-4 border-l-primary">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Fairness Score</p>
                <h3 className="text-3xl font-bold text-foreground mb-1">87%</h3>
                <div className="flex items-center gap-2 text-xs text-secondary">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Above target</span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="allocation" className="space-y-4 sm:space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            <TabsTrigger value="allocation" className="text-xs sm:text-sm py-2">Water Allocation</TabsTrigger>
            <TabsTrigger value="disputes" className="text-xs sm:text-sm py-2">Dispute History</TabsTrigger>
            <TabsTrigger value="fairness" className="text-xs sm:text-sm py-2">Fairness Metrics</TabsTrigger>
            <TabsTrigger value="monitoring" className="text-xs sm:text-sm py-2">Usage Monitoring</TabsTrigger>
          </TabsList>

          <TabsContent value="allocation" className="space-y-6">
            <CommunityAllocation />
          </TabsContent>

          <TabsContent value="disputes" className="space-y-6">
            <DisputeHistory onDisputeResolved={() => setActiveDisputes(prev => Math.max(0, prev - 1))} />
          </TabsContent>

          <TabsContent value="fairness" className="space-y-6">
            <FairnessMetrics />
          </TabsContent>

          <TabsContent value="monitoring" className="space-y-6">
            <UsageMonitor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ConflictPrevention;
