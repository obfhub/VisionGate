import { motion } from "framer-motion";
import { Search, PenTool, Wrench, Settings2, GraduationCap } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function HowItWorks() {
  const { t } = useTranslation();

  const STEPS = [
    { icon: Search, titleKey: "howItWorks.step1Title", textKey: "howItWorks.step1" },
    { icon: PenTool, titleKey: "howItWorks.step2Title", textKey: "howItWorks.step2" },
    { icon: Wrench, titleKey: "howItWorks.step3Title", textKey: "howItWorks.step3" },
    { icon: Settings2, titleKey: "howItWorks.step4Title", textKey: "howItWorks.step4" },
    { icon: GraduationCap, titleKey: "howItWorks.step5Title", textKey: "howItWorks.step5" },
  ];

  return (
    <section id="cum-functioneaza" className="bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          eyebrow={t("howItWorks.eyebrow")}
          title={t("howItWorks.title")}
          subtitle={t("howItWorks.subtitle")}
        />

        <div className="mt-16 relative">
          <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-slate-200 hidden sm:block" />
          <div className="space-y-8">
            {STEPS.map(({ icon: Icon, titleKey, textKey }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.55, delay: i * 0.05 }}
                className="relative flex gap-6 items-start"
              >
                <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 flex-1 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-bold text-blue-600 tracking-tight">{t(titleKey)}</h3>
                  <p className="mt-2 text-slate-600 font-light leading-relaxed">{t(textKey)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}