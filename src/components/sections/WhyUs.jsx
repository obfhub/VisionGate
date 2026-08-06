import { motion } from "framer-motion";
import { Target, BadgeCheck, Clock4, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  const { t } = useTranslation();

  const REASONS = [
    { icon: Target, titleKey: "whyUs.reason1Title", textKey: "whyUs.reason1" },
    { icon: BadgeCheck, titleKey: "whyUs.reason2Title", textKey: "whyUs.reason2" },
    { icon: Clock4, titleKey: "whyUs.reason3Title", textKey: "whyUs.reason3" },
    { icon: Headphones, titleKey: "whyUs.reason4Title", textKey: "whyUs.reason4" },
  ];

  const STATS = [
    { valueKey: "whyUs.stat1Value", labelKey: "whyUs.stat1Label" },
    { valueKey: "whyUs.stat2Value", labelKey: "whyUs.stat2Label" },
    { valueKey: "whyUs.stat3Value", labelKey: "whyUs.stat3Label" },
    { valueKey: "whyUs.stat4Value", labelKey: "whyUs.stat4Label" },
  ];

  return (
    <section id="de-ce-noi" className="bg-slate-50 py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t("whyUs.eyebrow")}
          title={t("whyUs.title")}
        />

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {REASONS.map(({ icon: Icon, titleKey, textKey }, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="scan-card bg-white rounded-3xl border border-slate-200 shadow-sm p-8 flex gap-5 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-600 tracking-tight">{t(titleKey)}</h3>
                <p className="mt-2 text-slate-600 font-light leading-relaxed">{t(textKey)}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map(({ valueKey, labelKey }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-600 tracking-tight">{t(valueKey)}</div>
              <div className="mt-1 text-sm text-slate-600 font-light">{t(labelKey)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}