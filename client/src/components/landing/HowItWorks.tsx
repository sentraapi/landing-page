import { Search, Timer, Satellite, LineChart } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Register Endpoints",
    description: "Add your API endpoints in seconds. We support REST, GraphQL, and SOAP."
  },
  {
    icon: Timer,
    step: "02",
    title: "Set Frequency",
    description: "Choose check intervals from 30 seconds to 5 minutes based on your needs."
  },
  {
    icon: Satellite,
    step: "03",
    title: "Get Notifications",
    description: "Configure alert rules and receive notifications via your preferred channels."
  },
  {
    icon: LineChart,
    step: "04",
    title: "Analyze Data",
    description: "View detailed performance graphs, uptime history, and global latency maps."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it Works</h2>
          <p className="text-muted-foreground text-lg">
            Start monitoring your API in less than 2 minutes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-[1px] bg-white/10" />
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-background border border-white/10 flex items-center justify-center mb-6 shadow-xl group-hover:border-primary/50 group-hover:shadow-primary/20 transition-all">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                
                <div className="mb-2 text-xs font-bold tracking-widest text-primary/80 uppercase">
                  Step {step.step}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
