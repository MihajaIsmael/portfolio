import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import SkillCategory from './SkillCategory';
import { Cpu } from 'lucide-react';

export default function Skills() {
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
                            whileHover={{ y: -5, scale: 1.02 }}
                            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                        >
                            <SkillCategory category={category} index={index} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
