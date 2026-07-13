import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HeroParallax from '../components/HeroParallax.jsx';
import ParallaxStory from '../components/ParallaxStory.jsx';

export default function EventDetail({ event, lang }) {
  return (
    <>
      <HeroParallax page={event} lang={lang} />
      <div className="page-shell narrow project-detail-page event-detail-page">
        <Link to={`/proyectos/${event.parentSlug}`} className="back-link">
          <ArrowLeft size={16} /> {lang === 'es' ? 'Volver al proyecto' : 'Tornar al projecte'}
        </Link>
      </div>
      <ParallaxStory story={event} lang={lang} hideTitle />
    </>
  );
}
