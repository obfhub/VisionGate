import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <span className="h-[2px] w-8 bg-blue-600 rounded-full" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600">{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-600 tracking-tight leading-tight">{title}</h2>
      {subtitle && <p className="mt-5 text-base sm:text-lg text-slate-600 font-light leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}