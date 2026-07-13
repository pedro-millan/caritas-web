import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Page from './pages/Page.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import EventDetail from './pages/EventDetail.jsx';
import NewsDetail from './pages/NewsDetail.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import NotFound from './pages/NotFound.jsx';
import { pages, projectPages, eventPages, newsPages } from './data/siteContent.js';

const projectMap = Object.fromEntries(projectPages.map((p) => [p.slug, p]));
const eventMap = Object.fromEntries(eventPages.map((event) => [event.slug, event]));
const newsMap = Object.fromEntries(newsPages.map((news) => [news.slug, news]));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: 'smooth' }), [pathname]);
  return null;
}

export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem('caritas-lang') || 'es');

  useEffect(() => {
    localStorage.setItem('caritas-lang', lang);
    document.documentElement.lang = lang === 'va' ? 'ca-valencia' : 'es';
  }, [lang]);

  return (
    <>
      <ScrollToTop />
      <Header lang={lang} setLang={setLang} />
      <main>
        <Routes>
          <Route path="/" element={<Page type="home" page={pages.home} lang={lang} />} />
          <Route path="/nuestra-causa" element={<Page type="cause" page={pages.cause} lang={lang} />} />
          <Route path="/proyectos" element={<Page type="projects" page={pages.projects} lang={lang} />} />
          <Route path="/colabora" element={<Page type="collaborate" page={pages.collaborate} lang={lang} />} />
          <Route path="/noticias" element={<Page type="news" page={pages.news} lang={lang} />} />
          <Route path="/contacto" element={<ContactPage page={pages.contact} lang={lang} />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPage page={pages.privacy} lang={lang} />} />
          {Object.entries(newsMap).map(([slug, news]) => (
            <Route key={slug} path={`/noticias/${slug}`} element={<NewsDetail news={news} lang={lang} />} />
          ))}
          {Object.entries(eventMap).map(([slug, event]) => (
            <Route key={slug} path={`/proyectos/${event.parentSlug}/${slug}`} element={<EventDetail event={event} lang={lang} />} />
          ))}
          {Object.entries(projectMap).map(([slug, project]) => (
            <Route key={slug} path={`/proyectos/${slug}`} element={<ProjectDetail project={project} lang={lang} />} />
          ))}
          <Route path="*" element={<NotFound lang={lang} />} />
        </Routes>
      </main>
      <Footer lang={lang} />
    </>
  );
}
