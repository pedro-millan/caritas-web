export const languages = {
  es: 'Castellano',
  va: 'Valencià',
  ur: 'اردو',
  en: 'English'
};

export const navItems = [
  { label: { es: 'Inicio', va: 'Inici', ur: 'ہوم', en: 'Home' }, path: '/' },
  { label: { es: 'Nuestra causa', va: 'La nostra causa', ur: 'ہمارا مقصد', en: 'Our cause' }, path: '/nuestra-causa' },
  {
    label: { es: 'Proyectos', va: 'Projectes', ur: 'منصوبے', en: 'Projects' },
    path: '/proyectos',
    children: [
      { label: { es: 'Ranchi · India', va: 'Ranchi · Índia', ur: 'رانچی · بھارت', en: 'Ranchi · India' }, path: '/proyectos/ranchi-india' },
      { label: { es: 'Que nadie pase frío', va: 'Que ningú passe fred', ur: 'کوئی سردی میں نہ رہے', en: 'No one should be left in the cold' }, path: '/proyectos/que-nadie-pase-frio' },
      { label: { es: 'Ropero', va: 'Rober', ur: 'لباس گھر', en: 'Clothing bank' }, path: '/proyectos/ropero' },
      { label: { es: 'Cena del hambre', va: 'Sopar de la fam', ur: 'بھوک کا عشائیہ', en: 'Hunger dinner' }, path: '/proyectos/cena-del-hambre' },
      { label: { es: 'Comercio Justo', va: 'Comerç Just', ur: 'منصفانہ تجارت', en: 'Fair Trade' }, path: '/proyectos/comercio-justo' },
      { label: { es: 'Ferias Solidarias', va: 'Fires Solidàries', ur: 'یکجہتی میلے', en: 'Solidarity fairs' }, path: '/proyectos/ferias-solidarias' }
    ]
  },
  { label: { es: 'Colabora', va: 'Col·labora', ur: 'تعاون کریں', en: 'Get involved' }, path: '/colabora' },
  { label: { es: 'Noticias', va: 'Notícies', ur: 'خبریں', en: 'News' }, path: '/noticias' },
  { label: { es: 'Contacto', va: 'Contacte', ur: 'رابطہ', en: 'Contact' }, path: '/contacto' }
];

export const pages = {
  home: {
    path: '/',
    hero: '/assets/hero-inicio.webp',
    title: { es: 'Cáritas Parroquial Banyeres de Mariola', va: 'Càritas Parroquial Banyeres de Mariola', ur: 'کاریتاس پیریشیل بانیریس دے مریولا', en: 'Cáritas Parroquial Banyeres de Mariola' },
    intro: {

    }
  },
  cause: {
    path: '/nuestra-causa',
    hero: '/assets/hero-nuestracausa.webp',
    title: { es: 'Nuestra causa', va: 'La nostra causa', ur: 'ہمارا مقصد', en: 'Our cause' },
    intro: {}
  },
  projects: {
    path: '/proyectos',
    hero: '/assets/hero-proyectos.webp',
    title: { es: 'Proyectos', va: 'Projectes', ur: 'منصوبے', en: 'Projects' },
    intro: {
      es: 'Cada campaña nace de una necesidad concreta: abrigo, alimentación, ropa, sensibilización, cooperación internacional o comercio responsable.',
      va: 'Cada campanya naix d’una necessitat concreta: abric, alimentació, roba, sensibilització, cooperació internacional o comerç responsable.',
      ur: 'ہر مہم ایک ٹھوس ضرورت سے جنم لیتی ہے: سردی سے بچاؤ، خوراک، لباس، آگاہی، بین الاقوامی تعاون یا ذمہ دارانہ تجارت۔',
      en: 'Every campaign is born from a concrete need: warmth, food, clothing, awareness, international cooperation or responsible trade.'
    }
  },
  collaborate: {
    path: '/colabora',
    hero: '/assets/hero-colabora.webp',
    title: { es: 'Colabora', va: 'Col·labora', ur: 'تعاون کریں', en: 'Get involved' },
    intro: {
      es: 'Puedes colaborar con tiempo, alimentos, ropa en buen estado, difusión o aportaciones económicas destinadas a los proyectos sociales de Cáritas Banyeres.',
      va: 'Pots col·laborar amb temps, aliments, roba en bon estat, difusió o aportacions econòmiques destinades als projectes socials de Càritas Banyeres.',
      ur: 'آپ اپنا وقت، خوراک، اچھی حالت میں لباس، تشہیر یا مالی تعاون دے کر کاریتاس بانیریس کے سماجی منصوبوں میں مدد کر سکتے ہیں۔',
      en: 'You can help with your time, food, clothing in good condition, spreading the word, or financial contributions to Cáritas Banyeres’ social projects.'
    }
  },
  news: {
    path: '/noticias',
    hero: '/assets/hero-noticias.webp',
    title: { es: 'Noticias', va: 'Notícies', ur: 'خبریں', en: 'News' },
    intro: {
      es: 'Un espacio para compartir avisos, campañas, actividades solidarias y pequeñas noticias de la vida comunitaria de Cáritas Banyeres.',
      va: 'Un espai per a compartir avisos, campanyes, activitats solidàries i xicotetes notícies de la vida comunitària de Càritas Banyeres.',
      ur: 'اعلانات، مہمات، یکجہتی کی سرگرمیاں اور کاریتاس بانیریس کی کمیونٹی زندگی کی چھوٹی خبریں شیئر کرنے کی جگہ۔',
      en: 'A space to share notices, campaigns, solidarity activities and small stories from Cáritas Banyeres’ community life.'
    }
  },
  contact: {
    path: '/contacto',
    hero: '/assets/hero-contacto(1).webp',
    title: { es: 'Contacto', va: 'Contacte', ur: 'رابطہ', en: 'Contact' },
    intro: {
      es: 'Si necesitas ayuda, quieres colaborar o deseas más información, puedes escribirnos mediante este formulario. El mensaje llegará directamente al correo de Cáritas Banyeres.',
      va: 'Si necessites ajuda, vols col·laborar o desitges més informació, pots escriure’ns mitjançant este formulari. El missatge arribarà directament al correu de Càritas Banyeres.',
      ur: 'اگر آپ کو مدد کی ضرورت ہے، تعاون کرنا چاہتے ہیں یا مزید معلومات چاہتے ہیں تو یہ فارم بھر کر ہمیں لکھ سکتے ہیں۔ پیغام براہ راست کاریتاس بانیریس کے ای میل پر پہنچے گا۔',
      en: 'If you need help, want to get involved, or would like more information, you can write to us using this form. Your message will go straight to the Cáritas Banyeres inbox.'
    }
  },
  privacy: {
    path: '/politica-de-privacidad',
    hero: '/assets/privacidad.webp',
    title: { es: 'Política de Privacidad', va: 'Política de Privacitat', ur: 'رازداری کی پالیسی', en: 'Privacy Policy' },
    intro: {
      es: 'Tratamos la información de contacto con discreción y únicamente para responder a la solicitud recibida.',
      va: 'Tractem la informació de contacte amb discreció i únicament per a respondre a la sol·licitud rebuda.',
      ur: 'ہم رابطے کی معلومات کو راز داری کے ساتھ اور صرف موصولہ درخواست کا جواب دینے کے لیے استعمال کرتے ہیں۔',
      en: 'We handle contact information with discretion and use it solely to respond to the request received.'
    }
  }
};

