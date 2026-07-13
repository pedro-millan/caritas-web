import { Link } from 'react-router-dom';
export default function NotFound({ lang }) {
  return <section className="not-found"><h1>404</h1><p>{lang === 'es' ? 'Página no encontrada' : 'Pàgina no trobada'}</p><Link className="button-primary" to="/">{lang === 'es' ? 'Volver al inicio' : 'Tornar a l’inici'}</Link></section>;
}
