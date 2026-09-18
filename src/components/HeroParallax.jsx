import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroParallax({ page, lang, hideIntro = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const pushDown = page.path === '/contacto' || page.slug === 'ganadores-rifa-santa-maria-magdalena';
  const y = useTransform(scrollYProgress, [0, 1], pushDown ? ['18%', '46%'] : ['0%', '28%']);
  // El vídeo usa object-fit:contain para no recortarse nunca; el zoom del
  // parallax lo agrandaría por encima de su caja y el overflow:hidden de la
  // sección se comería ese sobrante, así que aquí no hay zoom, queda fijo.
  const scale = useTransform(scrollYProgress, [0, 1], page.video ? [1, 1] : [1.05, 1.18]);

  return (
    <section className={`page-hero ${page.path?.includes('ranchi-india') || page.title?.es?.includes('Ranchi') ? 'page-hero-ranchi' : ''} ${page.slug === 'sopar-de-la-fam-2026' ? 'page-hero-sopar' : ''} ${page.video ? 'page-hero-video' : ''}`} ref={ref}>
      {page.video ? (
        <motion.video className="page-hero-img" src={page.video} poster={page.hero} style={{ y, scale }} autoPlay muted loop playsInline />
      ) : (
        <motion.img className="page-hero-img" src={page.hero} alt="" style={{ y, scale }} />
      )}
      <div className="hero-overlay" />
      {!page.video && (
        <motion.div className="page-hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <h1>{page.title[lang]}</h1>
          {!hideIntro && <p>{page.intro[lang]}</p>}
        </motion.div>
      )}
    </section>
  );
}
