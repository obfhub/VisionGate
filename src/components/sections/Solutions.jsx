import { motion } from "framer-motion";
import { ScanFace, Clock, Users, Wrench, LifeBuoy, MessagesSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeading from "./SectionHeading";

export default function Solutions() {
  const { t } = useTranslation();

  const ITEMS = [
    { icon: ScanFace, titleKey: "solutions.facialAccess", textKey: "solutions.facialAccessDesc" },
    { icon: Clock, titleKey: "solutions.timeSystems", textKey: "solutions.timeSystemsDesc" },
    { icon: Users, titleKey: "solutions.userManagement", textKey: "solutions.userManagementDesc" },
    { icon: Wrench, titleKey: "solutions.configuration", textKey: "solutions.configurationDesc" },
    { icon: LifeBuoy, titleKey: "solutions.maintenance", textKey: "solutions.maintenanceDesc" },
    { icon: MessagesSquare, titleKey: "solutions.consulting", textKey: "solutions.consultingDesc" },
  ];

  return (
    <section id="solutii" className="bg-white py-20 sm:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t("solutions.eyebrow")}
          title={t("solutions.mainTitle")}
          subtitle={t("solutions.mainSubtitle")}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {ITEMS.map(({ icon: Icon, titleKey, textKey }, index) => (
            <motion.article
              key={index}
              variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="scan-card group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-blue-600 tracking-tight">{t(titleKey)}</h3>
              <p className="mt-3 text-slate-600 font-light leading-relaxed">{t(textKey)}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}