import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import HeroParallax from '../components/HeroParallax.jsx';
import ParallaxStory from '../components/ParallaxStory.jsx';

export default function EventDetail({ event, lang }) {
  return (
    <>
      <HeroParallax page={event} lang={lang} hideIntro />
      <div className="page-shell narrow project-detail-page event-detail-page">
        <Link to={`/proyectos/${event.parentSlug}`} className="back-link">
          <ArrowLeft size={16} /> {{ es: 'Volver al proyecto', va: 'Tornar al projecte', ur: 'منصوبے پر واپس جائیں', en: 'Back to project' }[lang]}
        </Link>
      </div>
      <ParallaxStory story={event} lang={lang} hideTitle />
    </>
  );
}
