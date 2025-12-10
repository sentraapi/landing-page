import { Button } from "@/components/ui/button";
import { Sparkles, Check, X } from "lucide-react";

export function FreeTier() {
  return (
    <section className="py-16 bg-background border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-background to-background border border-primary/20 p-8 md:p-12">
          
          <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <Sparkles className="w-64 h-64 text-primary" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                <span>Free Forever Benefit</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your first organization is <span className="text-primary">always free</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in supporting developers and small projects. That's why every user gets a comprehensive free plan for their first organization automatically upon sign-up. No credit card required.
              </p>
              
              <Button size="lg" className="bg-white text-black hover:bg-white/90 font-medium">
                Create Free Account
              </Button>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Free Plan Includes:
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-sm">5 Monitors</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-sm">1 Team Member</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-sm">10-minute Checks</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-primary/20 text-primary">
                    <Check size={14} />
                  </div>
                  <span className="text-sm">1 Month Retention</span>
                </div>

                <div className="flex items-center gap-3 opacity-50">
                  <div className="p-1 rounded-full bg-white/10 text-muted-foreground">
                    <X size={14} />
                  </div>
                  <span className="text-sm text-muted-foreground">Notifications</span>
                </div>
                
                <div className="flex items-center gap-3 opacity-50">
                  <div className="p-1 rounded-full bg-white/10 text-muted-foreground">
                    <X size={14} />
                  </div>
                  <span className="text-sm text-muted-foreground">Status Pages</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
