import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type DataPoint = { time: string; ms: number };

const data: DataPoint[] = [
  { time: "10:00", ms: 45 },
  { time: "10:05", ms: 52 },
  { time: "10:10", ms: 48 },
  { time: "10:15", ms: 42 },
  { time: "10:20", ms: 46 },
  { time: "10:25", ms: 58 },
  { time: "10:30", ms: 44 },
  { time: "10:35", ms: 41 },
  { time: "10:40", ms: 45 },
  { time: "10:45", ms: 42 },
  { time: "10:50", ms: 49 },
  { time: "10:55", ms: 45 },
];

// Lightweight SVG chart component to replace Recharts
function LightweightAreaChart({ data }: { data: DataPoint[] }) {
  const maxMs = Math.max(...data.map((d: DataPoint) => d.ms));
  const minMs = Math.min(...data.map((d: DataPoint) => d.ms));
  const width = 500;
  const height = 100;
  const padding = 5;

  const points = data.map((point: DataPoint, index: number) => {
    const x = (index / (data.length - 1)) * (width - padding * 2) + padding;
    const y = height - padding - ((point.ms - minMs) / (maxMs - minMs)) * (height - padding * 2);
    return `${x},${y}`;
  }).join(' ');

  const areaPath = `M ${padding},${height - padding} L ${points.split(' ')[0]} ${points} L ${width - padding},${height - padding} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[200px]" aria-label="API Response Time Chart">
      <defs className="w-full">
        <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGradient)" className="w-full" />

      {/* Line */}
      <polyline
        points={points}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full"
      />

      {/* X-axis labels */}
      {data.filter((_: DataPoint, i: number) => i % 3 === 0).map((point: DataPoint, index: number) => (
        <text
          key={index}
          x={(index * 3 / (data.length - 1)) * (width - padding * 2) + padding}
          y={height - 1}
          fontSize="3"
          fill="#52525b"
          textAnchor="middle"
        >
          {point.time}
        </text>
      ))}

      {/* Y-axis labels */}
      {[minMs, Math.floor((minMs + maxMs) / 2), maxMs].map((value: number, index: number) => (
        <text
          key={index}
          x="2"
          y={height - padding - (index / 2) * (height - padding * 2)}
          fontSize="3"
          fill="#52525b"
          textAnchor="start"
        >
          {value}ms
        </text>
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
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
              className="bg-primary hover:bg-primary/90 text-white h-12 px-8 text-base shadow-lg shadow-primary/25"
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

        {/* Right Content - Visuals */}
        <div className="relative">
          <div
            className="glass-card rounded-2xl p-6 relative z-10 animate-fade-in"
            style={{ animation: 'fadeIn 0.8s ease-out forwards' }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">API Response Time</h3>
                <p className="text-sm text-muted-foreground">Last 1 hour • avg. 45ms</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Operational
              </div>
            </div>

            <LightweightAreaChart data={data} />

            {/* Floating Status Cards */}
            <div
              className="absolute right-4 top-20 glass p-4 rounded-xl border border-white/10 shadow-xl hidden sm:block animate-fade-in-delayed"
              style={{ animation: 'fadeInDelayed 0.5s ease-out 0.5s forwards', opacity: 0 }}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium">API Gateway</span>
                  <span className="text-xs text-emerald-500 ml-auto">99.99%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium">Database</span>
                  <span className="text-xs text-emerald-500 ml-auto">99.95%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-sm font-medium">Cache Service</span>
                  <span className="text-xs text-red-500 ml-auto">Down</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-full h-full border border-primary/20 rounded-2xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-full h-full border border-primary/10 rounded-2xl -z-20" />
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
