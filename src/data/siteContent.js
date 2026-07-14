export const languages = {
  es: 'Castellano',
  va: 'Valencià'
};

export const navItems = [
  { label: { es: 'Inicio', va: 'Inici' }, path: '/' },
  { label: { es: 'Nuestra causa', va: 'La nostra causa' }, path: '/nuestra-causa' },
  {
    label: { es: 'Proyectos', va: 'Projectes' },
    path: '/proyectos',
    children: [
      { label: { es: 'Ranchi · India', va: 'Ranchi · Índia' }, path: '/proyectos/ranchi-india' },
      { label: { es: 'Que nadie pase frío', va: 'Que ningú passe fred' }, path: '/proyectos/que-nadie-pase-frio' },
      { label: { es: 'Ropero', va: 'Rober' }, path: '/proyectos/ropero' },
      { label: { es: 'Cena del hambre', va: 'Sopar de la fam' }, path: '/proyectos/cena-del-hambre' },
      { label: { es: 'Comercio Justo', va: 'Comerç Just' }, path: '/proyectos/comercio-justo' },
      { label: { es: 'Ferias Solidarias', va: 'Fires Solidàries' }, path: '/proyectos/ferias-solidarias' }
    ]
  },
  { label: { es: 'Colabora', va: 'Col·labora' }, path: '/colabora' },
  { label: { es: 'Noticias', va: 'Notícies' }, path: '/noticias' },
  { label: { es: 'Contacto', va: 'Contacte' }, path: '/contacto' }
];

export const pages = {
  home: {
    path: '/',
    hero: '/assets/hero-inicio.webp',
    title: { es: 'Cáritas Parroquial Banyeres de Mariola', va: 'Càritas Parroquial Banyeres de Mariola' },
    intro: {

    }
  },
  cause: {
    path: '/nuestra-causa',
    hero: '/assets/hero-nuestracausa.webp',
    title: { es: 'Nuestra causa', va: 'La nostra causa' },
    intro: {}
  },
  projects: {
    path: '/proyectos',
    hero: '/assets/hero-proyectos.webp',
    title: { es: 'Proyectos', va: 'Projectes' },
    intro: {
      es: 'Cada campaña nace de una necesidad concreta: abrigo, alimentación, ropa, sensibilización, cooperación internacional o comercio responsable.',
      va: 'Cada campanya naix d’una necessitat concreta: abric, alimentació, roba, sensibilització, cooperació internacional o comerç responsable.'
    }
  },
  collaborate: {
    path: '/colabora',
    hero: '/assets/hero-colabora.webp',
    title: { es: 'Colabora', va: 'Col·labora' },
    intro: {
      es: 'Puedes colaborar con tiempo, alimentos, ropa en buen estado, difusión o aportaciones económicas destinadas a los proyectos sociales de Cáritas Banyeres.',
      va: 'Pots col·laborar amb temps, aliments, roba en bon estat, difusió o aportacions econòmiques destinades als projectes socials de Càritas Banyeres.'
    }
  },
  news: {
    path: '/noticias',
    hero: '/assets/hero-noticias.webp',
    title: { es: 'Noticias', va: 'Notícies' },
    intro: {
      es: 'Un espacio para compartir avisos, campañas, actividades solidarias y pequeñas noticias de la vida comunitaria de Cáritas Banyeres.',
      va: 'Un espai per a compartir avisos, campanyes, activitats solidàries i xicotetes notícies de la vida comunitària de Càritas Banyeres.'
    }
  },
  contact: {
    path: '/contacto',
    hero: '/assets/hero-contacto(1).webp',
    title: { es: 'Contacto', va: 'Contacte' },
    intro: {
      es: 'Si necesitas ayuda, quieres colaborar o deseas más información, puedes escribirnos mediante este formulario. El mensaje llegará directamente al correo de Cáritas Banyeres.',
      va: 'Si necessites ajuda, vols col·laborar o desitges més informació, pots escriure’ns mitjançant este formulari. El missatge arribarà directament al correu de Càritas Banyeres.'
    }
  },
  privacy: {
    path: '/politica-de-privacidad',
    hero: '/assets/privacidad.webp',
    title: { es: 'Política de Privacidad', va: 'Política de Privacitat' },
    intro: {
      es: 'Tratamos la información de contacto con discreción y únicamente para responder a la solicitud recibida.',
      va: 'Tractem la informació de contacte amb discreció i únicament per a respondre a la sol·licitud rebuda.'
    }
  }
};

