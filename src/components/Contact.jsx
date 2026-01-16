import { motion } from "framer-motion";
import { Copy, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("mihaja.ismael@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
                        Travaillons ensemble
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                        Disponible pour missions freelance, corrections de bugs et améliorations ciblées.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-10"
                >
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                        📧 Email :
                    </p>

                    <p className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                        mihaja.ismael@gmail.com
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                        <a
                            href="mailto:mihaja.ismael@gmail.com"
                            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg"
                        >
                            <Mail className="w-5 h-5" />
                            Envoyer un email
                        </a>
                        <button
                            onClick={handleCopy}
                            className="inline-flex items-center gap-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all shadow-lg"
                        >
                            <Copy className="w-5 h-5" />
                            {copied ? "Copié !" : "Copier l’email"}
                        </button>
                    </div>

                    <div className="mt-10 flex justify-center gap-6 text-gray-500 dark:text-gray-400">
                        <a
                            href="https://github.com/MihajaIsmael"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/isma%C3%ABl-ravalomanda-390593170/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition-colors p-2 hover:bg-blue-100 dark:hover:bg-gray-700 rounded-full"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
