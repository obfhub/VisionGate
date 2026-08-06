import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function FinalCta() {
  const { t } = useTranslation();

  return (
    <section className="px-6 sm:px-8 lg:px-12 py-16 sm:py-20 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto rounded-[2rem] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white px-8 sm:px-14 py-16 sm:py-20 text-center shadow-2xl shadow-blue-900/20 relative overflow-hidden"
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5" />
        <div className="absolute -bottom-24 -left-16 w-80 h-80 rounded-full bg-white/5" />
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            {t("finalCta.title")}
          </h2>
          <p className="mt-5 text-blue-100 font-light max-w-xl mx-auto leading-relaxed">
            {t("finalCta.subtitle")}
          </p>
          <a
            href="#contact"
            className="btn-primary inline-flex items-center gap-2 mt-9 px-9 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-colors text-sm shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
          >
            {t("finalCta.cta")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}