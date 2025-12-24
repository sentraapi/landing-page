import { lazy, Suspense } from "react";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";

// Lazy load below-the-fold components for better initial page load
const Benefits = lazy(() => import("@/components/landing/Benefits").then(m => ({ default: m.Benefits })));
const HowItWorks = lazy(() => import("@/components/landing/HowItWorks").then(m => ({ default: m.HowItWorks })));
const Pricing = lazy(() => import("@/components/landing/Pricing").then(m => ({ default: m.Pricing })));
const FreeTier = lazy(() => import("@/components/landing/FreeTier").then(m => ({ default: m.FreeTier })));
const FAQ = lazy(() => import("@/components/landing/FAQ").then(m => ({ default: m.FAQ })));
const Footer = lazy(() => import("@/components/landing/Footer").then(m => ({ default: m.Footer })));

// Lightweight loading skeleton
function SectionSkeleton() {
  return <div className="py-24 animate-pulse" aria-hidden="true"><div className="container mx-auto px-6 h-40 bg-white/5 rounded-lg" /></div>;
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Suspense fallback={<SectionSkeleton />}>
        <Benefits />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorks />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Pricing />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FreeTier />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQ />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <Footer />
      </Suspense>
    </div>
  );
}
