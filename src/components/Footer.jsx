import { motion } from 'framer-motion';


export default function Footer() {
    return (
        <motion.footer
            className="mt-16 p-6 bg-white text-center shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <p className="text-gray-600">© 2026 Ismael Ravalomanda | Tous droits réservés</p>
        </motion.footer>
    );
}