import { Droplets } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-water flex items-center justify-center shadow-soft">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-foreground">WaiSmart</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Empowering rural communities with smart water management through predictive analytics 
              and sustainable irrigation solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/forecasting" className="text-muted-foreground hover:text-primary transition-colors">
                  Predictive Analytics
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-muted-foreground hover:text-primary transition-colors">
                  Power BI Dashboard
                </a>
              </li>
              <li>
                <a href="/conflict-prevention" className="text-muted-foreground hover:text-primary transition-colors">
                  Conflict Prevention
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog & Insights
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-muted-foreground hover:text-primary transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 WaiSmart. Supporting sustainable water management in rural communities.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
