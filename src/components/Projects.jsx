import { motion } from 'framer-motion';
import { Github, ExternalLink, FolderGit2 } from 'lucide-react';

export default function Projects() {
    const projectList = [
        {
            name: '1CRM - Modules Métiers',
            desc: 'Conception et intégration de modules personnalisés adaptés aux besoins spécifiques des départements (Comptabilité, Commerce, Direction, Gestion de Projet), améliorant l\'efficacité opérationnelle.',
            tags: ['PHP', 'MySQL', 'JavaScript', 'Smarty', 'Git'],
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
            url: '#',
            github: '#'
        },
        {
            name: '1CRM - Connecteur Zeendoc',
            desc: 'Développement d\'une passerelle API pour l\'importation automatique et la gestion centralisée des factures depuis la solution GED Zeendoc.',
            tags: ['PHP', 'MySQL', 'SOAP', 'Smarty', 'Git'],
            image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
            url: '#',
            github: '#'
        },
        {
            name: '1CRM - Connecteur Cervoprint',
            desc: 'Implémentation d\'un flux automatisé pour la récupération et le traitement des commandes via l\'API Cervoprint, fluidifiant la chaîne logistique.',
            tags: ['PHP', 'MySQL', 'API REST', 'Smarty', 'Git'],
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
            url: '#',
            github: '#'
        },
        {
            name: 'Portfolio Personnel',
            desc: 'Site vitrine personnel développé en React, mettant en avant mes compétences et réalisations avec des animations fluides et une interface responsive.',
            tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800',
            url: 'https://mihajaismael.github.io/portfolio',
            github: 'https://github.com/MihajaIsmael/portfolio'
        },
        {
            name: 'Sécurisation Supply Chain',
            desc: 'Déploiement d\'une architecture DevSecOps robuste : pipeline CI/CD, scan de vulnérabilités (Trivy), registre privé (Harbor) et automatisation (En cours).',
            tags: ['Docker', 'CI/CD', 'Harbor', 'Trivy', 'Bash', 'Python'],
            image: 'https://images.unsplash.com/photo-1618060932014-4deda4932554?auto=format&fit=crop&q=80&w=800',
            url: '#',
            github: 'https://gitlab.com/MandaIsmael/secure-software-supply-chain'
        }
    ];

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
                {projectList.map((p, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100"
                    >
                        <div className="relative h-48 overflow-hidden group">
                            <motion.img
                                src={p.image}
                                alt={p.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
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
                            <p className="text-gray-600 mb-4 flex-1 leading-relaxed text-sm">
                                {p.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {p.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-2.5 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
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