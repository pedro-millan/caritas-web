import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroParallax from '../components/HeroParallax.jsx';
import ParallaxStory from '../components/ParallaxStory.jsx';
import { projectPages } from '../data/siteContent.js';
import { projectStories, projectEvents } from '../data/siteContent.js';

function EventCards({ project, lang }) {
  const events = projectEvents[project.slug] || [];
  if (!events.length) return null;

  return (
    <section className="project-events-section">
      <motion.div
        className="story-main-intro compact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <p>{lang === 'es' ? 'Memorias de cada edición:' : 'Memòries de cada edició:'}</p>
      </motion.div>
      <div className="event-card-grid">
        {events.map((event) => (
          <motion.article
            className="event-card"
            key={event.slug}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <Link to={event.path}>
              <img src={event.cover} alt={event.title[lang]} loading="lazy" />
              <div>
                <span>{event.eyebrow[lang]}</span>
                <h3>{event.title[lang]}</h3>
                <p>{event.summary[lang]}</p>
                <strong>{lang === 'es' ? 'Ver memoria' : 'Veure memòria'} <ArrowRight size={17} /></strong>
              </div>
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function FixedColdStory({ story, lang }) {
  if (!story) return null;

  return (
    <section className="cold-fixed-story">
      <motion.div
        className="cold-story-opening"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <p>{story.intro[lang]}</p>
      </motion.div>

      {story.blocks.map((block, index) => (
        <section
          className={`cold-fixed-panel ${index % 2 ? 'align-right' : 'align-left'}`}
          style={{ backgroundImage: `url(${block.image})` }}
          key={block.image}
          aria-label={block.alt[lang]}
        >
          <div className="cold-panel-shade" />
          <motion.article
            className="cold-panel-card"
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{block.title[lang]}</h2>
            <p>{block.text[lang]}</p>
          </motion.article>
        </section>
      ))}
    </section>
  );
}


function MixedProjectStory({ story, lang }) {
  if (!story) return null;

  return (
    <section className="project-wide-story project-managed-story">
      <motion.div
        className="story-main-intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        {story.title && <h2>{story.title[lang]}</h2>}
        {story.intro && <p>{story.intro[lang]}</p>}
      </motion.div>

      <div className="story-parallax-list">
        {story.blocks.map((block, index) => {
          const layout = block.layout || 'parallax';
          const key = `${block.image || block.title?.es || 'block'}-${index}`;

          if (layout === 'fixed') {
            return (
              <section
                className={`cold-fixed-panel dynamic-managed-fixed ${index % 2 ? 'align-right' : 'align-left'}`}
                style={{ backgroundImage: `url(${block.image || '/assets/hero-inicio.webp'})` }}
                key={key}
                aria-label={block.alt?.[lang] || block.title?.[lang] || ''}
              >
                <div className="cold-panel-shade" />
                <motion.article
                  className="cold-panel-card dynamic-managed-fixed-card"
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.65 }}
                >
                  <h2>{block.title?.[lang]}</h2>
                  <p>{block.text?.[lang]}</p>
                </motion.article>
              </section>
            );
          }

          if (layout === 'text') {
            return (
              <motion.section
                className="dynamic-managed-text"
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55 }}
              >
                <h2>{block.title?.[lang]}</h2>
                <p>{block.text?.[lang]}</p>
              </motion.section>
            );
          }

          return (
            <section className={`story-parallax-row ${index % 2 ? 'reverse' : ''}`} key={key}>
              {block.image && (
                <div className="story-parallax-media info-image-wrap">
                  <img src={block.image} alt={block.alt?.[lang] || block.title?.[lang] || ''} loading="lazy" />
                </div>
              )}
              <motion.div
                className="story-parallax-copy"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <h3>{block.title?.[lang]}</h3>
                <p>{block.text?.[lang]}</p>
              </motion.div>
            </section>
          );
        })}
      </div>
    </section>
  );
}

export default function ProjectDetail({ project, lang }) {
  const currentIndex = projectPages.findIndex((item) => item.slug === project.slug);
  const next = projectPages[(currentIndex + 1) % projectPages.length];
  const story = projectStories[project.slug];
  const managedStory = story ? {
    ...story,
    blocks: (story.blocks || []).map((block) => ({
      image: block.image,
      title: block.title,
      text: block.text,
      alt: block.alt || block.title,
      layout: project.slug === 'que-nadie-pase-frio' ? 'fixed' : (block.layout || 'parallax')
    }))
  } : null;
  const isColdProject = project.slug === 'que-nadie-pase-frio';
  const isRanchiProject = project.slug === 'ranchi-india';

  const paragraphs = (project.body?.[lang] || [])
    .filter((paragraph) => paragraph && !paragraph.startsWith('## '));

  const bodyCopy = paragraphs.length > 0 && (
    <section className="project-opening-copy">
      {paragraphs.map((paragraph) => <p className="lead centered" key={paragraph}>{paragraph}</p>)}
    </section>
  );

  return (
    <>
      <HeroParallax page={project} lang={lang} />
      <div className={`page-shell narrow project-detail-page project-detail-${project.slug}`}>
        <Link to="/proyectos" className="back-link"><ArrowLeft size={16} /> {lang === 'es' ? 'Volver a proyectos' : 'Tornar a projectes'}</Link>

        {!isColdProject && !isRanchiProject && bodyCopy}

        <EventCards project={project} lang={lang} />
        <MixedProjectStory story={managedStory} lang={lang} />
        {isRanchiProject && bodyCopy}

        <section className="cta-band soft">
          <p>{lang === 'es' ? 'Cada iniciativa se sostiene gracias a la colaboración de muchas personas.' : 'Cada iniciativa se sosté gràcies a la col·laboració de moltes persones.'}</p>
          <Link to={`/proyectos/${next.slug}`} className="button-primary">{lang === 'es' ? 'Siguiente proyecto' : 'Projecte següent'}<ArrowRight size={18} /></Link>
        </section>
      </div>
    </>
  );
}