export const projectPages = [
  {
    slug: 'ranchi-india',
    hero: '/assets/hero-ranchiindia.webp',
    title: { es: 'Ranchi · India', va: 'Ranchi · Índia' },
    intro: {
      es: 'Un proyecto de solidaridad internacional que nos recuerda que la ayuda no entiende de fronteras cuando se trata de dignidad, infancia y oportunidades.',
      va: 'Un projecte de solidaritat internacional que ens recorda que l’ajuda no entén de fronteres quan es tracta de dignitat, infància i oportunitats.'
    },
    body: {
      es: [
        '## Ranchi, India: una historia de entrega que continúa',
        'Durante años, la hermana Tere Ferre, misionera natural de Banyeres de Mariola, dedicó su vida al servicio de los niños y niñas más necesitados en Ranchi, India. Su labor fue mucho más que una ayuda puntual: fue una presencia constante, cercana y profundamente humana para quienes vivían en situaciones de gran vulnerabilidad.',
        'Desde allí, Tere Ferre impulsó proyectos orientados a la educación, el cuidado y la protección de niñas desfavorecidas, ofreciendo oportunidades reales a quienes más difícil lo tenían. Su trabajo estuvo vinculado a una residencia para niñas y a un dispensario, espacios desde los que se acompañaba, cuidaba y sostenía a menores y familias necesitadas. Gracias a su entrega, muchas niñas pudieron acceder a una vida más digna, con más seguridad, atención y esperanza.',
        'Aunque hoy Tere Ferre ya no puede continuar su misión de forma presencial en la India, su huella permanece viva. Aquella labor sembró un vínculo profundo entre Ranchi y Banyeres de Mariola, un puente de solidaridad que Cáritas sigue manteniendo con cariño, responsabilidad y compromiso.',
        'Actualmente, Cáritas Banyeres continúa apoyando a los niños y niñas más necesitados de Ranchi a través del apadrinamiento que realizan familias de nuestro pueblo. Estas aportaciones económicas permiten seguir colaborando con su educación, sus necesidades básicas y su desarrollo personal, manteniendo vivo el espíritu de ayuda que Tere Ferre hizo crecer durante tantos años.',
        'Ranchi no es solo un proyecto lejano. Es una historia compartida de fe, generosidad y esperanza. Es el recuerdo agradecido de una misionera que entregó su vida al servicio de los demás, y también el compromiso presente de todas las personas que, desde Banyeres de Mariola, siguen haciendo posible que esa ayuda llegue allí donde más falta hace.'
      ],
      va: [
        '## Ranchi, l’Índia: una història d’entrega que continua',
        'Durant anys, la germana Tere Ferre, missionera natural de Banyeres de Mariola, va dedicar la seua vida al servei dels xiquets i xiquetes més necessitats a Ranchi, l’Índia. La seua labor va ser molt més que una ajuda puntual: va ser una presència constant, propera i profundament humana per a qui vivia en situacions de gran vulnerabilitat.',
        'Des d’allí, Tere Ferre va impulsar projectes orientats a l’educació, la cura i la protecció de xiquetes desafavorides, oferint oportunitats reals a qui més difícil ho tenia. El seu treball va estar vinculat a una residència per a xiquetes i a un dispensari, espais des dels quals s’acompanyava, cuidava i sostenia menors i famílies necessitades. Gràcies a la seua entrega, moltes xiquetes van poder accedir a una vida més digna, amb més seguretat, atenció i esperança.',
        'Encara que hui Tere Ferre ja no pot continuar la seua missió de forma presencial a l’Índia, la seua empremta roman viva. Aquella labor va sembrar un vincle profund entre Ranchi i Banyeres de Mariola, un pont de solidaritat que Càritas continua mantenint amb estima, responsabilitat i compromís.',
        'Actualment, Càritas Banyeres continua donant suport als xiquets i xiquetes més necessitats de Ranchi a través de l’apadrinament que realitzen famílies del nostre poble. Estes aportacions econòmiques permeten continuar col·laborant amb la seua educació, les seues necessitats bàsiques i el seu desenvolupament personal, mantenint viu l’esperit d’ajuda que Tere Ferre va fer créixer durant tants anys.',
        'Ranchi no és només un projecte llunyà. És una història compartida de fe, generositat i esperança. És el record agraït d’una missionera que va entregar la seua vida al servei dels altres, i també el compromís present de totes les persones que, des de Banyeres de Mariola, continuen fent possible que eixa ajuda arribe allí on més falta fa.'
      ]
    }
  },
  {
    slug: 'que-nadie-pase-frio',
    hero: '/assets/hero-quenadiepasefrio.webp',
    title: { es: 'Que nadie pase frío', va: 'Que ningú passe fred' },
    intro: {
      es: 'Una campaña de recogida y reparto de ropa de abrigo, mantas y recursos básicos para acompañar a quienes afrontan el invierno con menos medios.',
      va: 'Una campanya de recollida i repartiment de roba d’abric, mantes i recursos bàsics per a acompanyar qui afronta l’hivern amb menys mitjans.'
    },
    body: {
      es: [
        'El frío agrava muchas situaciones de vulnerabilidad y convierte gestos muy sencillos en una ayuda profundamente necesaria. Por eso, la campaña “Que nadie pase frío” busca reunir ropa de abrigo, mantas, textiles útiles y recursos básicos para que ninguna persona o familia afronte el invierno sin protección.',
        'Cada donación se revisa y se prepara con cuidado, priorizando prendas en buen estado, limpias y realmente útiles. El objetivo no es solo cubrir una necesidad material, sino hacerlo desde la dignidad, el respeto y la cercanía que guían el trabajo de Cáritas Banyeres.',
        'La colaboración vecinal permite responder con rapidez a situaciones concretas: una manta para una vivienda fría, un abrigo para una persona que lo necesita, ropa térmica para menores o textiles básicos para familias que atraviesan un momento difícil.'
      ],
      va: [
        'El fred agreuja moltes situacions de vulnerabilitat i converteix gestos molt senzills en una ajuda profundament necessària. Per això, la campanya “Que ningú passe fred” busca reunir roba d’abric, mantes, tèxtils útils i recursos bàsics perquè cap persona o família afronte l’hivern sense protecció.',
        'Cada donació es revisa i es prepara amb cura, prioritzant peces en bon estat, netes i realment útils. L’objectiu no és només cobrir una necessitat material, sinó fer-ho des de la dignitat, el respecte i la proximitat que guien el treball de Càritas Banyeres.',
        'La col·laboració veïnal permet respondre amb rapidesa a situacions concretes: una manta per a una vivenda freda, un abric per a una persona que el necessita, roba tèrmica per a menors o tèxtils bàsics per a famílies que travessen un moment difícil.'
      ]
    }
  },
  {
    slug: 'ropero',
    hero: '/assets/hero-ropero.webp',
    title: { es: 'Ropero', va: 'Rober' },
    intro: {
      es: 'El ropero solidario organiza prendas y textiles para que lleguen a personas y familias que los necesitan, cuidando siempre la dignidad de quien recibe.',
      va: 'El rober solidari organitza peces i tèxtils perquè arriben a persones i famílies que els necessiten, cuidant sempre la dignitat de qui rep.'
    },
    body: {
      es: ['', ''],
      va: ['', '']
    }
  },
  {
    slug: 'cena-del-hambre',
    hero: '/assets/hero-cenadelhambre.webp',
    title: { es: 'Cena del hambre', va: 'Sopar de la fam' },
    intro: {
      es: 'Una actividad solidaria y comunitaria que invita a reunirse con sencillez, tomar conciencia y apoyar proyectos sociales.',
      va: 'Una activitat solidària i comunitària que convida a reunir-se amb senzillesa, prendre consciència i donar suport a projectes socials.'
    },
    body: {}
  },
  {
    slug: 'comercio-justo',
    hero: '/assets/hero-comerciojusto.webp',
    title: { es: 'Comercio Justo', va: 'Comerç Just' },
    intro: {
      es: 'Promovemos una forma de consumo más consciente, responsable y respetuosa con las personas que producen y con el entorno.',
      va: 'Promovem una forma de consum més conscient, responsable i respectuosa amb les persones que produeixen i amb l’entorn.'
    },
    body: {}
  },
  {
    slug: 'ferias-solidarias',
    hero: '/assets/hero-feriassolidarias.webp',
    title: { es: 'Ferias Solidarias', va: 'Fires Solidàries' },
    intro: {
      es: 'Espacios de encuentro donde la comunidad participa, dona, compra y contribuye a sostener proyectos de ayuda local y cooperación.',
      va: 'Espais de trobada on la comunitat participa, dona, compra i contribueix a sostindre projectes d’ajuda local i cooperació.'
    },
    body: {
      es: [

      ],
      va: [

      ]
    }
  }
];

