import HeroParallax from '../components/HeroParallax.jsx';
import SectionBlock from '../components/SectionBlock.jsx';
import ContactForm from '../components/ContactForm.jsx';
import { contactInfo } from '../data/siteContent.js';

export default function ContactPage({ page, lang }) {
  const t = {
    es: { title: 'Escríbenos' },
    va: { title: 'Escriu-nos' }
  }[lang];

  return (
    <>
      <HeroParallax page={page} lang={lang} />
      <div className="page-shell contact-layout">
        <SectionBlock title={t.title}>
          <ContactForm lang={lang} />
        </SectionBlock>
        <aside className="contact-card">
          <h2>{lang === 'es' ? 'Contacto directo' : 'Contacte directe'}</h2>
        
          <a href={`tel:${contactInfo.phoneRaw}`}>{contactInfo.phone}</a>
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          <a href={contactInfo.facebook} target="_blank" rel="noreferrer">Facebook Cáritas Banyeres</a>
        </aside>
      </div>
    </>
  );
}
