import HeroParallax from '../components/HeroParallax.jsx';
import SectionBlock from '../components/SectionBlock.jsx';

export default function PrivacyPage({ page, lang }) {
  const content = {
    es: [
      ['Finalidad del formulario', 'Los datos introducidos en el formulario de contacto se utilizan exclusivamente para responder a la consulta recibida a través del correo electrónico de Cáritas Banyeres.'],
      ['No almacenamiento en base de datos', 'La web no guarda en ninguna base de datos los nombres, correos electrónicos, teléfonos, direcciones ni cualquier otro dato personal enviado mediante el formulario. El mensaje se remite directamente al correo caritasbanyeres@gmail.com.'],
      ['Atención presencial', 'Cuando una persona acude presencialmente al centro y se inicia un proceso de acogida, seguimiento o acompañamiento, sus datos pueden incorporarse a una ficha de registro y control para abrir un expediente y realizar el seguimiento adecuado de su caso.'],
      ['Confidencialidad', 'La información compartida con Cáritas Banyeres se trata con discreción, respeto y finalidad social, evitando cualquier uso ajeno a la atención solicitada.']
    ],
    va: [
      ['Finalitat del formulari', 'Les dades introduïdes en el formulari de contacte s’utilitzen exclusivament per a respondre a la consulta rebuda a través del correu electrònic de Càritas Banyeres.'],
      ['No emmagatzematge en base de dades', 'La web no guarda en cap base de dades els noms, correus electrònics, telèfons, adreces ni qualsevol altra dada personal enviada mitjançant el formulari. El missatge es remet directament al correu caritasbanyeres@gmail.com.'],
      ['Atenció presencial', 'Quan una persona acudix presencialment al centre i s’inicia un procés d’acollida, seguiment o acompanyament, les seues dades poden incorporar-se a una fitxa de registre i control per a obrir un expedient i realitzar el seguiment adequat del seu cas.'],
      ['Confidencialitat', 'La informació compartida amb Càritas Banyeres es tracta amb discreció, respecte i finalitat social, evitant qualsevol ús alié a l’atenció sol·licitada.']
    ]
  }[lang];

  return (
    <>
      <HeroParallax page={page} lang={lang} />
      <div className="page-shell narrow privacy-content">
        {content.map(([title, text]) => <SectionBlock key={title} title={title}><p className="lead centered">{text}</p></SectionBlock>)}
      </div>
    </>
  );
}
