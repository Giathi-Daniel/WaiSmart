import { Card } from "@/components/ui/card";
import { Target, Users, Leaf, TrendingUp } from "lucide-react";

const Impact = () => {
  const impacts = [
    {
      icon: Target,
      stat: "94%",
      label: "Prediction Accuracy",
      description: "Highly reliable water shortage forecasts"
    },
    {
      icon: Users,
      stat: "10K+",
      label: "Farmers Served",
      description: "Across drought-prone rural areas"
    },
    {
      icon: Leaf,
      stat: "40%",
      label: "Water Waste Reduced",
      description: "Through optimized irrigation scheduling"
    },
    {
      icon: TrendingUp,
      stat: "60%",
      label: "Conflict Reduction",
      description: "In shared water resource disputes"
    }
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-foreground">Measurable </span>
            <span className="bg-gradient-water bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results supporting sustainable irrigation and reducing water-related conflicts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-strong transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-water flex items-center justify-center group-hover:scale-110 transition-transform shadow-soft">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="text-4xl font-bold mb-2 bg-gradient-water bg-clip-text text-transparent">
                {impact.stat}
              </div>
              <div className="font-semibold text-foreground mb-2">{impact.label}</div>
              <p className="text-sm text-muted-foreground">{impact.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
