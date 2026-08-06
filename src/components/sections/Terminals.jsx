import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Image } from "@/components/ui/image";

const MODELS = [
  {
    name: "DS-K1T341",
    tagKey: "terminals.models.ds_k1t341.tag",
    image: "/images/DS-K1T341CM.png",
    descKey: "terminals.models.ds_k1t341.desc",
    specs: ["Ecran 4.3\" LCD cu touch", "2 MP cu dual-lens", "3.000 fețe | 3.000 carduri", "Recunoaștere < 0.2 s (99%+ acuratețe)", "Distanță recunoaștere: 0.3-1.5 m", "Card M1 13.56MHz", "IP65 rating", "Detecție mască facială"],
  },
  {
    name: "DS-K1T671",
    tagKey: "terminals.models.ds_k1t671.tag",
    image: "/images/ds-kt1671m.png",
    descKey: "terminals.models.ds_k1t671.desc",
    specs: ["Ecran 7\" LCD cu touch", "2 MP wide-angle lens", "6.000 fețe | 6.000 carduri", "Recunoaștere < 0.2 s (99%+ acuratețe)", "Distanță recunoaștere: 0.3-3 m", "Card M1 built-in", "Two-way audio", "IP65 rating", "TCP/IP connectivity"],
  },
  {
    name: "DS-K1T342",
    tagKey: "terminals.models.ds_k1t342.tag",
    image: "/images/DS-K1T342MX-E1.png",
    descKey: "terminals.models.ds_k1t342.desc",
    specs: ["Ecran 4.3\" LCD capacitiv", "2 MP dual-lens", "1.500 fețe | 3.000 carduri | 150.000 evenimente", "Recunoaștere < 0.2 s (99%+ acuratețe)", "Distanță recunoaștere: 0.3-1.5 m", "Card M1 13.56MHz", "PoE sau 12VDC", "Two-way audio", "Wi-Fi + Ethernet"],
  },
  {
    name: "DS-K1T672",
    tagKey: "terminals.models.ds_k1t672.tag",
    image: "/images/DS_K1T672.png",
    descKey: "terminals.models.ds_k1t672.desc",
    specs: ["Ecran 7\" LCD capacitiv cu touch", "2 MP cu infraroșu 850nm", "Card M1 și EM support", "Recunoaștere facială avansată", "QR code recognition", "1 lock output | 1 exit button", "12 VDC power adapter", "Montare pe suprafață", "Gama temperatură: -10°C la 50°C"],
  },
];

export default function Terminals() {
  const [active, setActive] = useState(0);
  const { t } = useTranslation();
  const model = MODELS[active];

  return (
    <section id="terminale" className="bg-slate-50 py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">{t("terminals.eyebrow")}</div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 gap-2 mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">{t("terminals.title")}</h2>
            <img src="/images/Hikvision-logo.png" alt="Hikvision" loading="lazy" className="h-16 sm:h-20 md:h-28 w-auto object-contain" />
          </div>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">{t("terminals.subtitle")}</p>
        </div>

        {/* Mobile: Stacked layout, Desktop: Two-column grid */}
        <div className="mt-10 sm:mt-12 md:mt-14 grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-stretch">

          {/* Image showcase - top on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-1 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm p-4 sm:p-6 md:p-10 h-full flex flex-col justify-center min-h-64 sm:min-h-96"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={model.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={model.image}
                  alt={`Terminal ${model.name}`}
                  fittingType="fit"
                  className="w-full h-[200px] sm:h-[280px] md:h-[360px] object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Controls and details - bottom on mobile, right on desktop */}
          <div className="order-2 lg:order-2 flex flex-col gap-4 sm:gap-6">

            {/* Tab buttons - horizontal scroll on mobile, wrap on desktop */}
            <div className="flex gap-2 overflow-x-auto sm:overflow-visible sm:flex-wrap pb-2 sm:pb-0" role="tablist" aria-label="Modele terminale">
              {MODELS.map((m, i) => (
                <button
                  key={m.name}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`flex-shrink-0 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-95 ${
                    active === i
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-blue-600 hover:border-blue-200"
                  }`}
                  aria-label={`Select model ${m.name}`}
                >
                  {m.name.split(" ")[0]}
                </button>
              ))}
            </div>

            {/* Details panel */}
            <AnimatePresence mode="wait">
              <motion.article
                key={model.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-4 sm:mt-0 rounded-2xl sm:rounded-3xl bg-white border border-slate-200 shadow-sm p-5 sm:p-6 md:p-8 flex-grow flex flex-col"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-3 py-1 w-fit">
                  {t(model.tagKey)}
                </span>
                <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-blue-600 tracking-tight">{model.name}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed">{t(model.descKey)}</p>

                {/* Specs list */}
                <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 flex-grow">
                  {model.specs.map((s) => (
                    <li key={s} className="flex items-start gap-2 sm:gap-3 text-slate-700">
                      <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm leading-snug">{s}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button - full width on mobile, inline on desktop */}
                <a
                  href="#contact"
                  className="btn-primary mt-6 sm:mt-8 inline-flex items-center justify-center px-6 sm:px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-sm sm:text-base shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-12 w-full sm:w-auto"
                >
                  {t("terminals.requestQuote")}
                </a>
              </motion.article>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}