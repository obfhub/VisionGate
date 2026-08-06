
import React, { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const NAV = [
    { href: "#solutii", label: t("nav.home") },
    { href: "#solutii", label: t("nav.solutions") },
    { href: "#cum-functioneaza", label: t("nav.howItWorks") },
    { href: "#terminale", label: t("nav.terminals") },
    { href: "#contact", label: t("nav.contact") },
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col lg:flex-row overflow-hidden bg-white relative">
      {/* Hero image - visible on right edge of mobile, full right side on desktop */}
      <div className="absolute right-0 inset-y-0 w-2/5 sm:w-1/3 lg:w-[55%] z-0 lg:z-20 pointer-events-none overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Terminal Hikvision de recunoaștere facială scanând fața unei persoane"
          loading="lazy"
          className="w-full h-full object-cover"
        />

        {/* Facial recognition scanning beam effect */}
        <motion.div
          className="absolute top-1/4 right-12 w-32 h-40 rounded-xl border-2 border-blue-400/60 bg-gradient-to-b from-blue-400/20 to-transparent"
          animate={{
            boxShadow: [
              "0 0 20px rgba(96, 165, 250, 0.3)",
              "0 0 40px rgba(96, 165, 250, 0.6)",
              "0 0 20px rgba(96, 165, 250, 0.3)"
            ],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Scanning line animation */}
        <motion.div
          className="absolute top-1/4 right-12 w-32 h-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"
          animate={{
            top: ["25%", "65%", "25%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Gradient fade from right to left on mobile for text readability */}
        <div className="absolute inset-0 lg:hidden bg-gradient-to-l from-transparent via-white/30 to-white" />
      </div>

      {/* Main content area - transparent on mobile to show image behind, white on desktop */}
      <div className="w-full lg:w-[45%] flex flex-col justify-between px-5 sm:px-8 lg:px-12 pt-20 sm:pt-8 pb-12 sm:pb-16 lg:pb-20 bg-transparent lg:bg-white relative z-10 min-h-screen lg:min-h-auto">

        {/* Mobile/tablet header with menu and language */}
        <div className="lg:hidden flex-shrink-0 flex justify-between items-center gap-4 -mx-5 sm:-mx-8 px-5 sm:px-8 -mt-20 pt-6 pb-4 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight flex-1">
            Vision<span className="text-blue-700">Gate</span>
          </h2>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex items-center justify-center w-12 h-12 rounded-lg text-blue-600 hover:bg-blue-50 active:bg-blue-100 transition-colors duration-150 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 relative"
              aria-label="Menu"
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {/* Animated burger menu */}
              <motion.div
                className="flex flex-col justify-center items-center gap-1.5"
                animate={open ? "open" : "closed"}
                variants={{
                  closed: { rotate: 0 },
                  open: { rotate: 45 }
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <motion.span
                  className="block w-6 h-0.5 bg-blue-600 rounded-full origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 90, y: 10 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-blue-600 rounded-full"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
                <motion.span
                  className="block w-6 h-0.5 bg-blue-600 rounded-full origin-center"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -90, y: -10 }
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Main hero content */}
        <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8 py-8 sm:py-0">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-600 leading-tight tracking-tight whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg font-light">
              {t("hero.subtitle")}
            </p>
          </div>

          {/* CTA Button - full width on mobile, inline on desktop */}
          <div className="pt-4 flex gap-3 flex-col sm:flex-row">
            <a
              href="#solutii"
              className="btn-primary inline-flex items-center justify-center px-8 py-4 sm:py-3.5 sm:px-10 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 text-base sm:text-sm shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 min-h-12 sm:min-h-11"
            >
              {t("hero.cta")}
            </a>
          </div>
        </div>

        {/* Contact methods - full width on mobile, horizontal on desktop */}
        <div className="flex-shrink-0 flex gap-3 pt-8 border-t border-slate-200 flex-wrap">
          <a
            href="tel:+373600000000"
            className="flex items-center justify-center min-h-12 min-w-12 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={t("hero.phone")}
            title={t("hero.phone")}
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@visiongate.md"
            className="flex items-center justify-center min-h-12 min-w-12 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={t("hero.email")}
            title={t("hero.email")}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/visiongate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-h-12 min-w-12 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white active:bg-blue-700 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-label={t("hero.telegram")}
            title={t("hero.telegram")}
          >
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Desktop right side with gradient and navigation */}
      <div className="hidden lg:flex w-[55%] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex-col relative">
        <nav className="pt-8 px-8 flex justify-end items-center gap-6">
          <ul className="flex gap-8 text-white">
            {NAV.map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="nav-underline text-sm font-medium hover:text-blue-200 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700 rounded px-1 py-0.5"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-2">
            <button
              onClick={() => {
                i18n.changeLanguage('ro');
                localStorage.setItem('language', 'ro');
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700 ${
                i18n.language === 'ro'
                  ? 'bg-white/30 text-white'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              RO
            </button>
            <button
              onClick={() => {
                i18n.changeLanguage('ru');
                localStorage.setItem('language', 'ru');
              }}
              className={`px-3 py-1.5 text-sm font-medium rounded transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700 ${
                i18n.language === 'ru'
                  ? 'bg-white/30 text-white'
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              RU
            </button>
          </div>
        </nav>
        <div className="flex-1 relative overflow-hidden" />
      </div>

      {/* Mobile navigation drawer */}
      {open && (
        <div
          id="mobile-nav"
          className="lg:hidden fixed inset-0 top-[73px] sm:top-[89px] bg-white border-t border-slate-200 z-40 overflow-y-auto"
        >
          <nav className="px-4 sm:px-6 py-4 space-y-1">
            {NAV.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3.5 text-slate-700 hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 rounded-lg transition-colors font-medium text-base min-h-12 flex items-center focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </section>
  );
}