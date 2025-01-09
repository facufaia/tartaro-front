import FAQItems from "@/components/content/FAQItems";
import ShippingInfo from "@/components/content/ShippingInfo";
import ContactForm from "@/components/forms/ContactForm";
import { fetchCollection } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function FAQ() {
  const { data } = await fetchCollection("faq");
  const {
    title,
    contact_form_title,
    question_1,
    answer_1,
    question_2,
    answer_2,
    shipping,
    table_header,
    table_header_2,
    table_header_3,
  } = data;

  const faq = [
    {
      question: question_1,
      answer: answer_1,
    },
    {
      question: question_2,
      answer: answer_2,
    },
  ];

  const shippingData = {
    shipping,
    table_header,
    table_header_2,
    table_header_3,
  };

  return (
    <main className="mx-auto py-24 min-h-[90svh] px-8 md:px-16">
      <h1 className="mb-4 text-5xl font-bold text-pretty animate-fade-in-right">
        {title}
      </h1>
      <FAQItems faq={faq} />
      <ShippingInfo shippingData={shippingData} />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
            {contact_form_title}
          </h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
