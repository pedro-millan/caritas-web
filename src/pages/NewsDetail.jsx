import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroParallax from '../components/HeroParallax.jsx';

export default function NewsDetail({ news, lang }) {
  const blocks = news.blocks || [];
  const staticLayout = news.slug === 'sopar-de-la-fam-2026';

  return (
    <>
      <HeroParallax page={news} lang={lang} />
      <div className="page-shell news-detail-shell">
        <Link to="/noticias" className="back-link news-back-link">
          <ArrowLeft size={16} /> {{ es: 'Volver a noticias', va: 'Tornar a notícies', ur: 'خبروں پر واپس جائیں', en: 'Back to news' }[lang]}
        </Link>

        {staticLayout ? (
          <section className="news-static-row">
            <div className="news-static-image">
              <img src={blocks[0].image} alt={blocks[0].alt?.[lang] || blocks[0].title[lang]} loading="lazy" />
            </div>
            <div className="news-static-copy">
              <span>{news.eyebrow[lang]}</span>
              {blocks.map((block) => (
                <div key={block.title[lang]}>
                  <h2>{block.title[lang]}</h2>
                  <p>{block.text[lang]}</p>
                </div>
              ))}
            </div>
          </section>
        ) : (
          blocks.map((block, index) => (
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
          ))
        )}

        {news.outro && (
          <section className="section-block news-outro">
            <h2>{news.outro[lang]}</h2>
          </section>
        )}
      </div>
    </>
  );
}
