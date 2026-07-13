import { motion } from 'framer-motion';

export default function SectionBlock({ eyebrow, title, children, className = '' }) {
  return (
    <motion.section
      className={`section-block ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
      {title && <h2>{title}</h2>}
      {children}
    </motion.section>
  );
}
