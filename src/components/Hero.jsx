import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero({ title, subtitle, description, badge, ctaContact, ctaProjects }) {
    return (
        <section
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
            id="hero"
        >
            {/* Background blobs */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    {/* Badge */}
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6 dark:bg-blue-900/30 dark:text-blue-300">
                        {badge}
                    </span>

                    {/* Main title */}
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
                        {title}
                        <br />
                        <span className="text-3xl md:text-5xl text-gray-700 dark:text-gray-300">{subtitle}</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto whitespace-pre-line">
                        {description}
                    </p>
                </motion.div>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <a
                        href={ctaContact}
                        className="group flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/25"
                    >
                        Me contacter
                        <Mail className="w-4 h-4" />
                    </a>

                    <a
                        href={ctaProjects}
                        className="group flex items-center gap-2 bg-white text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold hover:bg-gray-50 transition-all dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        Voir mes projets
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Social links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex justify-center gap-6 text-gray-500 dark:text-gray-400"
                >
                    <a
                        href="https://github.com/MihajaIsmael"
                        className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full dark:hover:bg-gray-800"
                        aria-label="GitHub"
                    >
                        <Github className="w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/isma%C3%ABl-ravalomanda-390593170/"
                        className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-50 rounded-full dark:hover:bg-gray-800"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