export const projectPages = [
  {
    slug: 'ranchi-india',
    hero: '/assets/hero-ranchiindia.webp',
    title: { es: 'Ranchi · India', va: 'Ranchi · Índia', ur: 'رانچی · بھارت', en: 'Ranchi · India' },
    intro: {
      es: 'Un proyecto de solidaridad internacional que nos recuerda que la ayuda no entiende de fronteras cuando se trata de dignidad, infancia y oportunidades.',
      va: 'Un projecte de solidaritat internacional que ens recorda que l’ajuda no entén de fronteres quan es tracta de dignitat, infància i oportunitats.',
      ur: 'بین الاقوامی یکجہتی کا ایک منصوبہ جو ہمیں یاد دلاتا ہے کہ جب بات وقار، بچپن اور مواقع کی ہو تو مدد کی کوئی سرحد نہیں ہوتی۔',
      en: 'An international solidarity project that reminds us help knows no borders when it comes to dignity, childhood and opportunity.'
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
      ],
      ur: [
        '## رانچی، بھارت: ایک ایسی قربانی کی کہانی جو جاری ہے',
        'کئی برسوں تک، بانیریس دے مریولا کی رہنے والی مشنری بہن تیرے فیرے نے اپنی زندگی رانچی، بھارت کے سب سے ضرورت مند بچوں کی خدمت کے لیے وقف کر دی۔ ان کا کام محض عارضی مدد نہیں تھا: یہ ایک مستقل، قریبی اور انتہائی انسانی موجودگی تھی ان لوگوں کے لیے جو شدید کمزور حالات میں زندگی گزار رہے تھے۔',
        'وہاں سے، تیرے فیرے نے ایسے منصوبے شروع کیے جو ضرورت مند لڑکیوں کی تعلیم، دیکھ بھال اور تحفظ پر مرکوز تھے، اور ان لوگوں کو حقیقی مواقع فراہم کیے جن کے لیے حالات سب سے زیادہ مشکل تھے۔ ان کا کام لڑکیوں کے لیے ایک رہائش گاہ اور ایک درمانگاہ سے جڑا تھا، جہاں سے کمسن بچوں اور ضرورت مند خاندانوں کا ساتھ دیا جاتا، خیال رکھا جاتا اور سہارا دیا جاتا تھا۔ ان کی لگن کی بدولت، بہت سی لڑکیاں زیادہ باوقار زندگی، زیادہ تحفظ، توجہ اور امید حاصل کر سکیں۔',
        'اگرچہ آج تیرے فیرے بھارت میں براہ راست اپنا مشن جاری نہیں رکھ سکتیں، لیکن ان کا نقش زندہ ہے۔ اس کام نے رانچی اور بانیریس دے مریولا کے درمیان ایک گہرا رشتہ قائم کیا، یکجہتی کا ایک پل جسے کاریتاس آج بھی محبت، ذمہ داری اور عزم کے ساتھ برقرار رکھے ہوئے ہے۔',
        'اس وقت، کاریتاس بانیریس ہمارے قصبے کے خاندانوں کی کفالت کے ذریعے رانچی کے سب سے ضرورت مند بچوں کی مدد جاری رکھے ہوئے ہے۔ یہ مالی تعاون ان کی تعلیم، بنیادی ضروریات اور ذاتی نشوونما میں تعاون جاری رکھنے کی اجازت دیتا ہے، اور اس مدد کے جذبے کو زندہ رکھتا ہے جسے تیرے فیرے نے اتنے برسوں میں پروان چڑھایا۔',
        'رانچی صرف ایک دور دراز منصوبہ نہیں ہے۔ یہ ایمان، سخاوت اور امید کی ایک مشترکہ کہانی ہے۔ یہ اس مشنری کی شکرگزار یاد ہے جس نے اپنی زندگی دوسروں کی خدمت کے لیے وقف کر دی، اور ساتھ ہی ان تمام لوگوں کا موجودہ عزم بھی ہے جو بانیریس دے مریولا سے یہ ممکن بناتے رہتے ہیں کہ یہ مدد وہاں پہنچے جہاں اس کی سب سے زیادہ ضرورت ہے۔'
      ],
      en: [
        '## Ranchi, India: a story of devotion that continues',
        'For years, Sister Tere Ferre, a missionary born in Banyeres de Mariola, dedicated her life to serving the most vulnerable children in Ranchi, India. Her work was far more than occasional help: it was a constant, close and deeply human presence for those living in highly vulnerable situations.',
        'From there, Tere Ferre drove projects focused on the education, care and protection of disadvantaged girls, offering real opportunities to those who had it hardest. Her work was linked to a residence for girls and a dispensary, spaces from which children and families in need were accompanied, cared for and supported. Thanks to her dedication, many girls were able to access a more dignified life, with greater security, attention and hope.',
        'Although Tere Ferre can no longer continue her mission in person in India today, her mark remains alive. That work sowed a deep bond between Ranchi and Banyeres de Mariola, a bridge of solidarity that Cáritas continues to maintain with care, responsibility and commitment.',
        'Today, Cáritas Banyeres continues to support the most vulnerable children of Ranchi through sponsorships taken on by families from our town. These financial contributions help fund their education, basic needs and personal development, keeping alive the spirit of help that Tere Ferre nurtured for so many years.',
        'Ranchi is not just a distant project. It is a shared story of faith, generosity and hope. It is the grateful memory of a missionary who gave her life to the service of others, and also the present commitment of all the people who, from Banyeres de Mariola, keep making it possible for that help to reach where it is needed most.'
      ]
    }
  },
  {
    slug: 'que-nadie-pase-frio',
    hero: '/assets/hero-quenadiepasefrio.webp',
    title: { es: 'Que nadie pase frío', va: 'Que ningú passe fred', ur: 'کوئی سردی میں نہ رہے', en: 'No one should be left in the cold' },
    intro: {
      es: 'Una campaña de recogida y reparto de ropa de abrigo, mantas y recursos básicos para acompañar a quienes afrontan el invierno con menos medios.',
      va: 'Una campanya de recollida i repartiment de roba d’abric, mantes i recursos bàsics per a acompanyar qui afronta l’hivern amb menys mitjans.',
      ur: 'گرم کپڑوں، کمبلوں اور بنیادی وسائل کو اکٹھا کرنے اور تقسیم کرنے کی ایک مہم، ان لوگوں کا ساتھ دینے کے لیے جو کم وسائل کے ساتھ سردیوں کا سامنا کرتے ہیں۔',
      en: 'A campaign to collect and distribute warm clothing, blankets and basic supplies to support those facing winter with fewer resources.'
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
      ],
      ur: [
        'سردی بہت سی کمزور صورتحال کو مزید سنگین بنا دیتی ہے اور نہایت سادہ اقدامات کو ایک انتہائی ضروری مدد میں بدل دیتی ہے۔ اسی لیے "کوئی سردی میں نہ رہے" مہم کا مقصد گرم کپڑے، کمبل، مفید ٹیکسٹائل اور بنیادی وسائل اکٹھا کرنا ہے تاکہ کوئی بھی شخص یا خاندان سردیوں کا سامنا بغیر تحفظ کے نہ کرے۔',
        'ہر عطیے کا بغور جائزہ لیا جاتا ہے اور احتیاط سے تیار کیا جاتا ہے، اچھی حالت میں، صاف اور واقعی مفید اشیاء کو ترجیح دی جاتی ہے۔ مقصد صرف ایک مادی ضرورت پوری کرنا نہیں، بلکہ اسے وقار، احترام اور قربت کے ساتھ کرنا ہے جو کاریتاس بانیریس کے کام کی رہنمائی کرتی ہے۔',
        'مقامی لوگوں کا تعاون ٹھوس حالات کا فوری جواب دینے کی اجازت دیتا ہے: کسی سرد گھر کے لیے ایک کمبل، ضرورت مند شخص کے لیے ایک گرم کوٹ، بچوں کے لیے گرم کپڑے یا مشکل وقت سے گزرنے والے خاندانوں کے لیے بنیادی ٹیکسٹائل۔'
      ],
      en: [
        'Cold weather worsens many situations of vulnerability and turns very simple gestures into deeply needed help. That is why the “No one should be left in the cold” campaign works to gather warm clothing, blankets, useful textiles and basic supplies so that no person or family faces winter unprotected.',
        'Every donation is carefully checked and prepared, prioritising items that are in good condition, clean and genuinely useful. The goal is not just to meet a material need, but to do so from the dignity, respect and closeness that guide the work of Cáritas Banyeres.',
        'Neighbourhood collaboration makes it possible to respond quickly to specific situations: a blanket for a cold home, a coat for someone who needs it, thermal clothing for children, or basic textiles for families going through a difficult time.'
      ]
    }
  },
  {
    slug: 'ropero',
    hero: '/assets/hero-ropero.webp',
    title: { es: 'Ropero', va: 'Rober', ur: 'لباس گھر', en: 'Clothing bank' },
    intro: {
      es: 'El ropero solidario organiza prendas y textiles para que lleguen a personas y familias que los necesitan, cuidando siempre la dignidad de quien recibe.',
      va: 'El rober solidari organitza peces i tèxtils perquè arriben a persones i famílies que els necessiten, cuidant sempre la dignitat de qui rep.',
      ur: 'یکجہتی لباس گھر کپڑوں اور ٹیکسٹائل کو منظم کرتا ہے تاکہ وہ ضرورت مند افراد اور خاندانوں تک پہنچیں، وصول کرنے والے کے وقار کا ہمیشہ خیال رکھتے ہوئے۔',
      en: 'The solidarity clothing bank sorts clothes and textiles so they reach people and families who need them, always caring for the dignity of those who receive them.'
    },
    body: {
      es: ['', ''],
      va: ['', ''],
      ur: ['', ''],
      en: ['', '']
    }
  },
  {
    slug: 'cena-del-hambre',
    hero: '/assets/hero-cenadelhambre.webp',
    title: { es: 'Cena del hambre', va: 'Sopar de la fam', ur: 'بھوک کا عشائیہ', en: 'Hunger dinner' },
    intro: {
      es: 'Una actividad solidaria y comunitaria que invita a reunirse con sencillez, tomar conciencia y apoyar proyectos sociales.',
      va: 'Una activitat solidària i comunitària que convida a reunir-se amb senzillesa, prendre consciència i donar suport a projectes socials.',
      ur: 'ایک یکجہتی اور کمیونٹی سرگرمی جو سادگی سے اکٹھے ہونے، آگاہی حاصل کرنے اور سماجی منصوبوں کی حمایت کرنے کی دعوت دیتی ہے۔',
      en: 'A community solidarity activity that invites people to gather simply, raise awareness and support social projects.'
    },
    body: {}
  },
  {
    slug: 'comercio-justo',
    hero: '/assets/hero-comerciojusto.webp',
    title: { es: 'Comercio Justo', va: 'Comerç Just', ur: 'منصفانہ تجارت', en: 'Fair Trade' },
    intro: {
      es: 'Promovemos una forma de consumo más consciente, responsable y respetuosa con las personas que producen y con el entorno.',
      va: 'Promovem una forma de consum més conscient, responsable i respectuosa amb les persones que produeixen i amb l’entorn.',
      ur: 'ہم ایسا طرزِ استعمال فروغ دیتے ہیں جو زیادہ باشعور، ذمہ دارانہ اور پیداوار کرنے والوں اور ماحول کا احترام کرنے والا ہو۔',
      en: 'We promote a more conscious, responsible way of consuming that respects both the people who produce goods and the environment.'
    },
    body: {}
  },
  {
    slug: 'ferias-solidarias',
    hero: '/assets/hero-feriassolidarias.webp',
    title: { es: 'Ferias Solidarias', va: 'Fires Solidàries', ur: 'یکجہتی میلے', en: 'Solidarity fairs' },
    intro: {
      es: 'Espacios de encuentro donde la comunidad participa, dona, compra y contribuye a sostener proyectos de ayuda local y cooperación.',
      va: 'Espais de trobada on la comunitat participa, dona, compra i contribueix a sostindre projectes d’ajuda local i cooperació.',
      ur: 'ملاقات کی جگہیں جہاں کمیونٹی حصہ لیتی ہے، عطیہ دیتی ہے، خریداری کرتی ہے اور مقامی امدادی و تعاون کے منصوبوں کو برقرار رکھنے میں مدد دیتی ہے۔',
      en: 'Meeting spaces where the community takes part, donates, buys and helps sustain local aid and cooperation projects.'
    },
    body: {
      es: [

      ],
      va: [

      ],
      ur: [

      ],
      en: [

      ]
    }
  }
];

export const highlights = [
  {
    title: { es: 'Acogida', va: 'Acollida', ur: 'استقبال', en: 'Welcome' },
    image: '/assets/home-acogida.webp',
    text: {
      es: 'Escucha inicial y orientación cercana para comprender cada situación con respeto y discreción.',
      va: 'Escolta inicial i orientació pròxima per a comprendre cada situació amb respecte i discreció.',
      ur: 'ہر صورتحال کو احترام اور رازداری کے ساتھ سمجھنے کے لیے ابتدائی سماعت اور قریبی رہنمائی۔',
      en: 'Initial listening and close guidance to understand each situation with respect and discretion.'
    }
  },
  {
    title: { es: 'Acompañamiento', va: 'Acompanyament', ur: 'ساتھ دینا', en: 'Support' },
    image: '/assets/home-acompanamiento.webp',
    text: {
      es: 'Seguimiento humano, cercano y adaptado al proceso de cada persona o familia, abasteciendo con enseres de primera necesidad siempre que nos es posible.',
      va: 'Seguiment humà, pròxim i adaptat al procés de cada persona o família, abastint amb útils de primera necessitat sempre que ens es possible.',
      ur: 'ہر فرد یا خاندان کے عمل کے مطابق انسانی، قریبی پیروی، اور جب بھی ممکن ہو بنیادی ضرورت کی اشیاء کی فراہمی۔',
      en: 'Human, close follow-up adapted to each person’s or family’s process, providing essential items whenever we can.'
    }
  },
  {
    title: { es: 'Comunidad', va: 'Comunitat', ur: 'کمیونٹی', en: 'Community' },
    image: '/assets/home-comunidad.webp',
    text: {
      es: 'Voluntariado y colaboración vecinal para transformar pequeños gestos en esperanza compartida.',
      va: 'Voluntariat i col·laboració veïnal per a transformar xicotets gestos en esperança compartida.',
      ur: 'چھوٹے اقدامات کو مشترکہ امید میں بدلنے کے لیے رضاکارانہ خدمت اور مقامی لوگوں کا تعاون۔',
      en: 'Volunteering and neighbourhood collaboration to turn small gestures into shared hope.'
    }
  }
];

