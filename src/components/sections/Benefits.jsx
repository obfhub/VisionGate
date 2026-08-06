import React from "react";
import { motion } from "framer-motion";
import { Zap, ShieldCheck, HandCoins, FileSpreadsheet, KeyRound, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function Benefits() {
  const { t } = useTranslation();

  const LIST = [
    { icon: Zap, titleKey: "benefits.benefit1Title", textKey: "benefits.benefit1" },
    { icon: ShieldCheck, titleKey: "benefits.benefit2Title", textKey: "benefits.benefit2" },
    { icon: HandCoins, titleKey: "benefits.benefit3Title", textKey: "benefits.benefit3" },
    { icon: FileSpreadsheet, titleKey: "benefits.benefit4Title", textKey: "benefits.benefit4" },
    { icon: KeyRound, titleKey: "benefits.benefit5Title", textKey: "benefits.benefit5" },
    { icon: TrendingUp, titleKey: "benefits.benefit6Title", textKey: "benefits.benefit6" },
  ];

  return (
    <section id="beneficii" className="bg-slate-50 py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeading
              center={false}
              eyebrow={t("benefits.eyebrow")}
              title={t("benefits.title")}
              subtitle={t("benefits.subtitle")}
            />
            <div className="mt-10 grid sm:grid-cols-2 gap-6">
              {LIST.map(({ icon: Icon, titleKey, textKey }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-white text-blue-600 border border-slate-200 flex items-center justify-center shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-600">{t(titleKey)}</h3>
                    <p className="mt-1 text-sm text-slate-600 font-light leading-relaxed">{t(textKey)}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="/images/getface.png"
              alt="Tehnician instalând și configurând un terminal de recunoaștere facială"
              className="w-full h-auto scale-150 translate-x-12 sm:translate-x-12 md:translate-x"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}