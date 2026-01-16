import { motion } from 'framer-motion';

export default function SkillCard({ skill }) {
    return (
        <div className="group">
            <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-3">
                    <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                    <span className="font-medium text-gray-700">{skill.name}</span>
                </div>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                    {skill.level}
                </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-4 overflow-hidden border border-gray-100">
                <motion.div
                    className="bg-gradient-to-r from-blue-500 to-indigo-600 h-4 rounded-full relative"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-white/20"></div>
                </motion.div>
            </div>
        </div>
    );
}
