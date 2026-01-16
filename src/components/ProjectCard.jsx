import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
        >
            <div className="relative h-48 overflow-hidden group">
                <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full hover:bg-gray-100 transition text-gray-900"
                        title="Voir le code"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href={project.url}
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
                <h3 className="text-xl font-bold mb-3 text-gray-800">{project.name}</h3>
                <p className="text-gray-600 mb-4 flex-1 leading-relaxed text-sm">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
