import { motion } from 'framer-motion';
import {
    Database,
    Layout,
    Container,
    Cpu
} from 'lucide-react';

export default function Skills() {
    const skillCategories = [
        {
            title: 'Backend & Data',
            icon: <Database className="w-6 h-6 text-blue-600" />,
            skills: [
                { name: 'PHP', level: 'Avancé', value: 90, icon: 'https://cdn.simpleicons.org/php/777BB4' },
                { name: 'MySQL', level: 'Avancé', value: 85, icon: 'https://cdn.simpleicons.org/mysql/4479A1' },
                { name: 'Symfony', level: 'Intermédiaire', value: 55, icon: 'https://cdn.simpleicons.org/symfony/000000' },
                { name: 'Python', level: 'Débutant', value: 20, icon: 'https://cdn.simpleicons.org/python/3776AB' },
            ]
        },
        {
            title: 'Frontend',
            icon: <Layout className="w-6 h-6 text-purple-600" />,
            skills: [
                { name: 'JavaScript', level: 'Avancé', value: 88, icon: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
                { name: 'HTML/CSS', level: 'Avancé', value: 95, icon: 'https://cdn.simpleicons.org/html5/E34F26' },
                { name: 'React', level: 'Débutant', value: 25, icon: 'https://cdn.simpleicons.org/react/61DAFB' },
                { name: 'Tailwind CSS', level: 'Débutant', value: 25, icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
            ]
        },
        {
            title: 'DevOps & Sécurité',
            icon: <Container className="w-6 h-6 text-green-600" />,
            skills: [
                { name: 'Git', level: 'Avancé', value: 95, icon: 'https://cdn.simpleicons.org/git/F05032' },
                { name: 'Docker', level: 'Avancé', value: 85, icon: 'https://cdn.simpleicons.org/docker/2496ED' },
                { name: 'Bash', level: 'Intermédiaire', value: 70, icon: 'https://cdn.simpleicons.org/gnubash/4E4E4E' },
                { name: 'CI/CD', level: 'Intermédiaire', value: 75, icon: 'https://cdn.simpleicons.org/githubactions/2088FF' }, // Using GitHub Actions as proxy for CI/CD
                { name: 'Harbor', level: 'Intermédiaire', value: 60, icon: 'https://cdn.simpleicons.org/harbor/60B932' },
                { name: 'Trivy', level: 'Intermédiaire', value: 60, icon: 'https://cdn.simpleicons.org/aquasec/004655' }, // Trivy is by AquaSec
            ]
        }
    ];

    return (
        <section className="py-20 bg-gray-50" id="skills">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3 text-gray-900">
                        <Cpu className="w-10 h-10 text-blue-600" />
                        Compétences Techniques
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Mon stack technique et mes outils de prédilection.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gray-50 rounded-lg">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="group">
                                        <div className="flex justify-between items-center mb-2">
                                            <div className="flex items-center gap-3">
                                                <img src={skill.icon} alt="" className="w-6 h-6 object-contain" />
                                                <span className="font-medium text-gray-700">{skill.name}</span>
                                            </div>
                                            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                                                {skill.level}
                                            </span>
                                        </div>
                                        <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden border border-gray-100">
                                            <motion.div
                                                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full relative"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.value}%` }}
                                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                            >
                                                <div className="absolute inset-0 bg-white/20"></div>
                                            </motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
