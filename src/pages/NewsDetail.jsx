import { Link } from 'react-router-dom';
import { ArrowLeft, CalendarDays, MapPin, Flower2, Camera, Ticket, Handshake, Gift } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroParallax from '../components/HeroParallax.jsx';

const icons = { calendar: CalendarDays, pin: MapPin, flower: Flower2, camera: Camera, ticket: Ticket, handshake: Handshake, gift: Gift };

function IconList({ items, className, lang }) {
  return (
    <ul className={className}>
      {items.map((item) => {
        const Icon = icons[item.icon];
        return <li key={item.icon}><Icon size={20} aria-hidden="true" /><span>{item.text[lang]}</span></li>;
      })}
    </ul>
  );
}

export default function NewsDetail({ news, lang }) {
  const blocks = news.blocks || [];
  const staticLayout = ['sopar-de-la-fam-2026', 'mercadillo-de-navidad-2026'].includes(news.slug);

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
              {blocks.map((block, index) => (
                <div key={index}>
                  {block.title && <h2>{block.title[lang]}</h2>}
                  {block.lead && <p className="news-static-lead">{block.lead[lang]}</p>}
                  {block.facts && <IconList items={block.facts} className="news-static-facts" lang={lang} />}
                  {block.text && <p>{block.text[lang]}</p>}
                  {block.list && <IconList items={block.list} className="news-static-list" lang={lang} />}
                  {block.closing && <p className="news-static-closing">{block.closing[lang]}</p>}
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
