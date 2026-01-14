import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Activity, Globe, Shield, Zap } from "lucide-react";

// Monitoring endpoints data
const endpoints = [
  { name: "api.example.com/health", status: "up", latency: "45ms", region: "US-East" },
  { name: "api.example.com/users", status: "up", latency: "52ms", region: "EU-West" },
  { name: "api.example.com/orders", status: "up", latency: "38ms", region: "Asia-Pacific" },
  { name: "api.example.com/payments", status: "warning", latency: "156ms", region: "US-West" },
];

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 text-center gap-12 lg:gap-20 items-center">
        <div className="space-y-8 flex items-center justify-center flex-col">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v0.1 is now live
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Simple, Fast, and Reliable <span className="text-primary">API Monitoring</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            Get instant alerts, track uptime, and ensure your services never go down.
            Monitor your endpoints from 15+ global locations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-black h-12 px-8 text-base shadow-lg shadow-primary/25"
              onClick={() => window.location.href = 'https://app.sentraapi.com/register'}
              aria-label="Start free trial of SentraAPI"
            >
              Start Free Trial <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>Free trial forever</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDelayed {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}