export const causeBlocks = [
  {
    title: { es: 'Acogida y orientación', va: 'Acollida i orientació', ur: 'استقبال اور رہنمائی', en: 'Welcome and guidance' },
    image: '/assets/acogida-y-orientacion.webp',
    text: {
      es: 'La primera ayuda empieza escuchando. Acogemos cada situación con respeto, discreción y cercanía para comprender qué necesita la persona o familia y orientar los siguientes pasos.',
      va: 'La primera ajuda comença escoltant. Acollim cada situació amb respecte, discreció i proximitat per a comprendre què necessita la persona o família i orientar els següents passos.',
      ur: 'پہلی مدد سننے سے شروع ہوتی ہے۔ ہم ہر صورتحال کا استقبال احترام، رازداری اور قربت کے ساتھ کرتے ہیں تاکہ سمجھ سکیں کہ فرد یا خاندان کو کیا ضرورت ہے اور اگلے قدم کی رہنمائی کر سکیں۔',
      en: 'The first help begins by listening. We welcome every situation with respect, discretion and closeness in order to understand what the person or family needs and guide the next steps.'
    }
  },
  {
    title: { es: 'Ropero solidario', va: 'Rober solidari', ur: 'یکجہتی لباس گھر', en: 'Solidarity clothing bank' },
    image: '/assets/ropero-solidario.webp',
    text: {
      es: 'Clasificamos y preparamos ropa limpia y en buen estado para que llegue de forma digna a quienes la necesitan, atendiendo también a las necesidades de cada temporada.',
      va: 'Classifiquem i preparem roba neta i en bon estat perquè arribe de forma digna a qui la necessita, atenent també les necessitats de cada temporada.',
      ur: 'ہم صاف اور اچھی حالت میں کپڑوں کو ترتیب دیتے اور تیار کرتے ہیں تاکہ وہ باوقار طریقے سے ضرورت مندوں تک پہنچیں، ہر موسم کی ضروریات کا خیال رکھتے ہوئے۔',
      en: 'We sort and prepare clean clothing in good condition so it reaches those who need it in a dignified way, also taking each season’s needs into account.'
    }
  },
  {
    title: { es: 'Campañas de alimentos', va: 'Campanyes d’aliments', ur: 'خوراک کی مہمات', en: 'Food campaigns' },
    image: '/assets/campanas-de-alimentos.webp',
    text: {
      es: 'Las recogidas y repartos de alimentos permiten responder a necesidades básicas con productos útiles, cuidando siempre la organización y el seguimiento de cada caso.',
      va: 'Les recollides i repartiments d’aliments permeten respondre a necessitats bàsiques amb productes útils, cuidant sempre l’organització i el seguiment de cada cas.',
      ur: 'خوراک اکٹھا کرنے اور تقسیم کرنے سے مفید اشیاء کے ذریعے بنیادی ضروریات پوری کی جاتی ہیں، ہر معاملے کی تنظیم اور پیروی کا ہمیشہ خیال رکھتے ہوئے۔',
      en: 'Food collections and distributions help meet basic needs with useful products, always taking care to organise and follow up on each case.'
    }
  },
  {
    title: { es: 'Sensibilización comunitaria', va: 'Sensibilització comunitària', ur: 'کمیونٹی آگاہی', en: 'Community awareness' },
    image: '/assets/sensibilizacion-comunitaria.webp',
    text: {
      es: 'La ayuda también consiste en mirar alrededor. Promovemos campañas y actividades que recuerdan que la pobreza, la soledad y la exclusión son realidades cercanas que podemos afrontar juntos.',
      va: 'L’ajuda també consisteix a mirar al voltant. Promovem campanyes i activitats que recorden que la pobresa, la soledat i l’exclusió són realitats pròximes que podem afrontar junts.',
      ur: 'مدد کا مطلب اپنے اردگرد دیکھنا بھی ہے۔ ہم ایسی مہمات اور سرگرمیاں چلاتے ہیں جو یاد دلاتی ہیں کہ غربت، تنہائی اور اخراج ہمارے قریب کی حقیقتیں ہیں جن کا ہم مل کر مقابلہ کر سکتے ہیں۔',
      en: 'Helping also means looking around us. We run campaigns and activities that remind us poverty, loneliness and exclusion are close realities we can face together.'
    }
  },
  {
    title: { es: 'Cooperación y comercio justo', va: 'Cooperació i comerç just', ur: 'تعاون اور منصفانہ تجارت', en: 'Cooperation and fair trade' },
    image: '/assets/cooperacion-y-comerciojusto.webp',
    text: {
      es: 'Impulsamos una solidaridad que mira más allá de lo inmediato: cooperación, consumo responsable y apoyo a proyectos donde la dignidad de las personas está en el centro.',
      va: 'Impulsem una solidaritat que mira més enllà de l’immediat: cooperació, consum responsable i suport a projectes on la dignitat de les persones està al centre.',
      ur: 'ہم ایسی یکجہتی کو فروغ دیتے ہیں جو فوری ضرورت سے آگے دیکھتی ہے: تعاون، ذمہ دارانہ استعمال اور ایسے منصوبوں کی حمایت جہاں انسانی وقار مرکز میں ہو۔',
      en: 'We foster a kind of solidarity that looks beyond the immediate: cooperation, responsible consumption, and support for projects that put people’s dignity at the centre.'
    }
  },
  {
    title: { es: 'Acompañamiento familiar', va: 'Acompanyament familiar', ur: 'خاندانی ساتھ', en: 'Family support' },
    image: '/assets/acompanamiento-familiar.webp',
    text: {
      es: 'Cuando una familia atraviesa un momento difícil, el apoyo no termina en una ayuda puntual. Caminamos junto a las personas para favorecer procesos de estabilidad y esperanza.',
      va: 'Quan una família travessa un moment difícil, el suport no acaba en una ajuda puntual. Caminem al costat de les persones per a afavorir processos d’estabilitat i esperança.',
      ur: 'جب کوئی خاندان مشکل وقت سے گزرتا ہے تو تعاون صرف عارضی مدد پر ختم نہیں ہوتا۔ ہم لوگوں کے ساتھ چلتے ہیں تاکہ استحکام اور امید کے عمل کو فروغ دیں۔',
      en: 'When a family goes through a difficult time, support doesn’t end with a one-off gesture. We walk alongside people to help build stability and hope.'
    }
  }
];

export const collaborateBlocks = [
  {
    title: { es: 'Donativos de enseres', va: 'Donatius d’estris', ur: 'سامان کے عطیات', en: 'Household item donations' },
    image: '/assets/donacion-enseres.webp',
    text: {
      es: 'A menudo hacen falta colchones, camas, armarios, mesas y otros elementos básicos de uso cotidiano. Si tienes enseres en buen estado, contacta antes con nosotros para valorar la necesidad y coordinar la entrega.',
      va: 'Sovint fan falta matalassos, llits, armaris, taules i altres elements bàsics d’ús quotidià. Si tens estris en bon estat, contacta abans amb nosaltres per a valorar la necessitat i coordinar l’entrega.',
      ur: 'اکثر گدے، بستر، الماریاں، میزیں اور روزمرہ استعمال کی دیگر بنیادی اشیاء درکار ہوتی ہیں۔ اگر آپ کے پاس اچھی حالت میں سامان ہے تو ضرورت جانچنے اور ترسیل کی ترتیب دینے کے لیے پہلے ہم سے رابطہ کریں۔',
      en: 'Mattresses, beds, wardrobes, tables and other everyday essentials are often needed. If you have items in good condition, please contact us first so we can assess the need and arrange delivery.'
    }
  },
  {
    title: { es: 'Aporta tu granito', va: 'Aporta el teu granet', ur: 'اپنا حصہ ڈالیں', en: 'Lend a hand' },
    image: '/assets/aporta-tu-granito.webp',
    text: {
      es: 'Cualquier persona puede ayudar con sus habilidades: comunicación, organización, transporte, talleres, escucha, mantenimiento o apoyo puntual. Escríbenos y veremos cómo puedes encajar y servir mejor a la causa.',
      va: 'Qualsevol persona pot ajudar amb les seues habilitats: comunicació, organització, transport, tallers, escolta, manteniment o suport puntual. Escriu-nos i veurem com pots encaixar i servir millor a la causa.',
      ur: 'کوئی بھی شخص اپنی صلاحیتوں سے مدد کر سکتا ہے: رابطہ کاری، انتظام، نقل و حمل، ورکشاپس، سننا، دیکھ بھال یا عارضی تعاون۔ ہمیں لکھیں اور ہم دیکھیں گے کہ آپ کس طرح بہترین طور پر اس مقصد کی خدمت کر سکتے ہیں۔',
      en: 'Anyone can help using their own skills: communication, organisation, transport, workshops, listening, maintenance or occasional support. Write to us and we’ll see how you can best fit in and serve the cause.'
    }
  },
  {
    title: { es: 'Donación económica', va: 'Donació econòmica', ur: 'مالی عطیہ', en: 'Financial donation' },
    image: '/assets/donacion-economica.webp',
    text: {
      es: 'Si no puedes colaborar de otra manera, el apoyo económico siempre es bienvenido. Cada aportación ayuda a sostener campañas, necesidades urgentes y acciones de acompañamiento social.',
      va: 'Si no pots col·laborar d’una altra manera, el suport econòmic sempre és benvingut. Cada aportació ajuda a sostindre campanyes, necessitats urgents i accions d’acompanyament social.',
      ur: 'اگر آپ کسی اور طریقے سے تعاون نہیں کر سکتے تو مالی مدد ہمیشہ خوش آئند ہے۔ ہر تعاون مہمات، فوری ضروریات اور سماجی مدد کے اقدامات کو برقرار رکھنے میں مدد دیتا ہے۔',
      en: 'If you can’t help in any other way, financial support is always welcome. Every contribution helps sustain campaigns, urgent needs and social support work.'
    }
  },
  {
    title: { es: 'Donación de ropa', va: 'Donació de roba', ur: 'کپڑوں کا عطیہ', en: 'Clothing donation' },
    image: '/assets/donacion-ropa.webp',
    text: {
      es: 'Puedes donar ropa mediante el contenedor situado en nuestro ropero solidario, en la calle Francisco Berenguer Mora, en los bajos del mercado. Rogamos que esté limpia y en buen estado.',
      va: 'Pots donar roba mitjançant el contenidor situat en el nostre rober solidari, al carrer Francisco Berenguer Mora, als baixos del mercat. Preguem que estiga neta i en bon estat.',
      ur: 'آپ ہمارے یکجہتی لباس گھر میں رکھے کنٹینر کے ذریعے کپڑے عطیہ کر سکتے ہیں، جو کہ سٹریٹ فرانسسکو بیرنگیر مورا میں، مارکیٹ کی نچلی منزل پر واقع ہے۔ براہ کرم کپڑے صاف اور اچھی حالت میں ہوں۔',
      en: 'You can donate clothing via the container at our solidarity clothing bank, on Calle Francisco Berenguer Mora, on the ground floor of the market. Please make sure items are clean and in good condition.'
    }
  }
];

export const newsItems = [
  {
    slug: 'feria-mercado-tradicional-santa-maria-magdalena',
    path: '/noticias/feria-mercado-tradicional-santa-maria-magdalena',
    title: {
      es: 'Feria y Mercado Tradicional de Santa María Magdalena',
      va: 'Fira i Mercat Tradicional de Santa Maria Magdalena',
      ur: 'سانتا ماریا مگدالینا کا روایتی میلہ اور بازار',
      en: 'Santa María Magdalena Traditional Fair and Market'
    },
    date: { es: '11 y 12 de julio', va: '11 i 12 de juliol', ur: '11 اور 12 جولائی', en: 'July 11–12' },
    cover: '/assets/fm1.webp',
    text: {
      es: 'Banyeres de Mariola vuelve a celebrar su feria tradicional con artesanía, cultura popular y un espacio solidario en el que Cáritas estará presente.',
      va: 'Banyeres de Mariola torna a celebrar la seua fira tradicional amb artesania, cultura popular i un espai solidari en què Càritas estarà present.',
      ur: 'بانیریس دے مریولا ایک بار پھر دستکاری، عوامی ثقافت اور یکجہتی کی جگہ کے ساتھ اپنا روایتی میلہ منا رہا ہے، جہاں کاریتاس بھی موجود ہوگا۔',
      en: 'Banyeres de Mariola once again celebrates its traditional fair with crafts, popular culture and a solidarity space where Cáritas will be present.'
    }
  },

  {
    slug: 'ganadores-rifa-santa-maria-magdalena',
    path: '/noticias/ganadores-rifa-santa-maria-magdalena',
    title: {
      es: 'Ganadores de la rifa por motivo de la festividad en honor a Santa María Magdalena',
      va: 'Guanyadors de la rifa per motiu de la festivitat en honor a Santa María Magdalena',
      ur: 'سانتا ماریا مگدالینا کے تہوار کے موقع پر لاٹری کے فاتحین',
      en: 'Winners of the raffle for the Santa María Magdalena festivity'
    },
    date: { es: '16 de agosto', va: '16 d´agost', ur: '16 اگست', en: 'August 16' },
    cover: '/assets/rifa2.webp',
    text: {
      es: 'Conoce a los tres afortunados que se llevaron premios de la rifa.',
      va: 'Coneix als tres afortunats que es van emportar premis de la rifa.',
      ur: 'ان تین خوش قسمت افراد کو جانیں جنہوں نے لاٹری کے انعامات جیتے۔',
      en: 'Meet the three lucky winners who took home raffle prizes.'
    }
  },

  {
    slug: 'sopar-de-la-fam-2026',
    path: '/noticias/sopar-de-la-fam-2026',
    title: {
      es: 'Sopar de la Fam 2026',
      va: 'Sopar de la Fam 2026',
      ur: 'سوپار دے لا فام 2026',
      en: 'Sopar de la Fam 2026'
    },
    date: { es: '18 de septiembre', va: '18 de setembre', ur: '18 ستمبر', en: 'September 18' },
    cover: '/assets/sopar-2026.webp',
    text: {
      es: 'El próximo viernes 18 de septiembre celebramos el Sopar de la Fam 2026 en el Maset dels Maseros, a beneficio de los proyectos de Tere Ferre en Ranchi.',
      va: 'El pròxim divendres 18 de setembre celebrem el Sopar de la Fam 2026 al Maset dels Maseros, a benefici dels projectes de Tere Ferre a Ranchi.',
      ur: 'اگلے جمعہ، 18 ستمبر کو ہم ماسیت دیلس ماسیروس میں سوپار دے لا فام 2026 منا رہے ہیں، جس کے فوائد رانچی میں تیرے فیرے کے منصوبوں کی مدد کے لیے جائیں گے۔',
      en: 'Next Friday, September 18, we’re holding Sopar de la Fam 2026 at Maset dels Maseros, in support of Tere Ferre’s projects in Ranchi.'
    }
  }

];

