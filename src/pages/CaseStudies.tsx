import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, TrendingUp, Users, Droplets } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashboardImage from "@/assets/dashboard-bg.jpg";
import heroImage from "@/assets/hero-water.jpg";

interface CaseStudy {
  id: number;
  title: string;
  location: string;
  impact: string;
  description: string;
  image: string;
  category: string;
  metrics: {
    label: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Turkana County: Resolving Water Conflicts Through Data",
    location: "Turkana County, Kenya",
    impact: "Reduced conflicts by 78%",
    description: "Implementation of fair allocation system using real-time monitoring helped resolve long-standing disputes between pastoral communities and agricultural settlements.",
    image: heroImage,
    category: "Conflict Resolution",
    metrics: [
      { label: "Water Saved", value: "1.2M L/day", icon: <Droplets className="w-4 h-4" /> },
      { label: "Communities Served", value: "12", icon: <Users className="w-4 h-4" /> },
      { label: "Efficiency Gain", value: "+45%", icon: <TrendingUp className="w-4 h-4" /> }
    ]
  },
  {
    id: 2,
    title: "Predictive Analytics Success in Makueni",
    location: "Makueni County, Kenya",
    impact: "94% forecast accuracy",
    description: "Machine learning models accurately predicted water shortages 14 days in advance, enabling proactive resource allocation and preventing crisis situations.",
    image: dashboardImage,
    category: "Predictive Analytics",
    metrics: [
      { label: "Accuracy Rate", value: "94%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Farmers Reached", value: "850+", icon: <Users className="w-4 h-4" /> },
      { label: "Crisis Prevented", value: "23", icon: <Droplets className="w-4 h-4" /> }
    ]
  },
  {
    id: 3,
    title: "Smart Irrigation in Kitui: Doubling Crop Yields",
    location: "Kitui County, Kenya",
    impact: "112% increase in yields",
    description: "Precision irrigation guided by WaiSmart analytics helped farmers optimize water usage, resulting in dramatic improvements in crop production while conserving water.",
    image: heroImage,
    category: "Agriculture",
    metrics: [
      { label: "Yield Increase", value: "+112%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Water Saved", value: "890K L/day", icon: <Droplets className="w-4 h-4" /> },
      { label: "Farms Optimized", value: "340", icon: <Users className="w-4 h-4" /> }
    ]
  },
  {
    id: 4,
    title: "Marsabit: Community-Driven Water Management",
    location: "Marsabit County, Kenya",
    impact: "15 communities empowered",
    description: "Local water committees used Power BI dashboards to make informed decisions, ensuring equitable distribution and sustainable management of limited water resources.",
    image: dashboardImage,
    category: "Community Empowerment",
    metrics: [
      { label: "Communities", value: "15", icon: <Users className="w-4 h-4" /> },
      { label: "Fair Distribution", value: "98%", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "Water Access", value: "+67%", icon: <Droplets className="w-4 h-4" /> }
    ]
  },
  {
    id: 5,
    title: "Garissa County: Drought Preparedness",
    location: "Garissa County, Kenya",
    impact: "3-month early warning system",
    description: "Advanced forecasting enabled authorities to prepare for droughts months in advance, ensuring water security and preventing humanitarian crises.",
    image: heroImage,
    category: "Disaster Prevention",
    metrics: [
      { label: "Warning Time", value: "90 days", icon: <TrendingUp className="w-4 h-4" /> },
      { label: "People Protected", value: "45K+", icon: <Users className="w-4 h-4" /> },
      { label: "Resources Saved", value: "$2.1M", icon: <Droplets className="w-4 h-4" /> }
    ]
  },
  {
    id: 6,
    title: "Wajir: Livestock Water Management",
    location: "Wajir County, Kenya",
    impact: "35% reduction in livestock loss",
    description: "Optimized water point management and predictive alerts helped pastoralist communities maintain healthy livestock even during dry seasons.",
    image: dashboardImage,
    category: "Pastoral Systems",
    metrics: [
      { label: "Livestock Saved", value: "12K+", icon: <Users className="w-4 h-4" /> },
      { label: "Water Points", value: "28", icon: <Droplets className="w-4 h-4" /> },
      { label: "Efficiency", value: "+58%", icon: <TrendingUp className="w-4 h-4" /> }
    ]
  }
];

const CaseStudies = () => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Conflict Resolution": "bg-primary/10 text-primary border-primary/20",
      "Predictive Analytics": "bg-secondary/10 text-secondary border-secondary/20",
      "Agriculture": "bg-green-500/10 text-green-600 border-green-500/20",
      "Community Empowerment": "bg-purple-500/10 text-purple-600 border-purple-500/20",
      "Disaster Prevention": "bg-orange-500/10 text-orange-600 border-orange-500/20",
      "Pastoral Systems": "bg-blue-500/10 text-blue-600 border-blue-500/20"
    };
    return colors[category] || colors["Predictive Analytics"];
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
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">Case Studies</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Real impact across Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Success Stories from <span className="bg-gradient-water bg-clip-text text-transparent">the Field</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Discover how WaiSmart is transforming water management across Kenya's rural communities
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study) => (
            <Card 
              key={study.id} 
              className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(study.category)}>
                    {study.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{study.location}</span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {study.description}
                </p>

                {/* Impact Badge */}
                <div className="mb-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs text-muted-foreground mb-1">Key Impact</p>
                  <p className="text-sm font-semibold text-primary">{study.impact}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center">
                      <div className="flex items-center justify-center mb-1 text-primary">
                        {metric.icon}
                      </div>
                      <p className="text-xs font-bold text-foreground">{metric.value}</p>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
