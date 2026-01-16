import { Github, Mail, Briefcase, Code } from 'lucide-react';
import { motion } from 'framer-motion';


export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center space-x-6 p-4 bg-white shadow"
        >
            <Github className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
            <Mail className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
            <Briefcase className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
            <Code className="w-6 h-6 text-gray-800 hover:text-black cursor-pointer" />
        </motion.header>
    );
}