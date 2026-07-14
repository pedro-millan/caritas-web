import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroParallax({ page, lang }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const isContact = page.path === '/contacto';
  const y = useTransform(scrollYProgress, [0, 1], isContact ? ['18%', '46%'] : ['0%', '28%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);

  return (
    <section className={`page-hero ${page.path?.includes('ranchi-india') || page.title?.es?.includes('Ranchi') ? 'page-hero-ranchi' : ''}`} ref={ref}>
      <motion.img className="page-hero-img" src={page.hero} alt="" style={{ y, scale }} />
      <div className="hero-overlay" />
      <motion.div className="page-hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1>{page.title[lang]}</h1>
        <p>{page.intro[lang]}</p>
      </motion.div>
    </section>
  );
}