export const highlights = [
  {
    title: { es: 'Acogida', va: 'Acollida' },
    image: '/assets/home-acogida.webp',
    text: {
      es: 'Escucha inicial y orientación cercana para comprender cada situación con respeto y discreción.',
      va: 'Escolta inicial i orientació pròxima per a comprendre cada situació amb respecte i discreció.'
    }
  },
  {
    title: { es: 'Acompañamiento', va: 'Acompanyament' },
    image: '/assets/home-acompanamiento.webp',
    text: {
      es: 'Seguimiento humano, cercano y adaptado al proceso de cada persona o familia, abasteciendo con enseres de primera necesidad siempre que nos es posible.',
      va: 'Seguiment humà, pròxim i adaptat al procés de cada persona o família, abastint amb útils de primera necessitat sempre que ens es possible.'
    }
  },
  {
    title: { es: 'Comunidad', va: 'Comunitat' },
    image: '/assets/home-comunidad.webp',
    text: {
      es: 'Voluntariado y colaboración vecinal para transformar pequeños gestos en esperanza compartida.',
      va: 'Voluntariat i col·laboració veïnal per a transformar xicotets gestos en esperança compartida.'
    }
  }
];

export const causeBlocks = [
  {
    title: { es: 'Acogida y orientación', va: 'Acollida i orientació' },
    image: '/assets/acogida-y-orientacion.webp',
    text: {
      es: 'La primera ayuda empieza escuchando. Acogemos cada situación con respeto, discreción y cercanía para comprender qué necesita la persona o familia y orientar los siguientes pasos.',
      va: 'La primera ajuda comença escoltant. Acollim cada situació amb respecte, discreció i proximitat per a comprendre què necessita la persona o família i orientar els següents passos.'
    }
  },
  {
    title: { es: 'Ropero solidario', va: 'Rober solidari' },
    image: '/assets/ropero-solidario.webp',
    text: {
      es: 'Clasificamos y preparamos ropa limpia y en buen estado para que llegue de forma digna a quienes la necesitan, atendiendo también a las necesidades de cada temporada.',
      va: 'Classifiquem i preparem roba neta i en bon estat perquè arribe de forma digna a qui la necessita, atenent també les necessitats de cada temporada.'
    }
  },
  {
    title: { es: 'Campañas de alimentos', va: 'Campanyes d’aliments' },
    image: '/assets/campanas-de-alimentos.webp',
    text: {
      es: 'Las recogidas y repartos de alimentos permiten responder a necesidades básicas con productos útiles, cuidando siempre la organización y el seguimiento de cada caso.',
      va: 'Les recollides i repartiments d’aliments permeten respondre a necessitats bàsiques amb productes útils, cuidant sempre l’organització i el seguiment de cada cas.'
    }
  },
  {
    title: { es: 'Sensibilización comunitaria', va: 'Sensibilització comunitària' },
    image: '/assets/sensibilizacion-comunitaria.webp',
    text: {
      es: 'La ayuda también consiste en mirar alrededor. Promovemos campañas y actividades que recuerdan que la pobreza, la soledad y la exclusión son realidades cercanas que podemos afrontar juntos.',
      va: 'L’ajuda també consisteix a mirar al voltant. Promovem campanyes i activitats que recorden que la pobresa, la soledat i l’exclusió són realitats pròximes que podem afrontar junts.'
    }
  },
  {
    title: { es: 'Cooperación y comercio justo', va: 'Cooperació i comerç just' },
    image: '/assets/cooperacion-y-comerciojusto.webp',
    text: {
      es: 'Impulsamos una solidaridad que mira más allá de lo inmediato: cooperación, consumo responsable y apoyo a proyectos donde la dignidad de las personas está en el centro.',
      va: 'Impulsem una solidaritat que mira més enllà de l’immediat: cooperació, consum responsable i suport a projectes on la dignitat de les persones està al centre.'
    }
  },
  {
    title: { es: 'Acompañamiento familiar', va: 'Acompanyament familiar' },
    image: '/assets/acompanamiento-familiar.webp',
    text: {
      es: 'Cuando una familia atraviesa un momento difícil, el apoyo no termina en una ayuda puntual. Caminamos junto a las personas para favorecer procesos de estabilidad y esperanza.',
      va: 'Quan una família travessa un moment difícil, el suport no acaba en una ajuda puntual. Caminem al costat de les persones per a afavorir processos d’estabilitat i esperança.'
    }
  }
];

