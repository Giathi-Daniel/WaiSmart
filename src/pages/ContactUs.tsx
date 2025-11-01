import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Mail, MapPin, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

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
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">Contact Us</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Get in touch with our team</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's <span className="bg-gradient-water bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Have questions about WaiSmart? We're here to help.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          <Card className="p-6 sm:p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
            <a 
              href="tel:+254716738500" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +254 716 738 500
            </a>
          </Card>

          <Card className="p-6 sm:p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
              <Mail className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
            <a 
              href="mailto:giathidaniel252@gmail.com" 
              className="text-muted-foreground hover:text-secondary transition-colors break-all"
            >
              giathidaniel252@gmail.com
            </a>
          </Card>

          <Card className="p-6 sm:p-8 text-center hover:shadow-strong transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground">
              Nairobi, Kenya
            </p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="John"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john.doe@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="How can we help?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                rows={6}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Tell us more about your inquiry..."
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-water hover:shadow-glow transition-all"
              size="lg"
            >
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ContactUs;
