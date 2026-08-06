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
    <section id="terminale" className="bg-slate-50 py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="text-sm font-semibold uppercase tracking-widest text-blue-600 mb-2">{t("terminals.eyebrow")}</div>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{t("terminals.title")}</h2>
            <img src="/images/Hikvision-logo.png" alt="Hikvision" className="h-20 md:h-28 object-contain mt-3" />
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">{t("terminals.subtitle")}</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-10 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white border border-slate-200 shadow-sm p-6 sm:p-10 h-full flex flex-col justify-center"
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
                  className="w-full h-[280px] sm:h-[360px] object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div>
            <div className="flex flex-wrap gap-3" role="tablist" aria-label="Modele terminale">
              {MODELS.map((m, i) => (
                <button
                  key={m.name}
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                    active === i
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-blue-600 hover:border-blue-200"
                  }`}
                >
                  {m.name.split(" ")[0]}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={model.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="mt-8 rounded-3xl bg-white border border-slate-200 shadow-sm p-8"
              >
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 rounded-full px-3 py-1">
                  {t(model.tagKey)}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-blue-600 tracking-tight">{model.name}</h3>
                <p className="mt-2 text-slate-600 font-light leading-relaxed">{t(model.descKey)}</p>
                <ul className="mt-6 space-y-3">
                  {model.specs.map((s) => (
                    <li key={s} className="flex items-center gap-3 text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{s}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="btn-primary mt-8 inline-block px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm shadow-sm"
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