export const collaborateBlocks = [
  {
    title: { es: 'Donativos de enseres', va: 'Donatius d’estris' },
    image: '/assets/donacion-enseres.webp',
    text: {
      es: 'A menudo hacen falta colchones, camas, armarios, mesas y otros elementos básicos de uso cotidiano. Si tienes enseres en buen estado, contacta antes con nosotros para valorar la necesidad y coordinar la entrega.',
      va: 'Sovint fan falta matalassos, llits, armaris, taules i altres elements bàsics d’ús quotidià. Si tens estris en bon estat, contacta abans amb nosaltres per a valorar la necessitat i coordinar l’entrega.'
    }
  },
  {
    title: { es: 'Aporta tu granito', va: 'Aporta el teu granet' },
    image: '/assets/aporta-tu-granito.webp',
    text: {
      es: 'Cualquier persona puede ayudar con sus habilidades: comunicación, organización, transporte, talleres, escucha, mantenimiento o apoyo puntual. Escríbenos y veremos cómo puedes encajar y servir mejor a la causa.',
      va: 'Qualsevol persona pot ajudar amb les seues habilitats: comunicació, organització, transport, tallers, escolta, manteniment o suport puntual. Escriu-nos i veurem com pots encaixar i servir millor a la causa.'
    }
  },
  {
    title: { es: 'Donación económica', va: 'Donació econòmica' },
    image: '/assets/donacion-economica.webp',
    text: {
      es: 'Si no puedes colaborar de otra manera, el apoyo económico siempre es bienvenido. Cada aportación ayuda a sostener campañas, necesidades urgentes y acciones de acompañamiento social.',
      va: 'Si no pots col·laborar d’una altra manera, el suport econòmic sempre és benvingut. Cada aportació ajuda a sostindre campanyes, necessitats urgents i accions d’acompanyament social.'
    }
  },
  {
    title: { es: 'Donación de ropa', va: 'Donació de roba' },
    image: '/assets/donacion-ropa.webp',
    text: {
      es: 'Puedes donar ropa mediante el contenedor situado en nuestro ropero solidario, en la calle Francisco Berenguer Mora, en los bajos del mercado. Rogamos que esté limpia y en buen estado.',
      va: 'Pots donar roba mitjançant el contenidor situat en el nostre rober solidari, al carrer Francisco Berenguer Mora, als baixos del mercat. Preguem que estiga neta i en bon estat.'
    }
  }
];

export const newsItems = [
  {
    slug: 'feria-mercado-tradicional-santa-maria-magdalena',
    path: '/noticias/feria-mercado-tradicional-santa-maria-magdalena',
    title: {
      es: 'Feria y Mercado Tradicional de Santa María Magdalena',
      va: 'Fira i Mercat Tradicional de Santa Maria Magdalena'
    },
    date: { es: '11 y 12 de julio', va: '11 i 12 de juliol' },
    cover: '/assets/fm1.webp',
    text: {
      es: 'Banyeres de Mariola vuelve a celebrar su feria tradicional con artesanía, cultura popular y un espacio solidario en el que Cáritas estará presente.',
      va: 'Banyeres de Mariola torna a celebrar la seua fira tradicional amb artesania, cultura popular i un espai solidari en què Càritas estarà present.'
    }
  }
];

export const newsPages = [
  {
    slug: 'feria-mercado-tradicional-santa-maria-magdalena',
    hero: '/assets/fm1.webp',
    title: {
      es: 'Feria y Mercado Tradicional de Santa María Magdalena',
      va: 'Fira i Mercat Tradicional de Santa Maria Magdalena'
    },
    eyebrow: { es: 'Noticias · Banyeres de Mariola', va: 'Notícies · Banyeres de Mariola' },
    intro: {
      es: 'Cultura, tradición y solidaridad se encuentran en una cita abierta a vecinos, visitantes y familias.',
      va: 'Cultura, tradició i solidaritat es troben en una cita oberta a veïns, visitants i famílies.'
    },
    blocks: [
      {
        image: '/assets/fm1.webp',
        alt: { es: 'Cartel de Santa María Magdalena 2026.', va: 'Cartell de Santa Maria Magdalena 2026.' },
        title: { es: 'Una cita con la tradición', va: 'Una cita amb la tradició' },
        text: {
          es: 'Cada mes de julio, Banyeres de Mariola rinde homenaje a su patrona, Santa María Magdalena, con una programación repleta de actos religiosos, culturales y festivos. Entre ellos destaca la Feria y Mercado Tradicional, que transforma el corazón del pueblo en un escenario de encuentro, color y participación.',
          va: 'Cada mes de juliol, Banyeres de Mariola ret homenatge a la seua patrona, Santa Maria Magdalena, amb una programació plena d’actes religiosos, culturals i festius. Entre ells destaca la Fira i Mercat Tradicional, que transforma el cor del poble en un escenari de trobada, color i participació.'
        }
      },
      {
        image: '/assets/fm2.webp',
        alt: { es: 'Programación de julio de Santa María Magdalena.', va: 'Programació de juliol de Santa Maria Magdalena.' },
        title: { es: 'Feria, mercado y vida de pueblo', va: 'Fira, mercat i vida de poble' },
        text: {
          es: 'Los días 11 y 12 de julio, la feria vuelve con una propuesta llena de puestos artesanales, productos locales, gastronomía, actividades infantiles, talleres de época y animación callejera. Es una oportunidad para disfrutar de la cultura popular y del ambiente festivo que caracteriza a Banyeres de Mariola.',
          va: 'Els dies 11 i 12 de juliol, la fira torna amb una proposta plena de llocs artesanals, productes locals, gastronomia, activitats infantils, tallers d’època i animació de carrer. És una oportunitat per a gaudir de la cultura popular i de l’ambient festiu que caracteritza Banyeres de Mariola.'
        }
      },
      {
        image: '/assets/fm3.webp',
        alt: { es: 'Calendario de Santa María Magdalena con programación.', va: 'Calendari de Santa Maria Magdalena amb programació.' },
        title: { es: 'Cáritas también estará presente', va: 'Càritas també estarà present' },
        text: {
          es: 'Cáritas Banyeres estará presente con su stand solidario, donde no faltará la sección de Comercio Justo. Además, se podrán adquirir papeletas para una rifa solidaria con motivo de la festividad de Santa María Magdalena. El donativo será de 2 € y el sorteo se realizará el día 22 de julio de 2026. Entre los premios previstos figuran un lote de jamón serrano y embutidos de la tierra, un cuadro del pintor local Pedro Millán y una cesta de fruta natural.',
          va: 'Càritas Banyeres estarà present amb el seu estand solidari, on no faltarà la secció de Comerç Just. A més, es podran adquirir paperetes per a una rifa solidària amb motiu de la festivitat de Santa Maria Magdalena. El donatiu serà de 2 € i el sorteig es realitzarà el dia 22 de juliol de 2026. Entre els premis previstos hi ha un lot de pernil serrà i embotits de la terra, un quadre del pintor local Pedro Millán i una cistella de fruita natural.'
        }
      }
    ]
  }
];