export const newsPages = [
  {
    slug: 'feria-mercado-tradicional-santa-maria-magdalena',
    hero: '/assets/fm1.webp',
    title: {
      es: 'Feria y Mercado Tradicional de Santa María Magdalena',
      va: 'Fira i Mercat Tradicional de Santa Maria Magdalena',
      ur: 'سانتا ماریا مگدالینا کا روایتی میلہ اور بازار',
      en: 'Santa María Magdalena Traditional Fair and Market'
    },
    eyebrow: { es: 'Noticias · Banyeres de Mariola', va: 'Notícies · Banyeres de Mariola', ur: 'خبریں · بانیریس دے مریولا', en: 'News · Banyeres de Mariola' },
    intro: {
      es: 'Cultura, tradición y solidaridad se encuentran en una cita abierta a vecinos, visitantes y familias.',
      va: 'Cultura, tradició i solidaritat es troben en una cita oberta a veïns, visitants i famílies.',
      ur: 'ثقافت، روایت اور یکجہتی ایک ایسے موقع پر اکٹھے ہوتے ہیں جو مقامی افراد، مہمانوں اور خاندانوں کے لیے کھلا ہے۔',
      en: 'Culture, tradition and solidarity come together at an event open to locals, visitors and families.'
    },
    blocks: [
      {
        image: '/assets/fm1.webp',
        alt: { es: 'Cartel de Santa María Magdalena 2026.', va: 'Cartell de Santa Maria Magdalena 2026.', ur: 'سانتا ماریا مگدالینا 2026 کا پوسٹر۔', en: 'Santa María Magdalena 2026 poster.' },
        title: { es: 'Una cita con la tradición', va: 'Una cita amb la tradició', ur: 'روایت کے ساتھ ایک ملاقات', en: 'A date with tradition' },
        text: {
          es: 'Cada mes de julio, Banyeres de Mariola rinde homenaje a su patrona, Santa María Magdalena, con una programación repleta de actos religiosos, culturales y festivos. Entre ellos destaca la Feria y Mercado Tradicional, que transforma el corazón del pueblo en un escenario de encuentro, color y participación.',
          va: 'Cada mes de juliol, Banyeres de Mariola ret homenatge a la seua patrona, Santa Maria Magdalena, amb una programació plena d’actes religiosos, culturals i festius. Entre ells destaca la Fira i Mercat Tradicional, que transforma el cor del poble en un escenari de trobada, color i participació.',
          ur: 'ہر جولائی میں، بانیریس دے مریولا اپنی سرپرست، سانتا ماریا مگدالینا کو خراج عقیدت پیش کرتا ہے، جس میں مذہبی، ثقافتی اور تہواری تقریبات کا ایک بھرپور پروگرام ہوتا ہے۔ ان میں روایتی میلہ اور بازار نمایاں ہے، جو قصبے کے مرکز کو ملاقات، رنگ اور شرکت کا ایک منظر بنا دیتا ہے۔',
          en: 'Every July, Banyeres de Mariola honours its patron saint, Santa María Magdalena, with a programme full of religious, cultural and festive events. Among them, the Traditional Fair and Market stands out, turning the heart of the town into a scene of gathering, colour and participation.'
        }
      },
      {
        image: '/assets/fm2.webp',
        alt: { es: 'Programación de julio de Santa María Magdalena.', va: 'Programació de juliol de Santa Maria Magdalena.', ur: 'سانتا ماریا مگدالینا کا جولائی کا پروگرام۔', en: 'July programme for Santa María Magdalena.' },
        title: { es: 'Feria, mercado y vida de pueblo', va: 'Fira, mercat i vida de poble', ur: 'میلہ، بازار اور قصبے کی زندگی', en: 'Fair, market and town life' },
        text: {
          es: 'Los días 11 y 12 de julio, la feria vuelve con una propuesta llena de puestos artesanales, productos locales, gastronomía, actividades infantiles, talleres de época y animación callejera. Es una oportunidad para disfrutar de la cultura popular y del ambiente festivo que caracteriza a Banyeres de Mariola.',
          va: 'Els dies 11 i 12 de juliol, la fira torna amb una proposta plena de llocs artesanals, productes locals, gastronomia, activitats infantils, tallers d’època i animació de carrer. És una oportunitat per a gaudir de la cultura popular i de l’ambient festiu que caracteritza Banyeres de Mariola.',
          ur: '11 اور 12 جولائی کو، میلہ دستکاری کے سٹالز، مقامی مصنوعات، کھانوں، بچوں کی سرگرمیوں، دور کی ورکشاپس اور سٹریٹ تفریح سے بھرپور واپس آتا ہے۔ یہ عوامی ثقافت اور بانیریس دے مریولا کی خصوصیت والے تہواری ماحول سے لطف اندوز ہونے کا موقع ہے۔',
          en: 'On July 11 and 12, the fair returns with craft stalls, local products, food, children’s activities, period workshops and street entertainment. It’s a chance to enjoy the popular culture and festive atmosphere that define Banyeres de Mariola.'
        }
      },
      {
        image: '/assets/fm3.webp',
        alt: { es: 'Calendario de Santa María Magdalena con programación.', va: 'Calendari de Santa Maria Magdalena amb programació.', ur: 'سانتا ماریا مگدالینا کا پروگرام کے ساتھ کیلنڈر۔', en: 'Santa María Magdalena calendar with programme.' },
        title: { es: 'Cáritas también estará presente', va: 'Càritas també estarà present', ur: 'کاریتاس بھی موجود ہوگا', en: 'Cáritas will be there too' },
        text: {
          es: 'Cáritas Banyeres estará presente con su stand solidario, donde no faltará la sección de Comercio Justo. Además, se podrán adquirir papeletas para una rifa solidaria con motivo de la festividad de Santa María Magdalena. El donativo será de 2 € y el sorteo se realizará el día 22 de julio de 2026. Entre los premios previstos figuran un lote de jamón serrano y embutidos de la tierra, un cuadro del pintor local Pedro Millán y una cesta de fruta natural.',
          va: 'Càritas Banyeres estarà present amb el seu estand solidari, on no faltarà la secció de Comerç Just. A més, es podran adquirir paperetes per a una rifa solidària amb motiu de la festivitat de Santa Maria Magdalena. El donatiu serà de 2 € i el sorteig es realitzarà el dia 22 de juliol de 2026. Entre els premis previstos hi ha un lot de pernil serrà i embotits de la terra, un quadre del pintor local Pedro Millán i una cistella de fruita natural.',
          ur: 'کاریتاس بانیریس اپنے یکجہتی سٹال کے ساتھ موجود ہوگا، جہاں منصفانہ تجارت کا حصہ بھی شامل ہوگا۔ اس کے علاوہ، سانتا ماریا مگدالینا کے تہوار کے موقع پر یکجہتی لاٹری کے ٹکٹ بھی دستیاب ہوں گے۔ عطیہ 2 یورو ہوگا اور قرعہ اندازی 22 جولائی 2026 کو ہوگی۔ متوقع انعامات میں سرانو ہیم اور مقامی گوشت کا سیٹ، مقامی مصور پیدرو میلان کی ایک پینٹنگ اور تازہ پھلوں کی ٹوکری شامل ہیں۔',
          en: 'Cáritas Banyeres will be present with its solidarity stand, which will of course include the Fair Trade section. Tickets for a solidarity raffle will also be available to mark the Santa María Magdalena festivity. The donation will be €2 and the draw will take place on July 22, 2026. Prizes on offer include a hamper of cured ham and local cold cuts, a painting by local artist Pedro Millán, and a basket of fresh fruit.'
        }
      }
    ]
  },

  {
    slug: 'ganadores-rifa-santa-maria-magdalena',
    hero: '/assets/rifa2.webp',
    title: {
      es: '¡Enhorabuena a los afortunados!',
      va: 'Enhorabona als afortunats!',
      ur: 'خوش قسمت فاتحین کو مبارک ہو!',
      en: 'Congratulations to the winners!'
    },
    eyebrow: { es: 'Noticias · Banyeres de Mariola', va: 'Notícies · Banyeres de Mariola', ur: 'خبریں · بانیریس دے مریولا', en: 'News · Banyeres de Mariola' },
    intro: {
      es: 'Conoce a los tres afortunados que se llevaron premios de la rifa.',
      va: 'Coneix als tres afortunats que es van emportar premis de la rifa.',
      ur: 'ان تین خوش قسمت افراد کو جانیں جنہوں نے لاٹری کے انعامات جیتے۔',
      en: 'Meet the three lucky winners who took home raffle prizes.'
    },
    blocks: [
      {
        image: '/assets/premio1.webp',
        alt: { es: 'Ganadores del primer premio de la rifa.', va: 'Guanyadors del primer premi de la rifa.', ur: 'لاٹری کے پہلے انعام کے فاتحین۔', en: 'Winners of the raffle’s first prize.' },
        title: { es: '1er premio', va: '1er premi', ur: 'پہلا انعام', en: '1st prize' },
        text: {
          es: 'La afortunada que se llevó el primer premio, correspondiente a la papeleta nº 264 y que consta de un jamón serrano y un surtido de embutidos ibéricos de primera calidad, fue Mª Angeles Domenech.',
          va: 'L´afortunada que es va emportar el primer premi, corresponent a la papeleta nº 264 y que consta d´ un pernil serrà i un assortiment d´embotits ibèrics de primera qualitat, va ser Mª Angeles Domenech.',
          ur: 'پہلا انعام، جو ٹکٹ نمبر 264 سے تعلق رکھتا تھا اور جس میں سرانو ہیم اور اعلیٰ معیار کے آئبیرین گوشت کا مجموعہ شامل تھا، خوش قسمت فاتح ماریا آنجلیس دومینیک نے جیتا۔',
          en: 'The lucky winner of the first prize, corresponding to ticket no. 264 and consisting of a cured ham and a selection of premium Iberian cold cuts, was Mª Angeles Domenech.'
        }
      },
      {
        image: '/assets/premio2.webp',
        alt: { es: 'Ganadores del segundo premio de la rifa.', va: 'Guanyadors del segón premi de la rifa.', ur: 'لاٹری کے دوسرے انعام کے فاتحین۔', en: 'Winners of the raffle’s second prize.' },
        title: { es: '2do premio', va: '2n premi', ur: 'دوسرا انعام', en: '2nd prize' },
        text: {
          es: 'El segundo premio, una pintura realizada por el pintor local Pedro Millán, fue para Mª Jesús Belda y Raúl Puerto con la papeleta nº 29.',
          va: 'El segón premi, una pintura realitzada per el pintor local Pedro Millán, va ser per a Mª Jesús Belda i Raúl Puerto amb la papeleta nº 29.',
          ur: 'دوسرا انعام، مقامی مصور پیدرو میلان کی بنائی ہوئی ایک پینٹنگ، ٹکٹ نمبر 29 کے ساتھ ماریا خیسوس بیلدا اور راؤل پوئرتو کو ملا۔',
          en: 'The second prize, a painting by local artist Pedro Millán, went to Mª Jesús Belda and Raúl Puerto with ticket no. 29.'
        }
      },
      {
        image: '/assets/premio3.webp',
        alt: { es: 'Ganadora del tercer premio de la rifa.', va: 'Guanyadora del tercer premi de la rifa.', ur: 'لاٹری کے تیسرے انعام کی فاتح۔', en: 'Winner of the raffle’s third prize.' },
        title: { es: '3er premio', va: '3er premi', ur: 'تیسرا انعام', en: '3rd prize' },
        text: {
          es: 'Con la papeleta nº 55, la cesta con fruta fresca natural fue para Isabel Vañó.',
          va: 'Amb la papeleta nº 55, la cistella amb fruita fresca natural va ser per a Isabel Vañó.',
          ur: 'ٹکٹ نمبر 55 کے ساتھ، تازہ قدرتی پھلوں کی ٹوکری ازابیل وانیو کو ملی۔',
          en: 'With ticket no. 55, the basket of fresh natural fruit went to Isabel Vañó.'
        }
      }
    ]
  },

  {
    slug: 'sopar-de-la-fam-2026',
    hero: '/assets/sopar-2026.webp',
    title: {
      es: '¡Únete al Sopar de la Fam 2026!',
      va: 'Uneix-te al Sopar de la Fam 2026!',
      ur: 'سوپار دے لا فام 2026 میں شامل ہوں!',
      en: 'Join us for Sopar de la Fam 2026!'
    },
    eyebrow: { es: 'Noticias · Banyeres de Mariola', va: 'Notícies · Banyeres de Mariola', ur: 'خبریں · بانیریس دے مریولا', en: 'News · Banyeres de Mariola' },
    intro: {},
    blocks: [
      {
        image: '/assets/sopar-2026.webp',
        alt: { es: 'Cartel del Sopar de la Fam 2026.', va: 'Cartell del Sopar de la Fam 2026.', ur: 'سوپار دے لا فام 2026 کا پوسٹر۔', en: 'Sopar de la Fam 2026 poster.' },
        title: { es: 'Cuándo y dónde', va: 'Quan i on', ur: 'کب اور کہاں', en: 'When and where' },
        text: {
          es: 'Como cada año, celebramos nuestro clásico Sopar de la Fam y este año se celebrará el viernes 18 de septiembre a las 21:00 en el Maset dels Maseros. Una velada donde, como siempre, se expondrán de manera cercana diferentes actividades y acciones de ayuda en las que Cáritas Banyeres está inmersa actualmente.\n\nAdemás, una cena humilde con fruta, pan y aceite amenizará la ocasión como viene siendo costumbre.',
          va: 'Com cada any, celebrem el nostre clàssic Sopar de la Fam i enguany se celebrarà el divendres 18 de setembre a les 21:00 al Maset dels Maseros. Una vetlada on, com sempre, s’exposaran de forma pròxima diferents activitats i accions d’ajuda en què Càritas Banyeres està immersa actualment.\n\nA més, un sopar humil amb fruita, pa i oli amenitzarà l’ocasió com és costum.',
          ur: 'ہر سال کی طرح، ہم اپنا روایتی سوپار دے لا فام مناتے ہیں، اور اس سال یہ جمعہ، 18 ستمبر کو رات 21:00 بجے ماسیت دیلس ماسیروس میں منعقد ہوگا۔ ایک ایسی شام جس میں، ہمیشہ کی طرح، کاریتاس بانیریس کی مختلف موجودہ سرگرمیوں اور امدادی اقدامات کو قریبی انداز میں پیش کیا جائے گا۔\n\nاس کے علاوہ، پھل، روٹی اور تیل پر مشتمل ایک سادہ عشائیہ، جیسا کہ روایت رہی ہے، اس موقع کو مزید یادگار بنائے گا۔',
          en: 'As every year, we’re celebrating our classic Sopar de la Fam, and this year it will take place on Friday, September 18 at 21:00 at Maset dels Maseros. An evening where, as always, we’ll share up close the different activities and support work Cáritas Banyeres is currently involved in.\n\nOn top of that, a humble dinner of fruit, bread and oil will accompany the occasion, as is tradition.'
        }
      },
      {
        image: '/assets/sopar-2026.webp',
        alt: { es: 'Cartel del Sopar de la Fam 2026 con información de venta de tiquets.', va: 'Cartell del Sopar de la Fam 2026 amb informació de venda de tiquets.', ur: 'ٹکٹ کی فروخت کی معلومات کے ساتھ سوپار دے لا فام 2026 کا پوسٹر۔', en: 'Sopar de la Fam 2026 poster with ticket sale information.' },
        title: { es: 'Tickets y beneficio', va: 'Tiquets i benefici', ur: 'ٹکٹ اور فائدہ', en: 'Tickets and beneficiary' },
        text: {
          es: 'Podéis adquirir vuestro tiquet en los Estancos de la localidad, Casa Abadía, Foto Vídeo Morenet y Viatges Euro-Tours. Todos los beneficios de la velada irán destinados a dar soporte a los proyectos que la misionera Tere Ferre lleva a cabo en Ranchi, India. ¡Os esperamos con ganas de compartir una gran noche!',
          va: 'Podeu adquirir el vostre tiquet als Estancs de la localitat, Casa Abadia, Foto Vídeo Morenet i Viatges Euro-Tours. Tots els beneficis de la vetlada aniran destinats a donar suport als projectes que la missionera Tere Ferre du a terme a Ranchi, l’Índia. Vos esperem amb ganes de compartir una gran nit!',
          ur: 'آپ اپنا ٹکٹ قصبے کے تمباکو فروشوں (Estancos)، کاسا آبادیا، فوٹو ویڈیو مورینیت اور ویاتخیس یورو-ٹورز سے حاصل کر سکتے ہیں۔ شام کے تمام فوائد مشنری تیرے فیرے کے رانچی، بھارت میں جاری منصوبوں کی مدد کے لیے استعمال ہوں گے۔ ہم آپ کے ساتھ ایک شاندار رات گزارنے کے منتظر ہیں!',
          en: 'You can get your ticket at the local tobacco shops (Estancos), Casa Abadía, Foto Vídeo Morenet and Viatges Euro-Tours. All proceeds from the evening will go to support the projects missionary Tere Ferre runs in Ranchi, India. We hope you’ll join us for a great night!'
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
  location: { es: 'Banyeres de Mariola', va: 'Banyeres de Mariola', ur: 'بانیریس دے مریولا', en: 'Banyeres de Mariola' }
};

export const projectStories = {
  ropero: {
    title: { es: 'El ropero por dentro', va: 'El rober per dins', ur: 'لباس گھر کے اندر', en: 'Inside the clothing bank' },
    intro: {
      es: 'El ropero solidario es uno de los espacios más vivos de Cáritas Banyeres: un lugar donde cada prenda se revisa, se ordena y se prepara con cuidado para que llegue en condiciones dignas a quienes más la necesitan.',
      va: 'El rober solidari és un dels espais més vius de Càritas Banyeres: un lloc on cada peça es revisa, s’ordena i es prepara amb cura perquè arribe en condicions dignes a qui més la necessita.',
      ur: 'یکجہتی لباس گھر کاریتاس بانیریس کی سب سے متحرک جگہوں میں سے ایک ہے: ایک ایسی جگہ جہاں ہر لباس کا جائزہ لیا جاتا ہے، ترتیب دیا جاتا ہے اور احتیاط سے تیار کیا جاتا ہے تاکہ باوقار حالت میں سب سے زیادہ ضرورت مندوں تک پہنچے۔',
      en: 'The solidarity clothing bank is one of the liveliest spaces at Cáritas Banyeres: a place where every item is checked, sorted and carefully prepared so it reaches those who need it most in dignified condition.'
    },
    blocks: [
      {
        image: '/assets/ropero-foto-01.webp',
        alt: { es: 'Interior del ropero solidario con ropa organizada.', va: 'Interior del rober solidari amb roba organitzada.', ur: 'یکجہتی لباس گھر کا اندرونی منظر، ترتیب شدہ کپڑوں کے ساتھ۔', en: 'Inside the solidarity clothing bank with organised clothes.' },
        title: { es: 'Un espacio de acogida material', va: 'Un espai d’acollida material', ur: 'مادی استقبال کی جگہ', en: 'A space of material welcome' },
        text: {
          es: 'La ropa donada se convierte en una ayuda directa cuando llega limpia, en buen estado y lista para ser entregada. Por eso cada aportación se clasifica con calma, atendiendo a tallas, temporadas y necesidades concretas.',
          va: 'La roba donada es converteix en una ajuda directa quan arriba neta, en bon estat i llesta per a ser entregada. Per això cada aportació es classifica amb calma, atenent talles, temporades i necessitats concretes.',
          ur: 'عطیہ کیے گئے کپڑے اس وقت براہ راست مدد بن جاتے ہیں جب وہ صاف، اچھی حالت میں اور ترسیل کے لیے تیار پہنچیں۔ اسی لیے ہر عطیے کو تحمل سے، سائز، موسم اور ٹھوس ضروریات کو مدنظر رکھتے ہوئے ترتیب دیا جاتا ہے۔',
          en: 'Donated clothing becomes direct help once it arrives clean, in good condition and ready to be handed out. That’s why every contribution is sorted calmly, taking sizes, seasons and specific needs into account.'
        }
      },
      {
        image: '/assets/ropero-foto-02.webp',
        alt: { es: 'Zona de bolsos y complementos del ropero solidario.', va: 'Zona de bosses i complements del rober solidari.', ur: 'یکجہتی لباس گھر میں بیگز اور لوازمات کا حصہ۔', en: 'Bags and accessories section of the clothing bank.' },
        title: { es: 'Orden para cuidar mejor', va: 'Ordre per a cuidar millor', ur: 'بہتر دیکھ بھال کے لیے ترتیب', en: 'Order for better care' },
        text: {
          es: 'El trabajo del voluntariado permite que el ropero funcione como un espacio útil y humano. Bolsos, calzado, mantas, ropa de abrigo y prendas cotidianas se colocan para facilitar una atención más rápida y digna.',
          va: 'El treball del voluntariat permet que el rober funcione com un espai útil i humà. Bosses, calçat, mantes, roba d’abric i peces quotidianes es col·loquen per a facilitar una atenció més ràpida i digna.',
          ur: 'رضاکاروں کا کام لباس گھر کو ایک مفید اور انسانی جگہ کے طور پر چلانے میں مدد دیتا ہے۔ بیگز، جوتے، کمبل، گرم کپڑے اور روزمرہ کے لباس کو ایسے ترتیب دیا جاتا ہے کہ زیادہ تیز اور باوقار خدمت ممکن ہو۔',
          en: 'The volunteers’ work allows the clothing bank to run as a useful, human space. Bags, footwear, blankets, warm clothing and everyday items are arranged to make service quicker and more dignified.'
        }
      },
      {
        image: '/assets/ropero-foto-03.webp',
        alt: { es: 'Vista general del ropero solidario.', va: 'Vista general del rober solidari.', ur: 'یکجہتی لباس گھر کا عمومی منظر۔', en: 'General view of the solidarity clothing bank.' },
        title: { es: 'Martes de atención', va: 'Dimarts d’atenció', ur: 'منگل کو خدمت کا دن', en: 'Tuesday opening hours' },
        text: {
          es: 'Nuestro ropero solidario se encuentra en C/Francisco Berenguer Mora, en los bajos del mercado, y abre todos los martes de 18:30 a 20:30. Desde allí se acompaña a personas y familias que necesitan ropa, textiles o apoyo básico.',
          va: 'El nostre rober solidari es troba al C/Francisco Berenguer Mora, als baixos del mercat, i obri tots els dimarts de 18:30 a 20:30. Des d’allí s’acompanya persones i famílies que necessiten roba, tèxtils o suport bàsic.',
          ur: 'ہمارا یکجہتی لباس گھر سٹریٹ فرانسسکو بیرنگیر مورا میں، مارکیٹ کی نچلی منزل پر واقع ہے، اور ہر منگل کو 18:30 سے 20:30 تک کھلتا ہے۔ وہاں سے ان افراد اور خاندانوں کا ساتھ دیا جاتا ہے جنہیں کپڑوں، ٹیکسٹائل یا بنیادی مدد کی ضرورت ہو۔',
          en: 'Our solidarity clothing bank is located at C/Francisco Berenguer Mora, on the ground floor of the market, and opens every Tuesday from 18:30 to 20:30. From there, we support people and families who need clothing, textiles or basic assistance.'
        }
      },
      {
        image: '/assets/ropero-foto-04.webp',
        alt: { es: 'Ropa clasificada en mesas del ropero solidario.', va: 'Roba classificada en taules del rober solidari.', ur: 'یکجہتی لباس گھر کی میزوں پر ترتیب شدہ کپڑے۔', en: 'Clothing sorted on tables at the clothing bank.' },
        title: { es: 'Dignidad en cada entrega', va: 'Dignitat en cada entrega', ur: 'ہر ترسیل میں وقار', en: 'Dignity in every handover' },
        text: {
          es: 'Agradecemos de antemano que la ropa donada venga en buen estado, limpia y doblada. Ese gesto sencillo facilita muchísimo la labor del equipo y permite que la ayuda llegue preparada a quienes más lo necesitan.',
          va: 'Agraïm per endavant que la roba donada vinga en bon estat, neta i doblada. Eixe gest senzill facilita moltíssim la tasca de l’equip i permet que l’ajuda arribe preparada a qui més la necessita.',
          ur: 'ہم پیشگی شکریہ ادا کرتے ہیں اگر عطیہ کردہ کپڑے اچھی حالت میں، صاف اور تہہ کیے ہوئے آئیں۔ یہ سادہ سا اقدام ٹیم کے کام کو بہت آسان بنا دیتا ہے اور مدد کو سب سے زیادہ ضرورت مندوں تک تیار حالت میں پہنچانے میں مدد دیتا ہے۔',
          en: 'We are grateful in advance if donated clothing arrives in good condition, clean and folded. That simple gesture makes the team’s work much easier and allows help to reach those who need it most already prepared.'
        }
      },
      {
        image: '/assets/ropero-foto-05.webp',
        alt: { es: 'Percheros, mantas y ropa del ropero solidario.', va: 'Penjadors, mantes i roba del rober solidari.', ur: 'یکجہتی لباس گھر کے ہینگرز، کمبل اور کپڑے۔', en: 'Hangers, blankets and clothes at the clothing bank.' },
        title: { es: 'Una cadena de cuidado', va: 'Una cadena de cura', ur: 'دیکھ بھال کا ایک سلسلہ', en: 'A chain of care' },
        text: {
          es: 'Cada prenda que llega en buenas condiciones puede formar parte de una cadena de ayuda: una persona dona, otra clasifica, otra acompaña y otra recibe algo que necesita para su día a día.',
          va: 'Cada peça que arriba en bones condicions pot formar part d’una cadena d’ajuda: una persona dona, una altra classifica, una altra acompanya i una altra rep alguna cosa que necessita per al seu dia a dia.',
          ur: 'اچھی حالت میں پہنچنے والا ہر لباس مدد کے ایک سلسلے کا حصہ بن سکتا ہے: ایک شخص عطیہ دیتا ہے، دوسرا ترتیب دیتا ہے، تیسرا ساتھ دیتا ہے اور چوتھا کوئی ایسی چیز وصول کرتا ہے جو اس کی روزمرہ زندگی کے لیے ضروری ہے۔',
          en: 'Every item that arrives in good condition can become part of a chain of help: one person donates, another sorts, another accompanies, and another receives something they need for daily life.'
        }
      }
    ]
  },
  'comercio-justo': {
    title: { es: 'Comercio Justo en nuestras ferias', va: 'Comerç Just en les nostres fires', ur: 'ہمارے میلوں میں منصفانہ تجارت', en: 'Fair Trade at our fairs' },
    intro: {
      es: 'En los stands que Cáritas monta en las diferentes ferias siempre tiene presencia la ya habitual sección de Comercio Justo: una forma sencilla de consumir con más conciencia y apoyar condiciones más justas para pequeños productores.',
      va: 'En els estands que Càritas munta en les diferents fires sempre té presència la ja habitual secció de Comerç Just: una forma senzilla de consumir amb més consciència i donar suport a condicions més justes per a xicotets productors.',
      ur: 'کاریتاس مختلف میلوں میں جو سٹالز لگاتا ہے ان میں منصفانہ تجارت کا مانوس حصہ ہمیشہ موجود ہوتا ہے: چھوٹے پیداکاروں کے لیے زیادہ منصفانہ حالات کی حمایت کرنے اور زیادہ باشعور طریقے سے خریداری کرنے کا ایک آسان طریقہ۔',
      en: 'The stands Cáritas sets up at the various fairs always include the now-familiar Fair Trade section: a simple way to shop more consciously and support fairer conditions for small producers.'
    },
    blocks: [
      {
        image: '/assets/comercio-justo-foto-01.webp',
        alt: { es: 'Puesto de Comercio Justo de Cáritas Banyeres.', va: 'Punt de Comerç Just de Càritas Banyeres.', ur: 'کاریتاس بانیریس کا منصفانہ تجارت سٹال۔', en: 'Cáritas Banyeres’ Fair Trade stand.' },
        title: { es: 'Productos con sentido', va: 'Productes amb sentit', ur: 'بامعنی مصنوعات', en: 'Products with meaning' },
        text: {
          es: 'El Comercio Justo permite adquirir productos alimenticios de primera calidad y, al mismo tiempo, apoyar de manera directa a quienes los producen. Cada compra se convierte en un gesto de responsabilidad compartida.',
          va: 'El Comerç Just permet adquirir productes alimentaris de primera qualitat i, al mateix temps, donar suport de manera directa a qui els produeix. Cada compra es converteix en un gest de responsabilitat compartida.',
          ur: 'منصفانہ تجارت اعلیٰ معیار کی غذائی مصنوعات خریدنے کے ساتھ ساتھ انہیں پیدا کرنے والوں کی براہ راست حمایت کرنے کا موقع دیتی ہے۔ ہر خریداری مشترکہ ذمہ داری کا ایک اظہار بن جاتی ہے۔',
          en: 'Fair Trade lets you buy top-quality food products while directly supporting the people who produce them. Every purchase becomes a gesture of shared responsibility.'
        }
      },
      {
        image: '/assets/comercio-justo-foto-02.webp',
        alt: { es: 'Personas visitando el puesto de Comercio Justo.', va: 'Persones visitant el punt de Comerç Just.', ur: 'منصفانہ تجارت سٹال کا دورہ کرتے لوگ۔', en: 'People visiting the Fair Trade stand.' },
        title: { es: 'Un punto de encuentro', va: 'Un punt de trobada', ur: 'ملاقات کی ایک جگہ', en: 'A meeting point' },
        text: {
          es: 'Estos puestos no solo venden productos: también abren conversación. Sirven para explicar por qué es importante fomentar valores, condiciones dignas y relaciones comerciales más justas.',
          va: 'Estos punts no sols venen productes: també obrin conversa. Servixen per a explicar per què és important fomentar valors, condicions dignes i relacions comercials més justes.',
          ur: 'یہ سٹالز صرف مصنوعات نہیں بیچتے، بلکہ گفتگو کا آغاز بھی کرتے ہیں۔ یہ سمجھانے میں مدد دیتے ہیں کہ اقدار، باوقار حالات اور زیادہ منصفانہ تجارتی تعلقات کو فروغ دینا کیوں اہم ہے۔',
          en: 'These stands don’t just sell products — they also open up conversation. They help explain why it matters to promote values, dignified conditions and fairer trade relationships.'
        }
      },
      {
        image: '/assets/comercio-justo-foto-03.webp',
        alt: { es: 'Productos alimenticios de Comercio Justo.', va: 'Productes alimentaris de Comerç Just.', ur: 'منصفانہ تجارت کی غذائی مصنوعات۔', en: 'Fair Trade food products.' },
        title: { es: 'Pequeños gestos cotidianos', va: 'Xicotets gestos quotidians', ur: 'روزمرہ کے چھوٹے اقدامات', en: 'Small everyday gestures' },
        text: {
          es: 'Elegir Comercio Justo es una manera concreta de ayudar desde lo cotidiano. Un café, un cacao, una infusión o un alimento pueden llevar detrás una historia de trabajo mejor reconocido y más humano.',
          va: 'Triar Comerç Just és una manera concreta d’ajudar des del quotidià. Un café, un cacau, una infusió o un aliment poden portar darrere una història de treball millor reconegut i més humà.',
          ur: 'منصفانہ تجارت کا انتخاب روزمرہ زندگی سے مدد کرنے کا ایک ٹھوس طریقہ ہے۔ ایک کافی، ایک کوکو، ایک چائے یا کوئی غذائی چیز اپنے پیچھے بہتر طور پر تسلیم شدہ اور زیادہ انسانی کام کی کہانی رکھ سکتی ہے۔',
          en: 'Choosing Fair Trade is a concrete way to help through everyday choices. A coffee, a cocoa, a herbal tea or a food item can carry behind it a story of better-recognised, more humane work.'
        }
      }
    ]
  }
  ,
  'ranchi-india': {
    title: { es: 'Un puente entre Banyeres y Ranchi', va: 'Un pont entre Banyeres i Ranchi', ur: 'بانیریس اور رانچی کے درمیان ایک پل', en: 'A bridge between Banyeres and Ranchi' },
    intro: {
      es: 'La ayuda a Ranchi forma parte de una historia compartida que une la labor misionera, el apadrinamiento y la solidaridad de muchas familias de Banyeres.',
      va: 'L’ajuda a Ranchi forma part d’una història compartida que unix la labor missionera, l’apadrinament i la solidaritat de moltes famílies de Banyeres.',
      ur: 'رانچی کی مدد ایک مشترکہ کہانی کا حصہ ہے جو مشنری کام، کفالت اور بانیریس کے بہت سے خاندانوں کی یکجہتی کو یکجا کرتی ہے۔',
      en: 'Helping Ranchi is part of a shared story that brings together missionary work, sponsorship and the solidarity of many families from Banyeres.'
    },
    blocks: [
      {
        image: '/assets/ranchi-mapa.webp',
        alt: { es: 'Mapa con la ubicación de Ranchi en India.', va: 'Mapa amb la ubicació de Ranchi a l’Índia.', ur: 'بھارت میں رانچی کے مقام کا نقشہ۔', en: 'Map showing the location of Ranchi in India.' },
        title: { es: 'Ranchi, una realidad cercana desde la distancia', va: 'Ranchi, una realitat pròxima des de la distància', ur: 'رانچی، دوری کے باوجود ایک قریبی حقیقت', en: 'Ranchi, a close reality despite the distance' },
        text: {
          es: 'Situar Ranchi en el mapa ayuda a comprender la dimensión de este vínculo solidario. Aunque la distancia geográfica es grande, el compromiso de las familias de Banyeres ha permitido mantener viva una ayuda concreta para niños y niñas que necesitan apoyo educativo, acompañamiento y oportunidades.',
          va: 'Situar Ranchi en el mapa ajuda a comprendre la dimensió d’este vincle solidari. Encara que la distància geogràfica és gran, el compromís de les famílies de Banyeres ha permés mantindre viva una ajuda concreta per a xiquets i xiquetes que necessiten suport educatiu, acompanyament i oportunitats.',
          ur: 'رانچی کو نقشے پر دیکھنا اس یکجہتی کے رشتے کی وسعت سمجھنے میں مدد دیتا ہے۔ اگرچہ جغرافیائی فاصلہ بہت بڑا ہے، لیکن بانیریس کے خاندانوں کے عزم نے تعلیمی مدد، ساتھ اور مواقع کی ضرورت مند بچوں کے لیے ٹھوس مدد کو زندہ رکھا ہے۔',
          en: 'Placing Ranchi on the map helps us grasp the scale of this bond of solidarity. Although the geographical distance is great, the commitment of families from Banyeres has kept concrete help alive for children who need educational support, guidance and opportunities.'
        }
      },
      {
        image: '/assets/ranchi1.webp',
        alt: { es: 'Grupo de niñas del proyecto de Ranchi agradeciendo el apoyo recibido.', va: 'Grup de xiquetes del projecte de Ranchi agraint el suport rebut.', ur: 'رانچی منصوبے کی لڑکیوں کا گروہ ملنے والی مدد پر شکریہ ادا کرتے ہوئے۔', en: 'A group of girls from the Ranchi project thanking supporters for their help.' },
        title: { es: 'Educación y esperanza', va: 'Educació i esperança', ur: 'تعلیم اور امید', en: 'Education and hope' },
        text: {
          es: 'El apoyo de las familias de Banyeres ayuda a sostener oportunidades educativas y de acompañamiento para niñas y niños de Ranchi. Cada aportación permite que la ayuda se transforme en continuidad, escuela, cuidado y futuro.',
          va: 'El suport de les famílies de Banyeres ajuda a sostindre oportunitats educatives i d’acompanyament per a xiquetes i xiquets de Ranchi. Cada aportació permet que l’ajuda es transforme en continuïtat, escola, cura i futur.',
          ur: 'بانیریس کے خاندانوں کی مدد رانچی کے بچوں کے لیے تعلیمی مواقع اور رہنمائی کو برقرار رکھنے میں مدد دیتی ہے۔ ہر تعاون مدد کو تسلسل، تعلیم، دیکھ بھال اور مستقبل میں بدل دیتا ہے۔',
          en: 'Support from families in Banyeres helps sustain educational and mentoring opportunities for the children of Ranchi. Every contribution turns help into continuity, schooling, care and a future.'
        }
      },
      {
        image: '/assets/ranchi2.webp',
        alt: { es: 'Niños y niñas comiendo en un espacio de atención en Ranchi.', va: 'Xiquets i xiquetes menjant en un espai d’atenció a Ranchi.', ur: 'رانچی کے ایک مرکز میں کھانا کھاتے بچے۔', en: 'Children eating at a care centre in Ranchi.' },
        title: { es: 'Cuidado en lo cotidiano', va: 'Cura en el dia a dia', ur: 'روزمرہ زندگی میں دیکھ بھال', en: 'Everyday care' },
        text: {
          es: 'La ayuda también se concreta en necesidades básicas: alimentación, acompañamiento y espacios seguros donde crecer. Son gestos sencillos que, mantenidos en el tiempo, marcan una diferencia real en la vida de muchas familias.',
          va: 'L’ajuda també es concreta en necessitats bàsiques: alimentació, acompanyament i espais segurs on créixer. Són gestos senzills que, mantinguts en el temps, marquen una diferència real en la vida de moltes famílies.',
          ur: 'مدد بنیادی ضروریات کی صورت میں بھی سامنے آتی ہے: خوراک، رہنمائی اور بڑھنے کے لیے محفوظ جگہیں۔ یہ سادہ اقدامات ہیں جو وقت کے ساتھ برقرار رہ کر بہت سے خاندانوں کی زندگی میں حقیقی فرق پیدا کرتے ہیں۔',
          en: 'Help also takes shape through basic needs: food, guidance and safe spaces to grow up in. These are simple gestures that, sustained over time, make a real difference in the lives of many families.'
        }
      },
      {
        image: '/assets/ranchi3.webp',
        alt: { es: 'La hermana Tere compartiendo un momento con niñas en Ranchi.', va: 'La germana Tere compartint un moment amb xiquetes a Ranchi.', ur: 'بہن تیرے رانچی میں لڑکیوں کے ساتھ ایک لمحہ گزارتے ہوئے۔', en: 'Sister Tere sharing a moment with girls in Ranchi.' },
        title: { es: 'La huella de Tere Ferre', va: 'L’empremta de Tere Ferre', ur: 'تیرے فیرے کا نقش', en: 'Tere Ferre’s legacy' },
        text: {
          es: 'La presencia de Tere Ferre dejó una huella profunda de cercanía, entrega y servicio. Hoy, Cáritas Banyeres mantiene vivo ese vínculo, recordando su labor y prolongando su espíritu de ayuda a través del apadrinamiento.',
          va: 'La presència de Tere Ferre va deixar una empremta profunda de proximitat, entrega i servei. Hui, Càritas Banyeres manté viu eixe vincle, recordant la seua labor i prolongant el seu esperit d’ajuda a través de l’apadrinament.',
          ur: 'تیرے فیرے کی موجودگی نے قربت، لگن اور خدمت کا ایک گہرا نقش چھوڑا۔ آج، کاریتاس بانیریس اس رشتے کو زندہ رکھے ہوئے ہے، ان کے کام کو یاد کرتے ہوئے اور کفالت کے ذریعے ان کے مدد کے جذبے کو آگے بڑھاتے ہوئے۔',
          en: 'Tere Ferre’s presence left a deep mark of closeness, dedication and service. Today, Cáritas Banyeres keeps that bond alive, remembering her work and carrying forward her spirit of help through sponsorship.'
        }
      }
    ]
  },
  'que-nadie-pase-frio': {
    title: { es: 'Abrigo, cuidado y dignidad', va: 'Abric, cura i dignitat', ur: 'گرمائش، دیکھ بھال اور وقار', en: 'Warmth, care and dignity' },
    intro: {
      es: 'La campaña se sostiene con prendas y textiles útiles, pero sobre todo con una forma de mirar la necesidad desde el cuidado y la responsabilidad comunitaria.',
      va: 'La campanya es sosté amb peces i tèxtils útils, però sobretot amb una forma de mirar la necessitat des de la cura i la responsabilitat comunitària.',
      ur: 'یہ مہم مفید کپڑوں اور ٹیکسٹائل کی بدولت چلتی ہے، لیکن سب سے بڑھ کر ضرورت کو دیکھ بھال اور کمیونٹی ذمہ داری کی نظر سے دیکھنے کے انداز کی بدولت۔',
      en: 'The campaign runs on useful clothing and textiles, but above all on a way of viewing need through care and community responsibility.'
    },
    blocks: [
      {
        image: '/assets/npf1.webp',
        alt: { es: 'Textiles de abrigo doblados.', va: 'Tèxtils d’abric doblegats.', ur: 'تہہ کیے گئے گرم کپڑے۔', en: 'Folded warm clothing.' },
        title: { es: 'Ropa de abrigo que protege', va: 'Roba d’abric que protegix', ur: 'گرم کپڑے جو تحفظ دیتے ہیں', en: 'Warm clothing that protects' },
        text: {
          es: 'Bufandas, mantas, jerséis, abrigos y prendas térmicas pueden marcar una gran diferencia cuando llega el invierno. La campaña recoge, revisa y prepara cada aportación para que llegue con rapidez a personas mayores, familias con menores o vecinos que atraviesan una situación de dificultad. No se trata solo de entregar ropa, sino de ofrecer abrigo, cuidado y tranquilidad en los meses más duros.',
          va: 'Bufandes, mantes, jerseis, abrics i peces tèrmiques poden marcar una gran diferència quan arriba l’hivern. La campanya arreplega, revisa i prepara cada aportació perquè arribe amb rapidesa a persones majors, famílies amb menors o veïns que travessen una situació de dificultat. No es tracta només d’entregar roba, sinó d’oferir abric, cura i tranquil·litat en els mesos més durs.',
          ur: 'مفلر، کمبل، سویٹر، کوٹ اور گرم کپڑے سردیوں کے آنے پر بڑا فرق پیدا کر سکتے ہیں۔ مہم ہر تعاون کو اکٹھا کرتی، جانچتی اور تیار کرتی ہے تاکہ وہ بزرگ افراد، بچوں والے خاندانوں یا مشکل حالات سے گزرنے والے پڑوسیوں تک تیزی سے پہنچے۔ یہ صرف کپڑے دینے کی بات نہیں، بلکہ سب سے مشکل مہینوں میں گرمائش، دیکھ بھال اور سکون فراہم کرنے کی بات ہے۔',
          en: 'Scarves, blankets, jumpers, coats and thermal clothing can make a real difference when winter arrives. The campaign collects, checks and prepares every contribution so it quickly reaches elderly people, families with children, or neighbours going through a hard time. It’s not just about handing out clothes, but offering warmth, care and peace of mind through the toughest months.'
        }
      },
      {
        image: '/assets/npf2.webp',
        alt: { es: 'Caja con prendas de invierno.', va: 'Caixa amb peces d’hivern.', ur: 'سردیوں کے کپڑوں سے بھرا ایک ڈبہ۔', en: 'Box with winter clothing.' },
        title: { es: 'Donaciones preparadas para ayudar', va: 'Donacions preparades per a ajudar', ur: 'مدد کے لیے تیار عطیات', en: 'Donations prepared to help' },
        text: {
          es: 'Agradecemos que las prendas lleguen limpias, en buen estado y listas para entregar. Ese cuidado previo facilita la clasificación, evita trabajo innecesario al voluntariado y permite responder antes a quienes necesitan apoyo. Cada prenda bien preparada es una muestra de respeto hacia la persona que la recibirá.',
          va: 'Agraïm que les peces arriben netes, en bon estat i llestes per a entregar. Eixa cura prèvia facilita la classificació, evita treball innecessari al voluntariat i permet respondre abans a qui necessita suport. Cada peça ben preparada és una mostra de respecte cap a la persona que la rebrà.',
          ur: 'ہم شکرگزار ہیں اگر کپڑے صاف، اچھی حالت میں اور ترسیل کے لیے تیار پہنچیں۔ یہ پیشگی احتیاط ترتیب کو آسان بناتی ہے، رضاکاروں کے غیر ضروری کام سے بچاتی ہے اور ضرورت مندوں تک جلد پہنچنے میں مدد دیتی ہے۔ ہر اچھی طرح تیار کردہ لباس وصول کرنے والے کے لیے احترام کا اظہار ہے۔',
          en: 'We appreciate items arriving clean, in good condition and ready to hand out. That prior care makes sorting easier, saves volunteers unnecessary work, and lets us respond sooner to those who need support. Every well-prepared item is a sign of respect for the person who will receive it.'
        }
      },
      {
        image: '/assets/npf3.webp',
        alt: { es: 'Ropa de punto de invierno.', va: 'Roba de punt d’hivern.', ur: 'سردیوں کے بنے ہوئے کپڑے۔', en: 'Winter knitwear.' },
        title: { es: 'Una ayuda que llega en invierno', va: 'Una ajuda que arriba a l’hivern', ur: 'ایک مدد جو سردیوں میں پہنچتی ہے', en: 'Help that arrives in winter' },
        text: {
          es: 'La campaña se activa especialmente cuando bajan las temperaturas, pero su espíritu permanece todo el año: organizar la solidaridad para que llegue con orden, respeto y dignidad. Gracias a la colaboración de Banyeres, Cáritas puede atender necesidades concretas y convertir pequeños gestos en una protección real frente al frío.',
          va: 'La campanya s’activa especialment quan baixen les temperatures, però el seu esperit roman tot l’any: organitzar la solidaritat perquè arribe amb ordre, respecte i dignitat. Gràcies a la col·laboració de Banyeres, Càritas pot atendre necessitats concretes i convertir xicotets gestos en una protecció real davant del fred.',
          ur: 'یہ مہم خاص طور پر درجہ حرارت گرنے پر متحرک ہوتی ہے، لیکن اس کا جذبہ سارا سال قائم رہتا ہے: یکجہتی کو اس طرح منظم کرنا کہ وہ ترتیب، احترام اور وقار کے ساتھ پہنچے۔ بانیریس کے تعاون کی بدولت، کاریتاس ٹھوس ضروریات پوری کر سکتا ہے اور چھوٹے اقدامات کو سردی کے خلاف حقیقی تحفظ میں بدل سکتا ہے۔',
          en: 'The campaign is especially active when temperatures drop, but its spirit lasts all year: organising solidarity so it arrives with order, respect and dignity. Thanks to Banyeres’ collaboration, Cáritas can address specific needs and turn small gestures into real protection against the cold.'
        }
      }
    ]
  },
  'ferias-solidarias': {
    title: { es: 'Stands solidarios en las ferias', va: 'Estands solidaris en les fires', ur: 'میلوں میں یکجہتی سٹالز', en: 'Solidarity stands at the fairs' },
    intro: {
      es: 'Las ferias son una oportunidad para hacer visible la labor de Cáritas, recaudar fondos y acercar a vecinos y visitantes distintas formas de colaboración.',
      va: 'Les fires són una oportunitat per a fer visible la labor de Càritas, recaptar fons i acostar a veïns i visitants diferents formes de col·laboració.',
      ur: 'میلے کاریتاس کے کام کو نمایاں کرنے، چندہ اکٹھا کرنے اور مقامی لوگوں اور مہمانوں کو تعاون کے مختلف طریقوں سے متعارف کروانے کا موقع ہیں۔',
      en: 'Fairs are an opportunity to make Cáritas’ work visible, raise funds, and introduce locals and visitors to different ways of getting involved.'
    },
    blocks: [
      {
        image: '/assets/feria-solidaria.webp',
        alt: { es: 'Stand solidario de Cáritas con productos de Comercio Justo.', va: 'Estand solidari de Càritas amb productes de Comerç Just.', ur: 'کاریتاس کا یکجہتی سٹال، منصفانہ تجارت کی مصنوعات کے ساتھ۔', en: 'Cáritas’ solidarity stand with Fair Trade products.' },
        title: { es: 'Un stand para encontrarnos', va: 'Un estand per a trobar-nos', ur: 'ملنے کے لیے ایک سٹال', en: 'A stand to meet at' },
        text: {
          es: 'En las ferias, Cáritas abre un espacio cercano donde informar, recaudar fondos y compartir formas sencillas de colaborar. En el stand pueden convivir artículos donados, rifas solidarias y la sección de Comercio Justo, siempre con el objetivo de sostener proyectos de ayuda y acercar la solidaridad a la calle.',
          va: 'En les fires, Càritas obri un espai pròxim on informar, recaptar fons i compartir formes senzilles de col·laborar. En l’estand poden conviure articles donats, rifes solidàries i la secció de Comerç Just, sempre amb l’objectiu de sostindre projectes d’ajuda i acostar la solidaritat al carrer.',
          ur: 'میلوں میں، کاریتاس ایک قریبی جگہ کھولتا ہے جہاں معلومات دی جاتی ہیں، چندہ اکٹھا کیا جاتا ہے اور تعاون کے سادہ طریقے شیئر کیے جاتے ہیں۔ سٹال پر عطیہ شدہ اشیاء، یکجہتی لاٹریاں اور منصفانہ تجارت کا حصہ ایک ساتھ موجود ہو سکتے ہیں، ہمیشہ امدادی منصوبوں کو برقرار رکھنے اور یکجہتی کو گلی تک پہنچانے کے مقصد کے ساتھ۔',
          en: 'At the fairs, Cáritas opens up a welcoming space to inform people, raise funds and share simple ways to help. The stand may combine donated items, solidarity raffles and the Fair Trade section, always aiming to sustain aid projects and bring solidarity out onto the street.'
        }
      },
      {
        image: '/assets/fs2.webp',
        alt: { es: 'Stand de Cáritas Banyeres con productos solidarios, comercio justo y rifa.', va: 'Estand de Càritas Banyeres amb productes solidaris, comerç just i rifa.', ur: 'کاریتاس بانیریس کا سٹال، یکجہتی مصنوعات، منصفانہ تجارت اور لاٹری کے ساتھ۔', en: 'Cáritas Banyeres’ stand with solidarity products, Fair Trade and raffle.' },
        title: { es: 'Rifas, comercio justo y colaboración local', va: 'Rifes, comerç just i col·laboració local', ur: 'لاٹریاں، منصفانہ تجارت اور مقامی تعاون', en: 'Raffles, fair trade and local collaboration' },
        text: {
          es: 'En estos encuentros también se ofrecen papeletas para rifas solidarias y productos de Comercio Justo. Gracias a la implicación de artistas, comerciantes y vecinos, el stand se convierte en una forma sencilla de recaudar fondos y de mantener presentes los proyectos de ayuda de Cáritas en la vida del pueblo.',
          va: 'En estes trobades també s’ofereixen paperetes per a rifes solidàries i productes de Comerç Just. Gràcies a la implicació d’artistes, comerciants i veïns, l’estand es converteix en una forma senzilla de recaptar fons i de mantindre presents els projectes d’ajuda de Càritas en la vida del poble.',
          ur: 'ان مواقع پر یکجہتی لاٹری کے ٹکٹ اور منصفانہ تجارت کی مصنوعات بھی پیش کی جاتی ہیں۔ فنکاروں، تاجروں اور مقامی لوگوں کی شرکت کی بدولت، یہ سٹال چندہ اکٹھا کرنے اور کاریتاس کے امدادی منصوبوں کو قصبے کی زندگی میں موجود رکھنے کا ایک آسان طریقہ بن جاتا ہے۔',
          en: 'These events also offer tickets for solidarity raffles and Fair Trade products. Thanks to the involvement of artists, shopkeepers and neighbours, the stand becomes a simple way to raise funds and keep Cáritas’ aid projects present in the life of the town.'
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
      title: { es: 'Sopar de la Fam 2025', va: 'Sopar de la Fam 2025', ur: 'سوپار دے لا فام 2025', en: 'Sopar de la Fam 2025' },
      eyebrow: { es: '19 de septiembre · Maset dels Pirates', va: '19 de setembre · Maset dels Pirates', ur: '19 ستمبر · ماسیت دیلس پیراتیس', en: 'September 19 · Maset dels Pirates' },
      summary: {
        es: 'Una velada comunitaria para apoyar el proyecto de ayuda en Ranchi y agradecer el compromiso de las familias que apadrinan.',
        va: 'Una vetlada comunitària per a donar suport al projecte d’ajuda a Ranchi i agrair el compromís de les famílies que apadrinen.',
        ur: 'رانچی میں امدادی منصوبے کی حمایت کے لیے اور کفالت کرنے والے خاندانوں کے عزم کا شکریہ ادا کرنے کے لیے ایک کمیونٹی شام۔',
        en: 'A community evening to support the aid project in Ranchi and thank the sponsoring families for their commitment.'
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
    title: { es: 'Sopar de la Fam 2025', va: 'Sopar de la Fam 2025', ur: 'سوپار دے لا فام 2025', en: 'Sopar de la Fam 2025' },
    eyebrow: { es: 'Cena del hambre · 2025', va: 'Sopar de la fam · 2025', ur: 'بھوک کا عشائیہ · 2025', en: 'Hunger dinner · 2025' },
    intro: {
      es: 'Una noche sencilla, cercana y profundamente solidaria para sostener el proyecto de ayuda a nuestros niños y niñas en la India.',
      va: 'Una nit senzilla, pròxima i profundament solidària per a sostindre el projecte d’ajuda als nostres xiquets i xiquetes a l’Índia.',
      ur: 'بھارت میں ہمارے بچوں کی مدد کے منصوبے کو برقرار رکھنے کے لیے ایک سادہ، قریبی اور گہری یکجہتی کی رات۔',
      en: 'A simple, close-knit and deeply supportive evening to sustain the project helping our children in India.'
    },
    blocks: [
      {
        image: '/assets/sopar-fam-2025-01.webp',
        alt: { es: 'Vista general del Sopar de la Fam 2025.', va: 'Vista general del Sopar de la Fam 2025.', ur: 'سوپار دے لا فام 2025 کا عمومی منظر۔', en: 'General view of Sopar de la Fam 2025.' },
        title: { es: 'Una velada compartida', va: 'Una vetlada compartida', ur: 'ایک مشترکہ شام', en: 'A shared evening' },
        text: {
          es: 'El pasado Sopar de la Fam fue algo grande, y lo fue gracias a la presencia de jóvenes y mayores que, ambos por igual, tomaron parte en la iniciativa que organizamos cada año para dar soporte a nuestros niños y niñas en la India.',
          va: 'El passat Sopar de la Fam va ser molt gran, i ho va ser gràcies a la presència de joves i majors que, tots per igual, van prendre part en la iniciativa que organitzem cada any per a donar suport als nostres xiquets i xiquetes a l’Índia.',
          ur: 'گزشتہ سوپار دے لا فام واقعی شاندار تھا، اور یہ نوجوانوں اور بزرگوں کی موجودگی کی بدولت ممکن ہوا، جنہوں نے یکساں طور پر اس پہل میں حصہ لیا جو ہم ہر سال بھارت میں اپنے بچوں کی مدد کے لیے منظم کرتے ہیں۔',
          en: 'The last Sopar de la Fam was something special, thanks to the presence of young and old alike, who all took part in the initiative we organise every year to support our children in India.'
        }
      },
      {
        image: '/assets/sopar-fam-2025-02.webp',
        alt: { es: 'Mesa compartida durante el Sopar de la Fam 2025.', va: 'Taula compartida durant el Sopar de la Fam 2025.', ur: 'سوپار دے لا فام 2025 کے دوران مشترکہ میز۔', en: 'Shared table during Sopar de la Fam 2025.' },
        title: { es: 'Ranchi, presente en la mesa', va: 'Ranchi, present a la taula', ur: 'رانچی، میز پر موجود', en: 'Ranchi, present at the table' },
        text: {
          es: 'Fue una velada genial en la que juntos pudimos ponernos al día de la situación en Ranchi y la evolución que allí está aconteciendo gracias al aporte de las familias que apadrináis. Todo ello disfrutando de una modesta cena y una inmejorable compañía.',
          va: 'Va ser una vetlada genial en què junts poguérem posar-nos al dia de la situació a Ranchi i de l’evolució que allí està tenint lloc gràcies a l’aportació de les famílies que apadrineu. Tot això gaudint d’un sopar modest i d’una companyia immillorable.',
          ur: 'یہ ایک زبردست شام تھی جس میں ہم سب مل کر رانچی کی صورتحال اور وہاں ہونے والی پیش رفت سے آگاہ ہو سکے، جو کفالت کرنے والے خاندانوں کے تعاون کی بدولت ممکن ہو رہی ہے۔ یہ سب کچھ ایک سادہ عشائیے اور بہترین رفاقت سے لطف اندوز ہوتے ہوئے ہوا۔',
          en: 'It was a wonderful evening in which we could all catch up together on the situation in Ranchi and the progress happening there thanks to the contribution of sponsoring families — all while enjoying a modest dinner and unbeatable company.'
        }
      },
      {
        image: '/assets/sopar-fam-2025-03.webp',
        alt: { es: 'Asistentes reunidos en el Sopar de la Fam 2025.', va: 'Assistents reunits al Sopar de la Fam 2025.', ur: 'سوپار دے لا فام 2025 میں شریک افراد۔', en: 'Attendees gathered at Sopar de la Fam 2025.' },
        title: { es: 'Gracias por hacerlo posible', va: 'Gràcies per fer-ho possible', ur: 'اسے ممکن بنانے کے لیے شکریہ', en: 'Thank you for making it possible' },
        text: {
          es: 'Contentos de haber podido contar con vuestra presencia y participación, os agradecemos de corazón todo el apoyo que brindáis a Cáritas y a su proyecto de ayuda en la India. ¡GRACIAS!',
          va: 'Contents d’haver pogut comptar amb la vostra presència i participació, vos agraïm de cor tot el suport que brindeu a Càritas i al seu projecte d’ajuda a l’Índia. GRÀCIES!',
          ur: 'آپ کی موجودگی اور شرکت پر خوش ہو کر، ہم دل کی گہرائیوں سے اس تمام تعاون کا شکریہ ادا کرتے ہیں جو آپ کاریتاس اور بھارت میں اس کے امدادی منصوبے کو دیتے ہیں۔ شکریہ!',
          en: 'We were delighted to have your presence and participation, and we thank you wholeheartedly for all the support you give to Cáritas and its aid project in India. THANK YOU!'
        }
      }
    ]
  }
];
