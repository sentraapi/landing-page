import { Button } from "@/components/ui/button";
import { Check, X, Database, Globe, Mail, Timer, User, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$7",
    period: "month",
    description: "Perfect for side projects",
    features: [
      { icon: Check, text: "25 monitors", included: true },
      { icon: User, text: "1 team member", included: true },
      { icon: Timer, text: "Check every 5m", included: true },
      { icon: Globe, text: "1 Status page", included: true },
      { icon: Database, text: "3 months retention", included: true },
      { icon: Mail, text: "Email notifications", included: true },
      { icon: X, text: "Webhook notifications", included: false },
      { icon: X, text: "SSL validation", included: false },
    ],
    buttonText: "Get Started",
    highlight: false
  },
  {
    name: "Pro",
    price: "$25",
    period: "month",
    description: "For growing startups",
    features: [
      { icon: Check, text: "100 monitors", included: true },
      { icon: Users, text: "5 team members", included: true },
      { icon: Timer, text: "Check every 1m", included: true },
      { icon: Globe, text: "5 Status pages", included: true },
      { icon: Database, text: "6 months retention", included: true },
      { icon: Mail, text: "Email notifications", included: true },
      { icon: Check, text: "Webhook notifications", included: true },
      { icon: Check, text: "SSL validation", included: true },
    ],
    buttonText: "Subscribe to Pro",
    highlight: true,
    badge: "Most Popular"
  },
  {
    name: "Enterprise",
    price: "$50",
    period: "month",
    description: "For serious businesses",
    features: [
      { icon: Check, text: "200 monitors", included: true },
      { icon: Users, text: "15 team members", included: true },
      { icon: Timer, text: "Check every 30s", included: true },
      { icon: Globe, text: "10 Status pages", included: true },
      { icon: Database, text: "12 months retention", included: true },
      { icon: Mail, text: "Email notifications", included: true },
      { icon: Check, text: "Webhook notifications", included: true },
      { icon: Check, text: "SSL validation", included: true },
    ],
    buttonText: "Contact Sales",
    highlight: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "relative flex flex-col p-8 rounded-2xl border transition-all duration-300",
                plan.highlight 
                  ? "bg-primary/5 border-primary shadow-2xl shadow-primary/10 scale-105 z-10" 
                  : "bg-white/5 border-white/10 hover:border-white/20"
              )}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  {plan.badge}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm">
                    <div className={cn(
                      "p-1 rounded-full",
                      feature.included ? "bg-primary/20 text-primary" : "bg-white/5 text-muted-foreground"
                    )}>
                      {feature.included ? <Check size={12} /> : <X size={12} />}
                    </div>
                    <span className={cn(
                      !feature.included && "text-muted-foreground line-through opacity-70"
                    )}>
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              <Button 
                className={cn(
                  "w-full",
                  plan.highlight 
                    ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/25" 
                    : "bg-white/10 hover:bg-white/20 text-white"
                )}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
