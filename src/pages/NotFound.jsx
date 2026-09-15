import { Link } from 'react-router-dom';
export default function NotFound({ lang }) {
  return <section className="not-found"><h1>404</h1><p>{{ es: 'Página no encontrada', va: 'Pàgina no trobada', ur: 'صفحہ نہیں ملا', en: 'Page not found' }[lang]}</p><Link className="button-primary" to="/">{{ es: 'Volver al inicio', va: 'Tornar a l’inici', ur: 'ہوم پیج پر واپس جائیں', en: 'Back to home' }[lang]}</Link></section>;
}
