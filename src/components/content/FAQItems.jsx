import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default async function FAQItems({ faq }) {
  return (
    <Accordion type="single" collapsible className="w-full animate-fade-in">
      {faq.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="hover:text-primary transition-colors duration-300 ease-in-out">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-balance">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
