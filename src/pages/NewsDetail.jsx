import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroParallax from '../components/HeroParallax.jsx';

export default function NewsDetail({ news, lang }) {
  const blocks = news.blocks || [];

  return (
    <>
      <HeroParallax page={news} lang={lang} />
      <div className="page-shell news-detail-shell">
        <Link to="/noticias" className="back-link news-back-link">
          <ArrowLeft size={16} /> {lang === 'es' ? 'Volver a noticias' : 'Tornar a notícies'}
        </Link>

        {blocks.map((block, index) => (
          <motion.section
            className={`info-row single-news-row ${index % 2 === 1 ? 'reverse' : ''}`}
            key={block.image}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <div className="info-image-wrap">
              <img src={block.image} alt={block.alt?.[lang] || block.title[lang]} loading="lazy" />
            </div>
            <div className="info-text-wrap">
              {index === 0 && <span>{news.eyebrow[lang]}</span>}
              <h2>{block.title[lang]}</h2>
              <p>{block.text[lang]}</p>
            </div>
          </motion.section>
        ))}

        {news.outro && (
          <section className="section-block news-outro">
            <h2>{news.outro[lang]}</h2>
          </section>
        )}
      </div>
    </>
  );
}
