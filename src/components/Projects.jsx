import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const Projects = () => {
  // Expecting one main project; if more exist, we’ll show the first as the feature.
  const project = projects[0];

  if (!project) return null;

  const { name, description, image, repo, demo, tags } = project;

  return (
    <div className="-mt-[6rem]">
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Case Studies</p>
        <h2 className={styles.sectionHeadTextLight}>Projects</h2>
      </motion.div>

      {/* Intro */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-5xl leading-[30px] whitespace-pre-line"
        >
{`Here you can find a detailed case study of one of my main projects.
It demonstrates my ability to design, build, and deploy a complete software solution from scratch — covering mobile development, backend services, database design, security, and integration.`}
        </motion.p>
      </div>

      {/* Featured project */}
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.15 }}
  className="mt-8"
>
  <div className="grid lg:grid-cols-2 gap-6 items-start">
    {/* Image panel */}
    <motion.div
      variants={fadeIn('up', 'spring', 0.15, 0.8)}
      className="relative rounded-2xl bg-[#2b2b2b]/30 border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-3"
    >
      <img
        src={image}
        alt={name}
        className="max-h-[60vh] w-auto object-contain"
      />
    </motion.div>

    {/* Details panel */}
    <motion.div
      variants={fadeIn('up', 'spring', 0.25, 0.8)}
      className="rounded-2xl bg-[#2b2b2b]/30 border border-white/10 shadow-2xl p-5 md:p-6 flex flex-col"
    >
      <h3 className="font-beckman text-timberWolf text-[24px] md:text-[32px] font-extrabold tracking-wide uppercase">
        {name}
      </h3>

      {/* Tags */}
      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t.name}
              className={`px-3 py-1 text-xs md:text-sm rounded-full bg-white/10 ${t.color}`}
            >
              {t.name}
            </span>
          ))}
        </div>
      )}

      {/* Description */}
      <p className="mt-4 text-silver text-[14px] md:text-[15px] leading-[22px] md:leading-[24px] whitespace-pre-line">
        {description}
      </p>

      {/* Actions */}
      <div className="mt-4 flex flex-wrap gap-3">
        {repo && (
          <button
            onClick={() => window.open(repo, '_blank')}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-white/10 hover:bg-white/20 transition border border-white/10"
            aria-label="View source code on GitHub"
          >
            <img src={github} alt="" className="w-5 h-5 object-contain" />
            <span className="font-beckman text-timberWolf tracking-wide">
              Source Code
            </span>
          </button>
        )}
        {demo && (
          <button
            onClick={() => window.open(demo, '_blank')}
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 bg-battleGray hover:bg-timberWolf text-eerieBlack transition"
          >
            <span className="font-beckman tracking-wide">Watch Demo</span>
          </button>
        )}
      </div>
    </motion.div>
  </div>
</motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
