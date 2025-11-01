import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, AlertTriangle, MapPin, Users, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface Dispute {
  id: number;
  title: string;
  communities: string[];
  location: string;
  status: "active" | "resolved" | "monitoring";
  severity: "low" | "medium" | "high";
  date: string;
  description: string;
  resolution?: string;
}

interface DisputeHistoryProps {
  onDisputeResolved: () => void;
}

const DisputeHistory = ({ onDisputeResolved }: DisputeHistoryProps) => {
  const { toast } = useToast();
  const [disputes, setDisputes] = useState<Dispute[]>([
    {
      id: 1,
      title: "Unequal irrigation water distribution",
      communities: ["Turkana North", "Turkana South"],
      location: "Turkana County",
      status: "active",
      severity: "high",
      date: "2025-10-28",
      description: "Disagreement over irrigation schedule allocation during dry season. Northern community claims unfair disadvantage."
    },
    {
      id: 2,
      title: "Livestock watering point conflict",
      communities: ["Marsabit East", "Marsabit West"],
      location: "Marsabit County",
      status: "active",
      severity: "medium",
      date: "2025-10-25",
      description: "Disputed access rights to shared watering point for livestock during peak hours."
    },
    {
      id: 3,
      title: "Well maintenance responsibility",
      communities: ["Samburu Central", "Samburu North"],
      location: "Samburu County",
      status: "monitoring",
      severity: "low",
      date: "2025-10-20",
      description: "Disagreement on cost-sharing for community well repairs. Resolved through mediation.",
      resolution: "Cost-sharing agreement signed with 60-40 split based on population served."
    },
    {
      id: 4,
      title: "Drought allocation priorities",
      communities: ["Wajir North", "Wajir Central"],
      location: "Wajir County",
      status: "resolved",
      severity: "high",
      date: "2025-10-15",
      description: "Conflict over priority access during severe drought conditions.",
      resolution: "Implemented rotational access schedule with priority for domestic use and vulnerable populations."
    },
  ]);

  const handleResolve = (disputeId: number) => {
    setDisputes(disputes.map(d => 
      d.id === disputeId 
        ? { ...d, status: "resolved" as const, resolution: "Dispute resolved through community mediation and fair allocation agreement." }
        : d
    ));
    onDisputeResolved();
    toast({
      title: "Dispute Resolved",
      description: "The dispute has been marked as resolved and communities have been notified.",
    });
  };

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "active":
        return { icon: AlertTriangle, color: "bg-destructive/20 text-destructive border-destructive/40", label: "Active" };
      case "monitoring":
        return { icon: Clock, color: "bg-accent/20 text-accent border-accent/40", label: "Monitoring" };
      case "resolved":
        return { icon: CheckCircle2, color: "bg-secondary/20 text-secondary border-secondary/40", label: "Resolved" };
      default:
        return { icon: Clock, color: "bg-muted", label: status };
    }
  };

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case "high":
        return { color: "bg-destructive text-white", label: "High Priority" };
      case "medium":
        return { color: "bg-accent text-white", label: "Medium Priority" };
      case "low":
        return { color: "bg-secondary text-white", label: "Low Priority" };
      default:
        return { color: "bg-muted", label: severity };
    }
  };

  return (
    <div className="space-y-6">
      {disputes.map((dispute) => {
        const statusConfig = getStatusConfig(dispute.status);
        const severityConfig = getSeverityConfig(dispute.severity);
        const StatusIcon = statusConfig.icon;

        return (
          <Card key={dispute.id} className="p-6 shadow-medium hover:shadow-strong transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-bold text-foreground">{dispute.title}</h3>
                  <Badge className={statusConfig.color}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {statusConfig.label}
                  </Badge>
                  <Badge className={severityConfig.color}>
                    {severityConfig.label}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {dispute.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(dispute.date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {dispute.communities.length} communities
                  </span>
                </div>
              </div>
            </div>

            <div className="mb-4 p-4 bg-muted/30 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Involved Communities</h4>
              <div className="flex flex-wrap gap-2">
                {dispute.communities.map((community, idx) => (
                  <Badge key={idx} variant="outline" className="text-foreground">
                    {community}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Description</h4>
                <p className="text-sm text-muted-foreground">{dispute.description}</p>
              </div>

              {dispute.resolution && (
                <div className="p-3 bg-secondary/10 rounded-lg border border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Resolution
                  </h4>
                  <p className="text-sm text-foreground">{dispute.resolution}</p>
                </div>
              )}
            </div>

            {dispute.status === "active" && (
              <div className="mt-4 pt-4 border-t border-border flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => handleResolve(dispute.id)}
                >
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Mark as Resolved
                </Button>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default DisputeHistory;
