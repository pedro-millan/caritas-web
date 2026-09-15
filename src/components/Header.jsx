import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { navItems, projectPages } from '../data/siteContent.js';

const LANG_OPTIONS = [
  { code: 'es', label: 'ES' },
  { code: 'va', label: 'VAL' },
  { code: 'ur', label: 'اردو' },
  { code: 'en', label: 'EN' }
];

export default function Header({ lang, setLang }) {
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeAll = () => {
    setOpen(false);
    setProjectsOpen(false);
  };

  const handleBrandClick = () => {
    closeAll();
  };

  const projectNav = navItems.find((item) => item.children);
  const orderedProjects = projectNav.children.map((child) => {
    const slug = child.path.split('/').pop();
    return projectPages.find((project) => project.slug === slug);
  }).filter(Boolean);

  return (
    <header className="site-header">
      <Link to="/" className="brand" onClick={handleBrandClick} aria-label="Cáritas Banyeres de Mariola">
        <img src="/assets/logo-caritas-banyeres.png" alt="Cáritas Parroquial Banyeres de Mariola" />
      </Link>

      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => (
          <div className="nav-item" key={item.path}>
            {item.children ? (
              <>
                <NavLink to={item.path} className="nav-link project-trigger">
                  {item.label[lang]} <ChevronDown size={15} />
                </NavLink>
                <div className="dropdown mega-dropdown">
                  <div className="dropdown-feature">
                    <Sparkles size={20} />
                    <span>{{ es: 'Proyectos vivos de ayuda cercana', va: 'Projectes vius d’ajuda pròxima', ur: 'قریبی مدد کے جاری منصوبے', en: 'Ongoing projects of close support' }[lang]}</span>
                    <p>{{ es: 'Campañas, acciones solidarias y espacios de participación comunitaria.', va: 'Campanyes, accions solidàries i espais de participació comunitària.', ur: 'مہمات، یکجہتی کے اقدامات اور کمیونٹی شرکت کے مواقع۔', en: 'Campaigns, solidarity actions and spaces for community participation.' }[lang]}</p>
                    <Link to="/proyectos" className="dropdown-overview">{{ es: 'Ver todos', va: 'Veure tots', ur: 'سب دیکھیں', en: 'View all' }[lang]} <ArrowRight size={15} /></Link>
                  </div>
                  <div className="dropdown-groups dropdown-groups-single">
                    <div className="dropdown-projects compact ordered">
                      {orderedProjects.map((project) => (
                        <NavLink key={project.slug} to={`/proyectos/${project.slug}`} className="dropdown-project-link">
                          <img src={project.hero} alt="" />
                          <span>{project.title[lang]}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <NavLink to={item.path} className="nav-link">
                {item.label[lang]}
              </NavLink>
            )}
          </div>
        ))}
      </nav>

      <div className="header-actions">
        <div className="lang-switch" role="group" aria-label="Cambiar idioma">
          {LANG_OPTIONS.map((option) => (
            <button key={option.code} className={lang === option.code ? 'active' : ''} onClick={() => setLang(option.code)} lang={option.code}>
              {option.label}
            </button>
          ))}
        </div>
        <button className="menu-button" onClick={() => setOpen((v) => !v)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-panel" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}>
            {navItems.map((item) => (
              <div key={item.path} className="mobile-nav-group">
                {item.children ? (
                  <>
                    <button className="mobile-nav-link" onClick={() => setProjectsOpen((v) => !v)}>
                      {item.label[lang]} <ChevronDown size={16} />
                    </button>
                    <AnimatePresence>
                      {projectsOpen && (
                        <motion.div className="mobile-dropdown" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                          <NavLink to={projectNav.path} onClick={closeAll}>{{ es: 'Resumen de proyectos', va: 'Resum de projectes', ur: 'منصوبوں کا خلاصہ', en: 'Projects overview' }[lang]}</NavLink>
                          {projectNav.children.map((child) => (
                            <NavLink key={child.path} to={child.path} onClick={closeAll}>{child.label[lang]}</NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <NavLink to={item.path} onClick={closeAll} className="mobile-nav-link">{item.label[lang]}</NavLink>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
