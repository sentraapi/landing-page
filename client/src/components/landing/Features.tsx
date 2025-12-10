import { Check, Zap, Shield, Activity, BarChart2, Cloud } from "lucide-react";

const features = [
  {
    icon: Check,
    title: "HTTP & HTTPS Monitoring",
    description: "Monitor any HTTP or HTTPS endpoint with ease. Support for custom headers and payloads."
  },
  {
    icon: Zap,
    title: "Fast Global Checks",
    description: "Get results in milliseconds from multiple global locations to ensure worldwide availability."
  },
  {
    icon: Shield,
    title: "Instant Alerts",
    description: "Be notified immediately via email, Slack, Discord, or webhook when services go down."
  },
  {
    icon: Activity,
    title: "Real-Time Dashboard",
    description: "Monitor all your services in a single view with live updates and status indicators."
  },
  {
    icon: BarChart2,
    title: "Detailed Analytics",
    description: "Access detailed uptime reports, response time history, and availability metrics."
  },
  {
    icon: Cloud,
    title: "Public Status Pages",
    description: "Keep your customers informed automatically with beautiful, branded public status pages."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to stay online</h2>
          <p className="text-muted-foreground text-lg">
            Powerful features to help you monitor, debug, and improve your API reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
