import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Forecasting from "./pages/Forecasting";
import ConflictPrevention from "./pages/ConflictPrevention";
import PowerBIDashboard from "./pages/PowerBIDashboard";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import CaseStudies from "./pages/CaseStudies";
import Documentation from "./pages/Documentation";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/forecasting" element={<Forecasting />} />
          <Route path="/conflict-prevention" element={<ConflictPrevention />} />
          <Route path="/dashboard" element={<PowerBIDashboard />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/documentation" element={<Documentation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
