
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { i18n, t } = useTranslation();

  const getEmployeeRanges = () => {
    return i18n.language === 'ru'
      ? ["До 50", "50–200", "200–500", "Свыше 500"]
      : ["Până la 50", "50–200", "200–500", "Peste 500"];
  };

  const getIntegrations = () => {
    return i18n.language === 'ru'
      ? ["Yale электромагнитные", "Электромагниты", "Турникеты", "Шлагбаумы", "HikCentral", "Пока не знаю"]
      : ["Yale electromagnetice", "Electromagneți", "Turnicheți", "Bariere", "HikCentral", "Încă nu știu"];
  };

  const EMPLOYEES = getEmployeeRanges();
  const INTEGRATIONS = getIntegrations();
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", employees: "", integration: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setError("");
    setSubmitting(true);
    try {
      // Send to Telegram bot
      const telegramBotToken = "8653057580:AAHgG1JLU_r48-r9iRE4-EwPKKhnxlry-wU";
      const isRussian = i18n.language === 'ru';

      const telegramMessage = `
📝 <b>${isRussian ? 'Новый запрос контакта' : 'Noua cerere de contact'}</b>

👤 <b>${isRussian ? 'Имя:' : 'Nume:'}</b> ${escapeHtml(form.name)}
🏢 <b>${isRussian ? 'Компания:' : 'Companie:'}</b> ${escapeHtml(form.company || "N/A")}
📱 <b>${isRussian ? 'Телефон:' : 'Telefon:'}</b> ${escapeHtml(form.phone)}
📧 <b>${isRussian ? 'Email:' : 'Email:'}</b> ${escapeHtml(form.email || "N/A")}
👥 <b>${isRussian ? 'Кол-во сотрудников:' : 'Nr. Angajați:'}</b> ${escapeHtml(form.employees || "N/A")}
🔧 <b>${isRussian ? 'Интеграция:' : 'Integrare:'}</b> ${escapeHtml(form.integration || "N/A")}
📄 <b>${isRussian ? 'Сообщение:' : 'Mesaj:'}</b>
${escapeHtml(form.message || "N/A")}`;

      // Get chat ID from environment variables (set in .env.local as VITE_TELEGRAM_CHAT_ID)
      // @ts-ignore
      const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID || "7333565540";

      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
          parse_mode: "HTML"
        })
      });

      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.statusText}`);
      }

      setSent(true);
      setForm({ name: "", company: "", phone: "", email: "", employees: "", integration: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setError(t("contact.error"));
    } finally {
      setSubmitting(false);
    }
  };

  const escapeHtml = (text) => {
    if (!text) return "";
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t("contact.eyebrow")}
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white p-8 shadow-lg">
              <h3 className="text-xl font-bold tracking-tight">{t("contact.talkAbout")}</h3>
              <p className="mt-3 text-blue-100 font-light leading-relaxed text-sm">
                {t("contact.response")}
              </p>
              <div className="mt-8 space-y-4">
                <a href="tel:+373600000000" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <Phone className="w-5 h-5" /><span className="text-sm">{t("contact.phone")}</span>
                </a>
                <a href="mailto:contact@visiongate.md" className="flex items-center gap-3 text-white hover:text-blue-200 transition-colors">
                  <Mail className="w-5 h-5" /><span className="text-sm">{t("contact.email")}</span>
                </a>
                <div className="flex items-center gap-3 text-blue-100">
                  <MapPin className="w-5 h-5" /><span className="text-sm">{t("contact.location")}</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8">
              <h4 className="font-semibold text-blue-600">{t("contact.weReceive")}</h4>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 font-light">
                <li>• {t("contact.users")}</li>
                <li>• {t("contact.accessPoints")}</li>
                <li>• {t("contact.equipment")}</li>
                <li>• {t("contact.timeTracking")}</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {sent ? (
              <div className="rounded-3xl bg-slate-50 border border-slate-200 p-10 text-center flex flex-col items-center justify-center min-h-[420px]">
                <CheckCircle2 className="w-14 h-14 text-blue-600" />
                <h3 className="mt-5 text-2xl font-bold text-blue-600 tracking-tight">{t("contact.requestSent")}</h3>
                <p className="mt-3 text-slate-600 font-light max-w-sm">
                  {t("contact.thankYou")}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="btn-primary mt-8 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm shadow-sm"
                >
                  {t("contact.sendAnother")}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-3xl bg-white border border-slate-200 shadow-sm p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t("contact.name")} required value={form.name} onChange={(v) => set("name", v)} placeholder={t("contact.placeHolder.name")} />
                  <Field label={t("contact.company")} value={form.company} onChange={(v) => set("company", v)} placeholder={t("contact.placeHolder.company")} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Telefon*" required type="tel" value={form.phone} onChange={(v) => set("phone", v)} placeholder={t("contact.placeHolder.phone")} />
                  <Field label={t("contact.email")} type="email" value={form.email} onChange={(v) => set("email", v)} placeholder={t("contact.placeHolder.email")} />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t("contact.employees")}</label>
                    <select
                      value={form.employees}
                      onChange={(e) => set("employees", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:border-blue-400 transition"
                    >
                      <option value="">{t("contact.selectPlaceholder")}</option>
                      {EMPLOYEES.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t("contact.integration")}</label>
                    <select
                      value={form.integration}
                      onChange={(e) => set("integration", e.target.value)}
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:border-blue-400 transition"
                    >
                      <option value="">{t("contact.selectPlaceholder")}</option>
                      {INTEGRATIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t("contact.projectDetails")}</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    rows={4}
                    placeholder={t("contact.placeHolder.message")}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:border-blue-400 transition resize-none"
                  />
                </div>
                {error && <p className="text-sm text-red-600">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting || !form.name || !form.phone}
                  className="btn-primary w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm shadow-sm disabled:opacity-60 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  {submitting ? t("contact.sending") : <>{t("contact.sendRequest")} <Send className="w-4 h-4" /></>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:border-blue-400 transition"
      />
    </div>
  );
}