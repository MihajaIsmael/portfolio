import { motion } from 'framer-motion';


export default function About() {
    return (
        <motion.section
            className="mt-16 px-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h2 className="text-3xl font-semibold mb-4">À propos</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
                Développeur backend orienté web avec 7 ans d’expérience sur PHP, JavaScript et 1CRM, j’interviens sur des applications existantes pour les stabiliser, les faire évoluer et les optimiser.
Habitué aux environnements métiers (ERP, CRM, outils internes), je travaille sur la résolution de bugs, le développement de fonctionnalités, le refactoring du code et l’amélioration des workflows, avec une approche pragmatique et orientée résultats.
            </p>
        </motion.section>
    );
}