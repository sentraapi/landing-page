import { CheckCircle, Globe, ShieldCheck, Bell } from "lucide-react";
import dashboardImg from "@assets/generated_images/dashboard.png";

const benefits = [
  {
    icon: CheckCircle,
    title: "Reduce Downtime",
    description: "Catch issues before they impact your users with high-frequency checks."
  },
  {
    icon: Globe,
    title: "Know Before Customers",
    description: "Get alerted seconds after a failure, not hours later."
  },
  {
    icon: ShieldCheck,
    title: "Teams & Permissions",
    description: "Manage access with role-based permissions for your entire engineering team."
  },
  {
    icon: Bell,
    title: "Multi-channel Alerts",
    description: "Get notified through Email, Slack, Discord, SMS, or custom Webhooks."
  }
];

export function Benefits() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Stop guessing if your <br />
              <span className="text-primary">API is healthy</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              SentraAPI provides the visibility you need to maintain 99.99% uptime. 
              Trust your infrastructure with our enterprise-grade monitoring solution.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((item, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-3 text-white font-medium">
                    <item.icon className="h-5 w-5 text-primary" />
                    {item.title}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Image Container with Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
               <img
                 src={dashboardImg}
                 alt="SentraAPI Dashboard showing real-time API monitoring with uptime statistics and response time graphs"
                 className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                 loading="lazy"
                 decoding="async"
                 width="1276"
                 height="884"
               />

               {/* Overlay Gradient */}
               <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
