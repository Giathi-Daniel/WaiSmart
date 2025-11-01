import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import dashboardImage from "@/assets/dashboard-bg.jpg";
import heroImage from "@/assets/hero-water.jpg";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Predictive Analytics is Transforming Water Management in Kenya",
    excerpt: "Discover how machine learning and real-time data are helping rural communities predict and prevent water shortages before they happen.",
    image: heroImage,
    author: "Dr. Sarah Kimani",
    date: "October 15, 2025",
    readTime: "5 min read",
    category: "Technology"
  },
  {
    id: 2,
    title: "Success Story: Reducing Water Conflicts in Turkana County",
    excerpt: "Learn how data-driven allocation systems helped resolve long-standing disputes and ensure fair water distribution across communities.",
    image: dashboardImage,
    author: "John Mwangi",
    date: "October 8, 2025",
    readTime: "7 min read",
    category: "Case Study"
  },
  {
    id: 3,
    title: "The Role of Power BI Dashboards in Policy Decision Making",
    excerpt: "NGOs and policy officers share how interactive visualizations are enabling faster, more informed decisions about water resource allocation.",
    image: heroImage,
    author: "Patricia Omondi",
    date: "September 28, 2025",
    readTime: "6 min read",
    category: "Insights"
  },
  {
    id: 4,
    title: "Sustainable Irrigation: Balancing Crop Yield and Water Conservation",
    excerpt: "Explore innovative irrigation techniques that maximize agricultural productivity while preserving precious water resources in drought-prone areas.",
    image: dashboardImage,
    author: "Dr. Samuel Mutua",
    date: "September 20, 2025",
    readTime: "8 min read",
    category: "Agriculture"
  },
  {
    id: 5,
    title: "Community Engagement: The Key to Successful Water Management",
    excerpt: "Why involving local water committees and farmers in the decision-making process leads to better outcomes and lasting change.",
    image: heroImage,
    author: "Grace Wanjiru",
    date: "September 12, 2025",
    readTime: "5 min read",
    category: "Community"
  },
  {
    id: 6,
    title: "Climate Change and Water Scarcity: Preparing for the Future",
    excerpt: "Understanding climate patterns and their impact on water availability, and how predictive models help communities adapt proactively.",
    image: dashboardImage,
    author: "Dr. Michael Odhiambo",
    date: "September 5, 2025",
    readTime: "9 min read",
    category: "Climate"
  }
];

const Blog = () => {
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Technology: "bg-primary/10 text-primary border-primary/20",
      "Case Study": "bg-secondary/10 text-secondary border-secondary/20",
      Insights: "bg-accent/10 text-accent border-accent/20",
      Agriculture: "bg-green-500/10 text-green-600 border-green-500/20",
      Community: "bg-purple-500/10 text-purple-600 border-purple-500/20",
      Climate: "bg-blue-500/10 text-blue-600 border-blue-500/20"
    };
    return colors[category] || colors.Technology;
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
                <h1 className="text-xl sm:text-2xl font-bold text-foreground">Blog & Insights</h1>
                <p className="text-xs sm:text-sm text-muted-foreground">Stories and updates from the field</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Latest from <span className="bg-gradient-water bg-clip-text text-transparent">WaiSmart</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Insights, success stories, and innovations in sustainable water management
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden hover:shadow-strong transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
