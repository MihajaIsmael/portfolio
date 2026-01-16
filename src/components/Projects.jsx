import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { projectList } from '../data/projects';

export default function Projects() {
  return (
    <section className="mt-2 text-gray-800 py-16 px-6" id="projets">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto mb-12 text-center"
      >
        <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3">
          <FolderGit2 className="w-10 h-10 text-blue-600" />
          Mes Projets
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Une sélection de mes réalisations techniques et intégrations systèmes.
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
