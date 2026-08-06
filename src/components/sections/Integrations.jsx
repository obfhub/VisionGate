import React from "react";
import { motion } from "framer-motion";
import { MonitorCog, Lock, Magnet, DoorOpen, CarFront, Network } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function Integrations() {
  const { t } = useTranslation();

  const INTEGRATIONS = [
    { icon: MonitorCog, titleKey: "integrations.hikcentral", textKey: "integrations.hikcentalDesc" },
    { icon: Lock, titleKey: "integrations.yaleElectromagnetic", textKey: "integrations.yaleElectromagneticDesc" },
    { icon: Magnet, titleKey: "integrations.electromagnets", textKey: "integrations.electromagnetsDesc" },
    { icon: DoorOpen, titleKey: "integrations.turnstiles", textKey: "integrations.turnstileDesc" },
    { icon: CarFront, titleKey: "integrations.barriers", textKey: "integrations.barriersDesc" },
    { icon: Network, titleKey: "integrations.networkTimekeeping", textKey: "integrations.networkTimekeepingDesc" },
  ];

  return (
    <section id="integrari" className="bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t("integrations.eyebrow")}
          title={t("integrations.title")}
          subtitle={t("integrations.subtitle")}
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-transparent"
          >
            <img
              src="/images/fixterminals.png"
              alt="Schemă tehnică: terminal facial conectat la yală electromagnetică și platformă de management"
              className="w-full h-auto scale-150 -translate-x-12"
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="lg:col-span-3 grid sm:grid-cols-2 gap-6"
          >
            {INTEGRATIONS.map(({ icon: Icon, titleKey, textKey }, index) => (
              <motion.article
                key={index}
                variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.5 }}
                className="scan-card bg-white rounded-3xl border border-slate-200 shadow-sm p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="mt-4 font-bold text-blue-600 tracking-tight">{t(titleKey)}</h3>
                <p className="mt-2 text-sm text-slate-600 font-light leading-relaxed">{t(textKey)}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}