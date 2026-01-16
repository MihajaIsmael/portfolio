import SkillCard from './SkillCard';
import { motion } from 'framer-motion';
import { Database, Layout, Container, Cpu } from 'lucide-react';

const iconMap = {
    Database: <Database className="w-6 h-6 text-blue-600" />,
    Layout: <Layout className="w-6 h-6 text-purple-600" />,
    Container: <Container className="w-6 h-6 text-green-600" />,
    Cpu: <Cpu className="w-6 h-6 text-blue-600" />
};

export default function SkillCategory({ category, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
        >
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-lg">
                    {iconMap[category.icon]}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
            </div>
            <div className="space-y-6">
                {category.skills.map((skill, i) => (
                    <SkillCard key={i} skill={skill} />
                ))}
            </div>
        </motion.div>
    );
}
