import { motion } from 'framer-motion';


export default function Hero() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mt-16"
        >
            <h1 className="text-5xl font-bold text-blue-600 mb-4">Ismael Ravalomanda</h1>
            <p className="text-gray-700 text-lg">Développeur Web & Expert CRM | Freelance</p>
        </motion.section>
    );
}