export const contactInfo = {
  email: 'caritasbanyeres@gmail.com',
  phone: '+34 615 97 54 57',
  phoneRaw: '+34615975457',
  facebook: 'https://www.facebook.com/profile.php?id=61576366623235',
  location: { es: 'Banyeres de Mariola', va: 'Banyeres de Mariola' }
};

export const projectStories = {
  ropero: {
    title: { es: 'El ropero por dentro', va: 'El rober per dins' },
    intro: {
      es: 'El ropero solidario es uno de los espacios más vivos de Cáritas Banyeres: un lugar donde cada prenda se revisa, se ordena y se prepara con cuidado para que llegue en condiciones dignas a quienes más la necesitan.',
      va: 'El rober solidari és un dels espais més vius de Càritas Banyeres: un lloc on cada peça es revisa, s’ordena i es prepara amb cura perquè arribe en condicions dignes a qui més la necessita.'
    },
    blocks: [
      {
        image: '/assets/ropero-foto-01.webp',
        alt: { es: 'Interior del ropero solidario con ropa organizada.', va: 'Interior del rober solidari amb roba organitzada.' },
        title: { es: 'Un espacio de acogida material', va: 'Un espai d’acollida material' },
        text: {
          es: 'La ropa donada se convierte en una ayuda directa cuando llega limpia, en buen estado y lista para ser entregada. Por eso cada aportación se clasifica con calma, atendiendo a tallas, temporadas y necesidades concretas.',
          va: 'La roba donada es converteix en una ajuda directa quan arriba neta, en bon estat i llesta per a ser entregada. Per això cada aportació es classifica amb calma, atenent talles, temporades i necessitats concretes.'
        }
      },
      {
        image: '/assets/ropero-foto-02.webp',
        alt: { es: 'Zona de bolsos y complementos del ropero solidario.', va: 'Zona de bosses i complements del rober solidari.' },
        title: { es: 'Orden para cuidar mejor', va: 'Ordre per a cuidar millor' },
        text: {
          es: 'El trabajo del voluntariado permite que el ropero funcione como un espacio útil y humano. Bolsos, calzado, mantas, ropa de abrigo y prendas cotidianas se colocan para facilitar una atención más rápida y digna.',
          va: 'El treball del voluntariat permet que el rober funcione com un espai útil i humà. Bosses, calçat, mantes, roba d’abric i peces quotidianes es col·loquen per a facilitar una atenció més ràpida i digna.'
        }
      },
      {
        image: '/assets/ropero-foto-03.webp',
        alt: { es: 'Vista general del ropero solidario.', va: 'Vista general del rober solidari.' },
        title: { es: 'Martes de atención', va: 'Dimarts d’atenció' },
        text: {
          es: 'Nuestro ropero solidario se encuentra en C/Francisco Berenguer Mora, en los bajos del mercado, y abre todos los martes de 18:30 a 20:30. Desde allí se acompaña a personas y familias que necesitan ropa, textiles o apoyo básico.',
          va: 'El nostre rober solidari es troba al C/Francisco Berenguer Mora, als baixos del mercat, i obri tots els dimarts de 18:30 a 20:30. Des d’allí s’acompanya persones i famílies que necessiten roba, tèxtils o suport bàsic.'
        }
      },
      {
        image: '/assets/ropero-foto-04.webp',
        alt: { es: 'Ropa clasificada en mesas del ropero solidario.', va: 'Roba classificada en taules del rober solidari.' },
        title: { es: 'Dignidad en cada entrega', va: 'Dignitat en cada entrega' },
        text: {
          es: 'Agradecemos de antemano que la ropa donada venga en buen estado, limpia y doblada. Ese gesto sencillo facilita muchísimo la labor del equipo y permite que la ayuda llegue preparada a quienes más lo necesitan.',
          va: 'Agraïm per endavant que la roba donada vinga en bon estat, neta i doblada. Eixe gest senzill facilita moltíssim la tasca de l’equip i permet que l’ajuda arribe preparada a qui més la necessita.'
        }
      },
      {
        image: '/assets/ropero-foto-05.webp',
        alt: { es: 'Percheros, mantas y ropa del ropero solidario.', va: 'Penjadors, mantes i roba del rober solidari.' },
        title: { es: 'Una cadena de cuidado', va: 'Una cadena de cura' },
        text: {
          es: 'Cada prenda que llega en buenas condiciones puede formar parte de una cadena de ayuda: una persona dona, otra clasifica, otra acompaña y otra recibe algo que necesita para su día a día.',
          va: 'Cada peça que arriba en bones condicions pot formar part d’una cadena d’ajuda: una persona dona, una altra classifica, una altra acompanya i una altra rep alguna cosa que necessita per al seu dia a dia.'
        }
      }
    ]
  },
  'comercio-justo': {
    title: { es: 'Comercio Justo en nuestras ferias', va: 'Comerç Just en les nostres fires' },
    intro: {
      es: 'En los stands que Cáritas monta en las diferentes ferias siempre tiene presencia la ya habitual sección de Comercio Justo: una forma sencilla de consumir con más conciencia y apoyar condiciones más justas para pequeños productores.',
      va: 'En els estands que Càritas munta en les diferents fires sempre té presència la ja habitual secció de Comerç Just: una forma senzilla de consumir amb més consciència i donar suport a condicions més justes per a xicotets productors.'
    },
    blocks: [
      {
        image: '/assets/comercio-justo-foto-01.webp',
        alt: { es: 'Puesto de Comercio Justo de Cáritas Banyeres.', va: 'Punt de Comerç Just de Càritas Banyeres.' },
        title: { es: 'Productos con sentido', va: 'Productes amb sentit' },
        text: {
          es: 'El Comercio Justo permite adquirir productos alimenticios de primera calidad y, al mismo tiempo, apoyar de manera directa a quienes los producen. Cada compra se convierte en un gesto de responsabilidad compartida.',
          va: 'El Comerç Just permet adquirir productes alimentaris de primera qualitat i, al mateix temps, donar suport de manera directa a qui els produeix. Cada compra es converteix en un gest de responsabilitat compartida.'
        }
      },
      {
        image: '/assets/comercio-justo-foto-02.webp',
        alt: { es: 'Personas visitando el puesto de Comercio Justo.', va: 'Persones visitant el punt de Comerç Just.' },
        title: { es: 'Un punto de encuentro', va: 'Un punt de trobada' },
        text: {
          es: 'Estos puestos no solo venden productos: también abren conversación. Sirven para explicar por qué es importante fomentar valores, condiciones dignas y relaciones comerciales más justas.',
          va: 'Estos punts no sols venen productes: també obrin conversa. Servixen per a explicar per què és important fomentar valors, condicions dignes i relacions comercials més justes.'
        }
      },
      {
        image: '/assets/comercio-justo-foto-03.webp',
        alt: { es: 'Productos alimenticios de Comercio Justo.', va: 'Productes alimentaris de Comerç Just.' },
        title: { es: 'Pequeños gestos cotidianos', va: 'Xicotets gestos quotidians' },
        text: {
          es: 'Elegir Comercio Justo es una manera concreta de ayudar desde lo cotidiano. Un café, un cacao, una infusión o un alimento pueden llevar detrás una historia de trabajo mejor reconocido y más humano.',
          va: 'Triar Comerç Just és una manera concreta d’ajudar des del quotidià. Un café, un cacau, una infusió o un aliment poden portar darrere una història de treball millor reconegut i més humà.'
        }
      }
    ]
  }
  ,
  'ranchi-india': {
    title: { es: 'Un puente entre Banyeres y Ranchi', va: 'Un pont entre Banyeres i Ranchi' },
    intro: {
      es: 'La ayuda a Ranchi forma parte de una historia compartida que une la labor misionera, el apadrinamiento y la solidaridad de muchas familias de Banyeres.',
      va: 'L’ajuda a Ranchi forma part d’una història compartida que unix la labor missionera, l’apadrinament i la solidaritat de moltes famílies de Banyeres.'
    },
    blocks: [
      {
        image: '/assets/ranchi-mapa.webp',
        alt: { es: 'Mapa con la ubicación de Ranchi en India.', va: 'Mapa amb la ubicació de Ranchi a l’Índia.' },
        title: { es: 'Ranchi, una realidad cercana desde la distancia', va: 'Ranchi, una realitat pròxima des de la distància' },
        text: {
          es: 'Situar Ranchi en el mapa ayuda a comprender la dimensión de este vínculo solidario. Aunque la distancia geográfica es grande, el compromiso de las familias de Banyeres ha permitido mantener viva una ayuda concreta para niños y niñas que necesitan apoyo educativo, acompañamiento y oportunidades.',
          va: 'Situar Ranchi en el mapa ajuda a comprendre la dimensió d’este vincle solidari. Encara que la distància geogràfica és gran, el compromís de les famílies de Banyeres ha permés mantindre viva una ajuda concreta per a xiquets i xiquetes que necessiten suport educatiu, acompanyament i oportunitats.'
        }
      },
      {
        image: '/assets/ranchi1.webp',
        alt: { es: 'Grupo de niñas del proyecto de Ranchi agradeciendo el apoyo recibido.', va: 'Grup de xiquetes del projecte de Ranchi agraint el suport rebut.' },
        title: { es: 'Educación y esperanza', va: 'Educació i esperança' },
        text: {
          es: 'El apoyo de las familias de Banyeres ayuda a sostener oportunidades educativas y de acompañamiento para niñas y niños de Ranchi. Cada aportación permite que la ayuda se transforme en continuidad, escuela, cuidado y futuro.',
          va: 'El suport de les famílies de Banyeres ajuda a sostindre oportunitats educatives i d’acompanyament per a xiquetes i xiquets de Ranchi. Cada aportació permet que l’ajuda es transforme en continuïtat, escola, cura i futur.'
        }
      },
      {
        image: '/assets/ranchi2.webp',
        alt: { es: 'Niños y niñas comiendo en un espacio de atención en Ranchi.', va: 'Xiquets i xiquetes menjant en un espai d’atenció a Ranchi.' },
        title: { es: 'Cuidado en lo cotidiano', va: 'Cura en el dia a dia' },
        text: {
          es: 'La ayuda también se concreta en necesidades básicas: alimentación, acompañamiento y espacios seguros donde crecer. Son gestos sencillos que, mantenidos en el tiempo, marcan una diferencia real en la vida de muchas familias.',
          va: 'L’ajuda també es concreta en necessitats bàsiques: alimentació, acompanyament i espais segurs on créixer. Són gestos senzills que, mantinguts en el temps, marquen una diferència real en la vida de moltes famílies.'
        }
      },
      {
        image: '/assets/ranchi3.webp',
        alt: { es: 'La hermana Tere compartiendo un momento con niñas en Ranchi.', va: 'La germana Tere compartint un moment amb xiquetes a Ranchi.' },
        title: { es: 'La huella de Tere Ferre', va: 'L’empremta de Tere Ferre' },
        text: {
          es: 'La presencia de Tere Ferre dejó una huella profunda de cercanía, entrega y servicio. Hoy, Cáritas Banyeres mantiene vivo ese vínculo, recordando su labor y prolongando su espíritu de ayuda a través del apadrinamiento.',
          va: 'La presència de Tere Ferre va deixar una empremta profunda de proximitat, entrega i servei. Hui, Càritas Banyeres manté viu eixe vincle, recordant la seua labor i prolongant el seu esperit d’ajuda a través de l’apadrinament.'
        }
      }
    ]
  },
  'que-nadie-pase-frio': {
    title: { es: 'Abrigo, cuidado y dignidad', va: 'Abric, cura i dignitat' },
    intro: {
      es: 'La campaña se sostiene con prendas y textiles útiles, pero sobre todo con una forma de mirar la necesidad desde el cuidado y la responsabilidad comunitaria.',
      va: 'La campanya es sosté amb peces i tèxtils útils, però sobretot amb una forma de mirar la necessitat des de la cura i la responsabilitat comunitària.'
    },
    blocks: [
      {
        image: '/assets/npf1.webp',
        alt: { es: 'Textiles de abrigo doblados.', va: 'Tèxtils d’abric doblegats.' },
        title: { es: 'Ropa de abrigo que protege', va: 'Roba d’abric que protegix' },
        text: {
          es: 'Bufandas, mantas, jerséis, abrigos y prendas térmicas pueden marcar una gran diferencia cuando llega el invierno. La campaña recoge, revisa y prepara cada aportación para que llegue con rapidez a personas mayores, familias con menores o vecinos que atraviesan una situación de dificultad. No se trata solo de entregar ropa, sino de ofrecer abrigo, cuidado y tranquilidad en los meses más duros.',
          va: 'Bufandes, mantes, jerseis, abrics i peces tèrmiques poden marcar una gran diferència quan arriba l’hivern. La campanya arreplega, revisa i prepara cada aportació perquè arribe amb rapidesa a persones majors, famílies amb menors o veïns que travessen una situació de dificultat. No es tracta només d’entregar roba, sinó d’oferir abric, cura i tranquil·litat en els mesos més durs.'
        }
      },
      {
        image: '/assets/npf2.webp',
        alt: { es: 'Caja con prendas de invierno.', va: 'Caixa amb peces d’hivern.' },
        title: { es: 'Donaciones preparadas para ayudar', va: 'Donacions preparades per a ajudar' },
        text: {
          es: 'Agradecemos que las prendas lleguen limpias, en buen estado y listas para entregar. Ese cuidado previo facilita la clasificación, evita trabajo innecesario al voluntariado y permite responder antes a quienes necesitan apoyo. Cada prenda bien preparada es una muestra de respeto hacia la persona que la recibirá.',
          va: 'Agraïm que les peces arriben netes, en bon estat i llestes per a entregar. Eixa cura prèvia facilita la classificació, evita treball innecessari al voluntariat i permet respondre abans a qui necessita suport. Cada peça ben preparada és una mostra de respecte cap a la persona que la rebrà.'
        }
      },
      {
        image: '/assets/npf3.webp',
        alt: { es: 'Ropa de punto de invierno.', va: 'Roba de punt d’hivern.' },
        title: { es: 'Una ayuda que llega en invierno', va: 'Una ajuda que arriba a l’hivern' },
        text: {
          es: 'La campaña se activa especialmente cuando bajan las temperaturas, pero su espíritu permanece todo el año: organizar la solidaridad para que llegue con orden, respeto y dignidad. Gracias a la colaboración de Banyeres, Cáritas puede atender necesidades concretas y convertir pequeños gestos en una protección real frente al frío.',
          va: 'La campanya s’activa especialment quan baixen les temperatures, però el seu esperit roman tot l’any: organitzar la solidaritat perquè arribe amb ordre, respecte i dignitat. Gràcies a la col·laboració de Banyeres, Càritas pot atendre necessitats concretes i convertir xicotets gestos en una protecció real davant del fred.'
        }
      }
    ]
  },
  'ferias-solidarias': {
    title: { es: 'Stands solidarios en las ferias', va: 'Estands solidaris en les fires' },
    intro: {
      es: 'Las ferias son una oportunidad para hacer visible la labor de Cáritas, recaudar fondos y acercar a vecinos y visitantes distintas formas de colaboración.',
      va: 'Les fires són una oportunitat per a fer visible la labor de Càritas, recaptar fons i acostar a veïns i visitants diferents formes de col·laboració.'
    },
    blocks: [
      {
        image: '/assets/feria-solidaria.webp',
        alt: { es: 'Stand solidario de Cáritas con productos de Comercio Justo.', va: 'Estand solidari de Càritas amb productes de Comerç Just.' },
        title: { es: 'Un stand para encontrarnos', va: 'Un estand per a trobar-nos' },
        text: {
          es: 'En las ferias, Cáritas abre un espacio cercano donde informar, recaudar fondos y compartir formas sencillas de colaborar. En el stand pueden convivir artículos donados, rifas solidarias y la sección de Comercio Justo, siempre con el objetivo de sostener proyectos de ayuda y acercar la solidaridad a la calle.',
          va: 'En les fires, Càritas obri un espai pròxim on informar, recaptar fons i compartir formes senzilles de col·laborar. En l’estand poden conviure articles donats, rifes solidàries i la secció de Comerç Just, sempre amb l’objectiu de sostindre projectes d’ajuda i acostar la solidaritat al carrer.'
        }
      },
      {
        image: '/assets/fs2.webp',
        alt: { es: 'Stand de Cáritas Banyeres con productos solidarios, comercio justo y rifa.', va: 'Estand de Càritas Banyeres amb productes solidaris, comerç just i rifa.' },
        title: { es: 'Rifas, comercio justo y colaboración local', va: 'Rifes, comerç just i col·laboració local' },
        text: {
          es: 'En estos encuentros también se ofrecen papeletas para rifas solidarias y productos de Comercio Justo. Gracias a la implicación de artistas, comerciantes y vecinos, el stand se convierte en una forma sencilla de recaudar fondos y de mantener presentes los proyectos de ayuda de Cáritas en la vida del pueblo.',
          va: 'En estes trobades també s’ofereixen paperetes per a rifes solidàries i productes de Comerç Just. Gràcies a la implicació d’artistes, comerciants i veïns, l’estand es converteix en una forma senzilla de recaptar fons i de mantindre presents els projectes d’ajuda de Càritas en la vida del poble.'
        }
      }
    ]
  }

};

