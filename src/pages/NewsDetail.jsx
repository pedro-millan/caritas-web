import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import HeroParallax from '../components/HeroParallax.jsx';

export default function NewsDetail({ news, lang }) {
  const first = news.blocks?.[0];
  const caritas = news.blocks?.[2];

  const text = {
    es: [
      'Cada mes de julio, Banyeres de Mariola rinde homenaje a su patrona, Santa María Magdalena, con una programación repleta de actos religiosos, culturales y festivos. Entre ellos destaca la Feria y Mercado Tradicional, una cita que llena el corazón del pueblo de artesanía, cultura popular, gastronomía y actividades para toda la familia.',
      'Los días 11 y 12 de julio, vecinos y visitantes podrán disfrutar de puestos artesanales, productos locales, animación callejera, actividades infantiles y talleres que recuperan el ambiente de las ferias tradicionales.',
      'Cáritas Banyeres estará presente con su stand solidario, donde no faltará la sección de Comercio Justo. Además, se podrán adquirir papeletas para una rifa solidaria con motivo de la festividad de Santa María Magdalena, con donativo de 2 € y sorteo previsto para el 22 de julio de 2026.',
      'Entre los premios figuran un lote de jamón serrano y embutidos de la tierra, un cuadro del pintor local Pedro Millán y una cesta de fruta natural. Una forma sencilla de participar en la vida del pueblo y colaborar con las acciones de ayuda de Cáritas.'
    ],
    va: [
      'Cada mes de juliol, Banyeres de Mariola ret homenatge a la seua patrona, Santa Maria Magdalena, amb una programació plena d’actes religiosos, culturals i festius. Entre ells destaca la Fira i Mercat Tradicional, una cita que ompli el cor del poble d’artesania, cultura popular, gastronomia i activitats per a tota la família.',
      'Els dies 11 i 12 de juliol, veïns i visitants podran gaudir de llocs artesanals, productes locals, animació de carrer, activitats infantils i tallers que recuperen l’ambient de les fires tradicionals.',
      'Càritas Banyeres estarà present amb el seu estand solidari, on no faltarà la secció de Comerç Just. A més, es podran adquirir paperetes per a una rifa solidària amb motiu de la festivitat de Santa Maria Magdalena, amb donatiu de 2 € i sorteig previst per al 22 de juliol de 2026.',
      'Entre els premis figuren un lot de pernil serrà i embotits de la terra, un quadre del pintor local Pedro Millán i una cistella de fruita natural. Una forma senzilla de participar en la vida del poble i col·laborar amb les accions d’ajuda de Càritas.'
    ]
  }[lang];

  return (
    <>
      <HeroParallax page={news} lang={lang} />
      <div className="page-shell news-detail-shell">
        <Link to="/noticias" className="back-link news-back-link">
          <ArrowLeft size={16} /> {lang === 'es' ? 'Volver a noticias' : 'Tornar a notícies'}
        </Link>

        <section className="single-news-layout">
          <motion.figure
            className="single-news-image"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <img src={first?.image || news.hero} alt={first?.alt?.[lang] || news.title[lang]} loading="lazy" />
          </motion.figure>

          <motion.article
            className="single-news-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <span>{news.eyebrow[lang]}</span>
            {text.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {caritas && <strong>{caritas.title[lang]}</strong>}
          </motion.article>
        </section>
      </div>
    </>
  );
}
