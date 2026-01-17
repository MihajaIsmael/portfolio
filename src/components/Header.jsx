import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Branding */}
                <div className="flex flex-col leading-tight">
                    <span className="font-extrabold text-gray-900 text-lg">
                        Ismael Ravalomanda
                    </span>
                    <span className="text-sm text-gray-500">
                        Développeur Backend PHP / Symfony
                    </span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
                    <a href="#services" className="hover:text-blue-600 transition">
                        Services
                    </a>
                    <a href="#skills" className="hover:text-blue-600 transition">
                        Compétences
                    </a>
                    <a href="#projects" className="hover:text-blue-600 transition">
                        Projets
                    </a>
                    <a href="#contact" className="hover:text-blue-600 transition">
                        Contact
                    </a>
                </nav>

                {/* Social */}
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/MihajaIsmael"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5 text-gray-700" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/isma%C3%ABl-ravalomanda-390593170/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5 text-gray-700" />
                    </a>

                    <a
                        href="#contact"
                        className="p-2 rounded-full hover:bg-gray-100 transition"
                        aria-label="Contact"
                    >
                        <Mail className="w-5 h-5 text-gray-700" />
                    </a>
                </div>
            </div>
        </motion.header>
    );
}
