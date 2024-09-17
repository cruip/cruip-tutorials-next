export const metadata = {
  title: "Animated Accordion - Cruip Tutorials",
  description: "Page description",
};

import Accordion from "@/components/accordion";
import Banner from "@/components/banner";

export default function AnimatedAccordionPage() {
  const faqs = [
    {
      title: "What are the advantages of your service?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title:
        "Are there any fees or commissions in addition to the monthly subscription?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "You really don't charge per user? Why not?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "What happens when I go over my monthly active limit?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: true,
    },
    {
      title: "Can your service help me understand how to work with my product?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "Which third-party application do you integrate with?",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
    {
      title: "I have another question!",
      text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
      active: false,
    },
  ];

  return (
    <>
      <main className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-50">
        <div className="mx-auto w-full max-w-2xl px-4 py-24 md:px-6">
          <h1 className="mb-4 text-2xl font-bold text-slate-900">FAQs</h1>

          <div className="divide-y divide-slate-200">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                title={faq.title}
                id={`faqs-${index}`}
                active={faq.active}
              >
                {faq.text}
              </Accordion>
            ))}
          </div>
        </div>
      </main>

      <Banner
        tutorialUrl="https://cruip.com/building-a-simple-animated-accordion-component-with-tailwind-css/"
        downloadUrl="https://github.com/cruip/cruip-tutorials-next/blob/main/components/accordion.tsx"
      />
    </>
  );
}
