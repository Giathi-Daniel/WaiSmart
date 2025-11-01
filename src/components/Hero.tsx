import { Button } from "@/components/ui/button";
import { Droplets, TrendingUp, BarChart3, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-water.jpg";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Animated water drops decoration */}
      <div className="absolute top-20 left-10 animate-pulse-soft">
        <Droplets className="w-16 h-16 text-primary/20" />
      </div>
      <div className="absolute bottom-32 right-20 animate-pulse-soft delay-700">
        <Droplets className="w-12 h-12 text-secondary/20" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-slide-up">
          {/* GitHub Star Button */}
          <div className="mb-4 sm:mb-6">
            <a 
              href="https://github.com/Giathi-Daniel/WaiSmart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="gap-2 hover:bg-primary/10 transition-all"
              >
                <Star className="w-4 h-4" />
                <span className="hidden sm:inline">Star on GitHub</span>
                <span className="sm:hidden">Star</span>
              </Button>
            </a>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 mt-4 sm:mt-0">
            <Droplets className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Smart Water Management</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Sustainable Water</span>
            <br />
            <span className="bg-gradient-water bg-clip-text text-transparent">
              for Rural Communities
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            WaiSmart leverages predictive analytics and machine learning to monitor, optimize, 
            and forecast water usage in drought-prone areas—empowering farmers, water committees, 
            and policymakers with actionable insights.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-water hover:shadow-glow transition-all"
              onClick={() => navigate("/dashboard")}
            >
              <BarChart3 className="w-5 h-5 mr-2" />
              View Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2"
              onClick={() => navigate("/forecasting")}
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              View Forecasting
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft">
              <div className="text-3xl font-bold text-primary mb-1">94%</div>
              <div className="text-sm text-muted-foreground">Forecast Accuracy</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft">
              <div className="text-3xl font-bold text-secondary mb-1">2.3M</div>
              <div className="text-sm text-muted-foreground">Liters Saved Daily</div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border shadow-soft">
              <div className="text-3xl font-bold text-accent mb-1">850+</div>
              <div className="text-sm text-muted-foreground">Active Alerts</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
