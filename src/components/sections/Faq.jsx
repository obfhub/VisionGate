import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionHeading from "./SectionHeading";

export default function Faq() {
  const { t } = useTranslation();

  const FAQS = [
    { qKey: "faq.q1", aKey: "faq.a1" },
    { qKey: "faq.q2", aKey: "faq.a2" },
    { qKey: "faq.q3", aKey: "faq.a3" },
    { qKey: "faq.q4", aKey: "faq.a4" },
    { qKey: "faq.q5", aKey: "faq.a5" },
    { qKey: "faq.q6", aKey: "faq.a6" },
    { qKey: "faq.q7", aKey: "faq.a7" },
  ];

  return (
    <section id="intrebari" className="bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <SectionHeading eyebrow={t("faq.eyebrow")} title={t("faq.title")} />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-3xl border border-slate-200 shadow-sm bg-white px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-blue-600 font-semibold hover:no-underline py-5">
                  {t(f.qKey)}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 font-light leading-relaxed pb-5">
                  {t(f.aKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}