export const projectEvents = {
  'cena-del-hambre': [
    {
      slug: 'sopar-de-la-fam-2025',
      path: '/proyectos/cena-del-hambre/sopar-de-la-fam-2025',
      title: { es: 'Sopar de la Fam 2025', va: 'Sopar de la Fam 2025' },
      eyebrow: { es: '19 de septiembre · Maset dels Pirates', va: '19 de setembre · Maset dels Pirates' },
      summary: {
        es: 'Una velada comunitaria para apoyar el proyecto de ayuda en Ranchi y agradecer el compromiso de las familias que apadrinan.',
        va: 'Una vetlada comunitària per a donar suport al projecte d’ajuda a Ranchi i agrair el compromís de les famílies que apadrinen.'
      },
      cover: '/assets/sopar-fam-cartel-2025.webp'
    }
  ]
};

export const eventPages = [
  {
    slug: 'sopar-de-la-fam-2025',
    parentSlug: 'cena-del-hambre',
    hero: '/assets/sopar-fam-cartel-2025.webp',
    title: { es: 'Sopar de la Fam 2025', va: 'Sopar de la Fam 2025' },
    eyebrow: { es: 'Cena del hambre · 2025', va: 'Sopar de la fam · 2025' },
    intro: {
      es: 'Una noche sencilla, cercana y profundamente solidaria para sostener el proyecto de ayuda a nuestros niños y niñas en la India.',
      va: 'Una nit senzilla, pròxima i profundament solidària per a sostindre el projecte d’ajuda als nostres xiquets i xiquetes a l’Índia.'
    },
    blocks: [
      {
        image: '/assets/sopar-fam-2025-01.webp',
        alt: { es: 'Vista general del Sopar de la Fam 2025.', va: 'Vista general del Sopar de la Fam 2025.' },
        title: { es: 'Una velada compartida', va: 'Una vetlada compartida' },
        text: {
          es: 'El pasado Sopar de la Fam fue algo grande, y lo fue gracias a la presencia de jóvenes y mayores que, ambos por igual, tomaron parte en la iniciativa que organizamos cada año para dar soporte a nuestros niños y niñas en la India.',
          va: 'El passat Sopar de la Fam va ser molt gran, i ho va ser gràcies a la presència de joves i majors que, tots per igual, van prendre part en la iniciativa que organitzem cada any per a donar suport als nostres xiquets i xiquetes a l’Índia.'
        }
      },
      {
        image: '/assets/sopar-fam-2025-02.webp',
        alt: { es: 'Mesa compartida durante el Sopar de la Fam 2025.', va: 'Taula compartida durant el Sopar de la Fam 2025.' },
        title: { es: 'Ranchi, presente en la mesa', va: 'Ranchi, present a la taula' },
        text: {
          es: 'Fue una velada genial en la que juntos pudimos ponernos al día de la situación en Ranchi y la evolución que allí está aconteciendo gracias al aporte de las familias que apadrináis. Todo ello disfrutando de una modesta cena y una inmejorable compañía.',
          va: 'Va ser una vetlada genial en què junts poguérem posar-nos al dia de la situació a Ranchi i de l’evolució que allí està tenint lloc gràcies a l’aportació de les famílies que apadrineu. Tot això gaudint d’un sopar modest i d’una companyia immillorable.'
        }
      },
      {
        image: '/assets/sopar-fam-2025-03.webp',
        alt: { es: 'Asistentes reunidos en el Sopar de la Fam 2025.', va: 'Assistents reunits al Sopar de la Fam 2025.' },
        title: { es: 'Gracias por hacerlo posible', va: 'Gràcies per fer-ho possible' },
        text: {
          es: 'Contentos de haber podido contar con vuestra presencia y participación, os agradecemos de corazón todo el apoyo que brindáis a Cáritas y a su proyecto de ayuda en la India. ¡GRACIAS!',
          va: 'Contents d’haver pogut comptar amb la vostra presència i participació, vos agraïm de cor tot el suport que brindeu a Càritas i al seu projecte d’ajuda a l’Índia. GRÀCIES!'
        }
      }
    ]
  }
];
