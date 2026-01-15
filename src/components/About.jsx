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
                Développeur web avec 7 ans d'expérience sur PHP, JavaScript et 1CRM. Passionné par
                la création de solutions efficaces pour les clients et l'optimisation des workflows.
            </p>
        </motion.section>
    );
}