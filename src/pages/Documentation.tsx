import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen, Code, Database, BarChart3, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DocSection {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  topics: string[];
}

const docSections: DocSection[] = [
  {
    id: 1,
    title: "Getting Started",
    description: "Learn the basics of WaiSmart and set up your first water monitoring system",
    icon: <BookOpen className="w-6 h-6" />,
    category: "Beginner",
    topics: ["Quick Start Guide", "System Requirements", "Initial Setup", "First Dashboard"]
  },
  {
    id: 2,
    title: "Predictive Analytics",
    description: "Understand how our ML models forecast water availability and usage patterns",
    icon: <BarChart3 className="w-6 h-6" />,
    category: "Advanced",
    topics: ["Forecast Models", "Data Sources", "Accuracy Metrics", "Alert Configuration"]
  },
  {
    id: 3,
    title: "Power BI Integration",
    description: "Create interactive dashboards for policy makers and NGOs",
    icon: <Database className="w-6 h-6" />,
    category: "Intermediate",
    topics: ["Dashboard Setup", "Data Connections", "Custom Reports", "Sharing & Permissions"]
  },
  {
    id: 4,
    title: "API Documentation",
    description: "Integrate WaiSmart data into your own applications and systems",
    icon: <Code className="w-6 h-6" />,
    category: "Developer",
    topics: ["REST API", "Authentication", "Endpoints", "Rate Limits", "Sample Code"]
  },
  {
    id: 5,
    title: "Conflict Prevention System",
    description: "Implement fair water allocation and dispute resolution mechanisms",
    icon: <Shield className="w-6 h-6" />,
    category: "Intermediate",
    topics: ["Allocation Rules", "Monitoring Tools", "Dispute History", "Fairness Metrics"]
  },
  {
    id: 6,
    title: "Best Practices",
    description: "Learn from successful implementations and optimize your water management",
    icon: <Zap className="w-6 h-6" />,
    category: "All Levels",
    topics: ["Data Quality", "Community Engagement", "Seasonal Planning", "Resource Optimization"]
  }
];

const Documentation = () => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Beginner": "bg-green-500/10 text-green-600 border-green-500/20",
      "Intermediate": "bg-secondary/10 text-secondary border-secondary/20",
      "Advanced": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Developer": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "All Levels": "bg-primary/10 text-primary border-primary/20"
    };
    return colors[category] || colors["All Levels"];
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => navigate("/")}
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">Documentation</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Guides and references</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-water bg-clip-text text-transparent">WaiSmart</span> Documentation
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Everything you need to know to maximize your water management efficiency
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <Card className="p-4 text-center hover:shadow-soft transition-all cursor-pointer">
            <div className="text-2xl mb-2">🚀</div>
            <p className="text-sm font-medium text-foreground">Quick Start</p>
          </Card>
          <Card className="p-4 text-center hover:shadow-soft transition-all cursor-pointer">
            <div className="text-2xl mb-2">📖</div>
            <p className="text-sm font-medium text-foreground">Tutorials</p>
          </Card>
          <Card className="p-4 text-center hover:shadow-soft transition-all cursor-pointer">
            <div className="text-2xl mb-2">💡</div>
            <p className="text-sm font-medium text-foreground">Examples</p>
          </Card>
          <Card className="p-4 text-center hover:shadow-soft transition-all cursor-pointer">
            <div className="text-2xl mb-2">❓</div>
            <p className="text-sm font-medium text-foreground">FAQ</p>
          </Card>
        </div>

        {/* Documentation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {docSections.map((section) => (
            <Card 
              key={section.id} 
              className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              <div className="p-5 sm:p-6">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    {section.icon}
                  </div>
                  <Badge className={getCategoryColor(section.category)}>
                    {section.category}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {section.description}
                </p>

                {/* Topics */}
                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2">Topics Covered:</p>
                  <ul className="space-y-1">
                    {section.topics.map((topic, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full mt-4" 
                  variant="outline"
                  size="sm"
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Resources */}
        <Card className="mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
              Need More Help?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Join our community forum or reach out to our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg">
                Community Forum
              </Button>
              <Button 
                className="bg-gradient-water hover:shadow-glow transition-all" 
                size="lg"
                onClick={() => navigate("/contact")}
              >
                Contact Support
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;
