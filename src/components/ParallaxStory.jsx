import { motion } from 'framer-motion';

function ParallaxStoryImage({ block, lang, index }) {
  return (
    <section className={`story-parallax-row ${index % 2 ? 'reverse' : ''}`}>
      <div className="story-parallax-media info-image-wrap">
        <img src={block.image} alt={block.alt[lang]} loading="lazy" />
      </div>
      <motion.div
        className="story-parallax-copy"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3>{block.title[lang]}</h3>
        <p>{block.text[lang]}</p>
      </motion.div>
    </section>
  );
}

export default function ParallaxStory({ story, lang, hideTitle = false }) {
  if (!story) return null;

  return (
    <section className="project-wide-story">
      <motion.div
        className="story-main-intro"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.6 }}
      >
        {!hideTitle && <h2>{story.title[lang]}</h2>}
        <p>{story.intro[lang]}</p>
      </motion.div>

      <div className="story-parallax-list">
        {story.blocks.map((block, index) => (
          <ParallaxStoryImage key={`${block.image}-${index}`} block={block} lang={lang} index={index} />
        ))}
      </div>
    </section>
  );
}
