import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';
import { projectList } from '../data/projects';

export default function Projects() {
    return (
        <section className="mt-2 text-gray-800 py-16 px-6" id="projects">
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
                {projectList.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
                    >
                        <div className="relative h-48 overflow-hidden group">
                            <motion.img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                <a
                                    href={p.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition text-gray-900"
                                    title="Voir le code"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href={p.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition text-gray-900"
                                    title="Voir le live"
                                >
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold mb-3 text-gray-800">{p.name}</h3>
                            <p className="text-gray-600 mb-4 flex-1 leading-relaxed text-sm">{p.desc}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100 hover:bg-blue-100 hover:text-blue-700 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
