import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const NAV = [
    { href: "#solutii", labelKey: "nav.solutions" },
    { href: "#cum-functioneaza", labelKey: "nav.howItWorks" },
    { href: "#terminale", labelKey: "nav.terminals" },
    { href: "#integrari", labelKey: "integrations.eyebrow" },
    { href: "#de-ce-noi", labelKey: "whyUs.eyebrow" },
    { href: "#intrebari", labelKey: "faq.eyebrow" },
    { href: "#contact", labelKey: "nav.contact" },
  ];

  const SOLUTIONS = [
    { labelKey: "solutions.facialAccess" },
    { labelKey: "solutions.timeSystems" },
    { labelKey: "integrations.hikcentral" },
    { labelKey: "integrations.yaleElectromagnetic" },
    { labelKey: "integrations.turnstiles" },
    { labelKey: "solutions.maintenance" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 px-6 sm:px-8 lg:px-12 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Vision<span className="text-blue-500">Gate</span>
            </h2>
            <p className="mt-4 text-sm text-slate-400 font-light leading-relaxed max-w-sm">
              {t("solutions.mainSubtitle")}
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href="tel:+373600000000" className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-500" /> {t("contact.phone")}
              </a>
              <a href="mailto:contact@visiongate.md" className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-500" /> {t("contact.email")}
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-500" /> {t("contact.location")}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{t("footer.company")}</h3>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {t(n.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">{t("footer.company")}</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              {SOLUTIONS.map((s, i) => (
                <li key={i}>{t(s.labelKey)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} VisionGate. {t("footer.rights")}</p>
          <p className="text-xs text-slate-500">Hikvision și MinMoe sunt mărci înregistrate ale Hangzhou Hikvision Digital Technology Co., Ltd.</p>
        </div>
      </div>
    </footer>
  );
}