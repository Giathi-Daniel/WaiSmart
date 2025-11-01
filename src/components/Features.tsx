import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Smartphone, BarChart3, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Machine learning models forecast water shortages up to 14 days in advance using rainfall, reservoir, and soil moisture data.",
      gradient: "bg-gradient-water",
      action: () => navigate("/forecasting"),
    },
    {
      icon: Smartphone,
      title: "SMS Alert System",
      description: "Automated notifications sent directly to farmers and water committees when critical thresholds are reached.",
      gradient: "bg-gradient-alert",
      action: () => navigate("/forecasting"),
    },
    {
      icon: BarChart3,
      title: "Power BI Dashboards",
      description: "Interactive visualizations for policy officers and NGOs showing water stress zones and supply-demand balance.",
      gradient: "bg-gradient-sustainability",
      action: () => navigate("/dashboard"),
    },
    {
      icon: Shield,
      title: "Conflict Prevention",
      description: "Data-driven insights support fair water distribution and reduce disputes over shared community resources.",
      gradient: "bg-gradient-water",
      action: () => navigate("/conflict-prevention"),
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Powerful </span>
            <span className="bg-gradient-sustainability bg-clip-text text-transparent">Features</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tools designed for sustainable water management in rural communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-strong transition-all duration-300 group animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={feature.action}
            >
              <div className={`w-14 h-14 rounded-xl ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-soft`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
              <Button variant="ghost" size="sm" className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Explore →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
