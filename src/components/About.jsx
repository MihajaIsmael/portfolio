import { motion } from 'framer-motion';

export default function About() {
    const startYear = 2018;
    const startMonth = 10;

    const today = new Date();
    let yearsOfExperience = today.getFullYear() - startYear;

    if (today.getMonth() < startMonth) {
        yearsOfExperience--;
    }

    return (
        <motion.section
            className="mt-16 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-semibold mb-4">
                À propos
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mt-4">
                Développeur backend & Tech Lead passionné avec{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                    +{yearsOfExperience} ans d’expérience
                </span>{' '}
                sur PHP et JavaScript, j’interviens sur des architectures web complexes pour les stabiliser, les sécuriser et les optimiser.
            </p>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed mt-4">
                Spécialisé dans les environnements métiers exigeants (ERP, CRM, outils internes), je prends en charge la résolution de bugs critiques, l’évolution d’applications legacy, le refactoring et l’automatisation des workflows avec une approche résolument pragmatique et orientée résultats.
            </p>
        </motion.section>
    );
}