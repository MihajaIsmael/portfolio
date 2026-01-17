import { motion } from "framer-motion";
import { serviceCategories } from "../data/services";
import ServiceCategory from "./ServiceCategory";
import { Briefcase } from "lucide-react";

export default function Services() {
    return (
        <section
            className="py-20 bg-gradient-to-b from-gray-100 to-gray-50"
            id="services"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-extrabold flex items-center justify-center gap-3 text-gray-900">
                        <Briefcase className="w-10 h-10 text-blue-600" />
                        Services
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        J’accompagne les entreprises et indépendants dans la maintenance,
                        l’évolution et la sécurisation de leurs applications web.
                    </p>
                </motion.div>

                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {serviceCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, scale: 1.03 }}
                            className="bg-white rounded-2xl shadow-lg p-10 min-h-[320px] border border-gray-100 hover:shadow-xl transition-shadow flex"
                        >
                            <ServiceCategory category={category} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
