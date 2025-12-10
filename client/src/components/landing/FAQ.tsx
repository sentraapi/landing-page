import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the Free Plan for the first organization work?",
    answer: "When you create your account, your first organization is automatically enrolled in our Free Forever plan. This includes 5 monitors, 10-minute check intervals, and 1 month of data retention. It's perfect for personal projects or testing the platform."
  },
  {
    question: "What counts as a 'monitor'?",
    answer: "A monitor is a single URL endpoint that we check periodically. For example, checking 'https://api.yourapp.com/health' counts as one monitor. You can configure different HTTP methods, headers, and payloads for each monitor."
  },
  {
    question: "Can I upgrade my free organization later?",
    answer: "Absolutely. You can upgrade your organization to a paid plan at any time to unlock more monitors, faster check intervals (down to 30s), notifications, and longer data retention."
  },
  {
    question: "How do notifications work?",
    answer: "On paid plans, you can receive alerts via Email, Slack, Discord, Microsoft Teams, or custom Webhooks. We notify you immediately when a monitor goes down and when it comes back up. The Free plan does not include active notifications."
  },
  {
    question: "Do you offer public status pages?",
    answer: "Yes, status pages are available on all paid plans. They allow you to showcase the reliability of your services to your customers with a branded, public-facing page."
  },
  {
    question: "What if I need more than the Enterprise limits?",
    answer: "We offer custom solutions for high-volume needs. Contact our sales team for plans with unlimited monitors, sub-second check intervals, and dedicated support."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Have questions? We're here to help.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-white/10 bg-white/5 rounded-lg px-6 data-[state=open]:bg-white/10 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
