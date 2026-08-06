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
    <section id="solutii" className="bg-white py-16 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow={t("solutions.eyebrow")}
          title={t("solutions.mainTitle")}
          subtitle={t("solutions.mainSubtitle")}
        />

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {ITEMS.map(({ icon: Icon, titleKey, textKey }, index) => (
            <motion.article
              key={index}
              variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="scan-card group bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 border border-slate-200 shadow-sm hover:shadow-lg md:hover:shadow-xl active:shadow-md transition-all duration-300 flex flex-col h-full focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 flex-shrink-0">
                <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
              </div>
              <h3 className="mt-4 sm:mt-5 md:mt-6 text-lg sm:text-xl font-bold text-blue-600 tracking-tight line-clamp-2">{t(titleKey)}</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 font-light leading-relaxed flex-grow">{t(textKey)}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}