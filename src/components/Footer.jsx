import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { contactInfo, navItems } from '../data/siteContent.js';

export default function Footer({ lang }) {
  const labels = {
    es: { privacy: 'Política de Privacidad' },
    va: { privacy: 'Política de Privacitat' }
  };
  const projectItem = navItems.find((item) => item.children);
  const normalItems = navItems.filter((item) => !item.children);

  return (
    <footer className="site-footer">
      <div className="footer-wave" aria-hidden="true" />
      <div className="footer-inner">
        <div className="footer-brand-plain">
          <img src="/assets/logo-caritas-banyeres.png" alt="Cáritas Banyeres de Mariola" />
        </div>
        <div className="footer-column">
          {normalItems.map((item) => <Link key={item.path} to={item.path}>{item.label[lang]}</Link>)}
          <Link to="/politica-de-privacidad">{labels[lang].privacy}</Link>
        </div>
        <div className="footer-column">
          <Link to="/proyectos">{projectItem.label[lang]}</Link>
          {projectItem.children.map((child) => <Link key={child.path} to={child.path}>{child.label[lang]}</Link>)}
        </div>
        <div className="footer-column">
          <a href={contactInfo.facebook} target="_blank" rel="noreferrer" className="facebook-link"><ExternalLink size={18} /> Facebook</a>
          <img src="/assets/logo-caritas-banyeres.png" alt="Cáritas Banyeres de Mariola" className="footer-logo-mobile" />
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Cáritas Parroquial Banyeres de Mariola</div>
    </footer>
  );
}
