
import React, { useState } from "react";
import { Menu, X, Mail, Phone, Send } from "lucide-react";
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
    <section id="home" className="min-h-screen flex overflow-hidden bg-white relative">
      <img
        src="/images/hero.png"
        alt="Terminal Hikvision de recunoaștere facială scanând fața unei persoane"
        className="hidden lg:block absolute left-[55%] top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[110%] object-cover z-20 pointer-events-none"
      />

      <div className="w-full lg:w-[45%] flex flex-col justify-between px-6 sm:px-8 lg:px-12 pt-8 pb-12 sm:pb-16 lg:pb-20 bg-white relative z-10">
        <div className="flex-shrink-0 flex justify-between items-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 tracking-tight">
            Vision<span className="text-blue-700">Gate</span>
          </h2>
          <div className="lg:hidden">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-600 leading-tight tracking-tight whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md font-light">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="pt-4">
            <a
              href="#solutii"
              className="btn-primary inline-block px-8 sm:px-10 py-3.5 sm:py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 text-sm sm:text-base shadow-sm"
            >
              {t("hero.cta")}
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 flex gap-4 pt-8 border-t border-slate-200">
          <a
            href="tel:+373600000000"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            aria-label="Phone"
            title={t("hero.phone")}
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@visiongate.md"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            aria-label="Email"
            title={t("hero.email")}
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://t.me/visiongate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
            aria-label="Telegram"
            title={t("hero.telegram")}
          >
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="hidden lg:flex w-[55%] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex-col relative">
        <nav className="pt-8 px-8 flex justify-end items-center gap-6">
          <ul className="flex gap-8 text-white">
            {NAV.map((item, i) => (
              <li key={i}>
                <a href={item.href} className="nav-underline text-sm font-medium hover:text-blue-200 transition-colors duration-200">
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
              className={`px-2.5 py-1 text-sm font-medium rounded transition-colors ${
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
              className={`px-2.5 py-1 text-sm font-medium rounded transition-colors ${
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

      <div className="lg:hidden flex items-start justify-between absolute top-0 right-0 left-0 p-4 sm:p-6 z-50">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-600 tracking-tight">
          Vision<span className="text-blue-700">Gate</span>
        </h2>
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-blue-600 hover:bg-blue-50 transition-colors focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-label="Meniu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white border-t border-slate-200 z-40">
          <nav className="px-4 sm:px-6 py-4 space-y-2">
            {NAV.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
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