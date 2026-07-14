import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Gift, HandHeart, Leaf, Shirt, Soup, UsersRound } from 'lucide-react';
import HeroParallax from '../components/HeroParallax.jsx';
import SectionBlock from '../components/SectionBlock.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { causeBlocks, collaborateBlocks, highlights, projectPages, newsPages } from '../data/siteContent.js';

const projectIcons = [Leaf, Soup, Shirt, Gift, HandHeart, UsersRound];

export default function Page({ page, type, lang }) {
  const t = {
    es: {
      what: '',
      whatText: 'Acompañamos realidades concretas desde la discreción, la cercanía y el respeto. Cada acción busca cuidar la dignidad de las personas y fortalecer el tejido comunitario. Brindamos:',
      mainProjects: 'Proyectos destacados',
      collaborateTitle: 'Formas de colaborar',
      collaborateText: 'Toda ayuda cuenta: una bolsa de alimentos, una prenda útil, unas horas de voluntariado o compartir una campaña con tu entorno.',
      readMore: 'Conocer más',
      newsTitle: 'Últimas noticias',
      contactCTA: 'Contactar con Cáritas Banyeres',
      projectIntro: 'Explora las iniciativas principales de Cáritas Banyeres.',
      causeTitle: 'Una ayuda que empieza escuchando',
      causeText: 'El acompañamiento social no se limita a resolver una urgencia, también implica mirar a la persona completa, comprender su contexto y caminar a su lado con respeto. Trabajamos para que ninguna persona se sienta sola ante la necesidad. La ayuda material es importante, pero siempre va unida a la acogida, la orientación y el acompañamiento humano.',
      homeContactTitle: '¿Necesitas ayuda o quieres colaborar?',
      homeContactText: 'Escríbenos de forma directa. El mensaje llegará al correo de Cáritas Banyeres y se usará únicamente para responder a tu solicitud.'
    },
    va: {
      what: 'Què fem',
      whatText: 'Càritas Banyeres acompanya realitats concretes des de la discreció, la proximitat i el respecte. Cada acció busca cuidar la dignitat de les persones i enfortir el teixit comunitari. Oferim:',
      mainProjects: 'Projectes destacats',
      collaborateTitle: 'Formes de col·laborar',
      collaborateText: 'Tota ajuda compta: una bossa d’aliments, una peça útil, unes hores de voluntariat o compartir una campanya amb el teu entorn.',
      readMore: 'Conéixer més',
      newsTitle: 'Últimes notícies',
      contactCTA: 'Contactar amb Càritas Banyeres',
      projectIntro: 'Explora les iniciatives principals de Càritas Banyeres.',
      causeTitle: 'Una ajuda que comença escoltant',
      causeText: 'L’acompanyament social no es limita a resoldre una urgència. També implica mirar la persona completa, comprendre el seu context i caminar al seu costat amb respecte.',
      homeContactTitle: 'Necessites ajuda o vols col·laborar?',
      homeContactText: 'Escriu-nos de forma directa. El missatge arribarà al correu de Càritas Banyeres i s’usarà únicament per a respondre a la teua sol·licitud.'
    }
  }[lang];

  return (
    <>
      <HeroParallax page={page} lang={lang} />
      <div className="page-shell">
        {type === 'home' && <HomeContent t={t} lang={lang} />}
        {type === 'cause' && <CauseContent t={t} lang={lang} />}
        {type === 'projects' && <ProjectsContent t={t} lang={lang} />}
        {type === 'collaborate' && <CollaborateContent t={t} lang={lang} />}
        {type === 'news' && <NewsContent t={t} lang={lang} />}
      </div>
    </>
  );
}

function HomeContent({ t, lang }) {
  return (
    <>
      <SectionBlock eyebrow="Conócenos" title={t.what}>
        <p className="lead centered">{t.whatText}</p>
        <div className="highlight-grid home-highlight-grid">
          {highlights.map((item, index) => (
            <motion.article
              className="highlight-card home-highlight-card"
              key={item.title.es}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: .5, delay: index * .08 }}
              whileHover={{ y: -8 }}
            >
              <div className="highlight-image">
                <img src={item.image} alt={item.title[lang]} loading="lazy" />
              </div>
              <div className="highlight-content">
                <h3>{item.title[lang]}</h3>
                <p>{item.text[lang]}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionBlock>

      <section className="home-contact-section" id="contacto-home">
        <div className="home-contact-copy">
          <span className="section-eyebrow">{lang === 'es' ? 'Contacto directo' : 'Contacte directe'}</span>
          <h2>{t.homeContactTitle}</h2>
          <p>{t.homeContactText}</p>
        </div>
        <ContactForm lang={lang} compact />
      </section>
    </>
  );
}

function CauseContent({ t, lang }) {
  const causeStory = {
    intro: { es: t.causeText, va: t.causeText },
    blocks: causeBlocks.map((block) => ({
      image: block.image,
      title: block.title,
      text: block.text,
      alt: block.title
    }))
  };

  return <FixedBackgroundStory story={causeStory} lang={lang} variant="cause" />;
}

function FixedBackgroundStory({ story, lang, variant = '' }) {
  if (!story) return null;

  return (
    <section className={`fixed-bg-story ${variant ? `fixed-bg-story--${variant}` : ''}`}>
      <motion.div
        className="fixed-bg-opening"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        <p>{story.intro[lang]}</p>
      </motion.div>

      {story.blocks.map((block, index) => (
        <section
          className={`fixed-bg-panel ${index % 2 ? 'align-right' : 'align-left'}`}
          style={{ backgroundImage: `url(${block.image})` }}
          key={`${block.image}-${index}`}
          aria-label={block.alt?.[lang] || block.title[lang]}
        >
          <div className="fixed-bg-shade" />
          <motion.article
            className="fixed-bg-card"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.65 }}
          >
            <h2>{block.title[lang]}</h2>
            <p>{block.text[lang]}</p>
          </motion.article>
        </section>
      ))}
    </section>
  );
}

function ProjectsContent({ t, lang }) {
  return (
    <>
      <SectionBlock title={t.mainProjects}>
        <p className="lead centered">{t.projectIntro}</p>
      </SectionBlock>
      <ProjectCards lang={lang} />
    </>
  );
}

function CollaborateContent({ t, lang }) {
  return (
    <>
      <SectionBlock title={t.collaborateTitle}>
        <p className="lead centered">{t.collaborateText}</p>
      </SectionBlock>
      <InfoCollage blocks={collaborateBlocks} lang={lang} withButton />
    </>
  );
}

function NewsContent({ t, lang }) {
  return (
    <>
      <SectionBlock title={t.newsTitle}>
        <p className="lead centered">{lang === 'es' ? 'Actualidad, campañas, actividades solidarias y vida comunitaria de Cáritas Banyeres.' : 'Actualitat, campanyes, activitats solidàries i vida comunitària de Càritas Banyeres.'}</p>
      </SectionBlock>
      <section className="news-card-section">
        <div className="event-card-grid news-card-grid">
          {newsPages.map((item) => (
            <motion.article
              className="event-card news-entry-card"
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
            >
              <Link to={`/noticias/${item.slug}`}>
                <img src={item.cover || item.hero} alt={item.title[lang]} loading="lazy" />
                <div>
                  <span>{item.eyebrow?.[lang]}</span>
                  <h3>{item.title[lang]}</h3>
                  <p>{item.intro?.[lang]}</p>
                  <strong>{lang === 'es' ? 'Leer noticia' : 'Llegir notícia'} <ArrowRight size={17} /></strong>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}

function InfoCollage({ blocks, lang, withButton = false }) {
  return (
    <section className="info-collage">
      {blocks.map((block, index) => (
        <motion.article
          className={`info-row ${index % 2 === 1 ? 'reverse' : ''}`}
          key={block.title.es}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: .55, ease: 'easeOut' }}
        >
          <div className="info-image-wrap">
            <img src={block.image} alt={block.title[lang]} loading="lazy" />
          </div>
          <div className="info-text-wrap">
            <h2>{block.title[lang]}</h2>
            <p>{block.text[lang]}</p>
            {withButton && (
              <Link to="/contacto" className="button-primary info-button">
                {lang === 'es' ? 'Participa' : 'Participa'} <ArrowRight size={17} />
              </Link>
            )}
          </div>
        </motion.article>
      ))}
    </section>
  );
}

function ProjectCards({ title, lang }) {
  return (
    <section className="project-card-section">
      {title && <h2>{title}</h2>}
      <div className="project-card-grid">
        {projectPages.map((project, index) => {
          const Icon = projectIcons[index];
          return (
            <motion.article className="project-card" key={project.slug} whileHover={{ y: -8 }}>
              <img src={project.hero} alt="" />
              <div>
                <Icon size={24} />
                <h3>{project.title[lang]}</h3>
                <p>{project.intro[lang]}</p>
                <Link to={`/proyectos/${project.slug}`}>{lang === 'es' ? 'Entrar en el proyecto' : 'Entrar en el projecte'} <ArrowRight size={15} /></Link>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
