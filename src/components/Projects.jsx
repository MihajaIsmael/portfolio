import { motion } from 'framer-motion';


export default function Projects() {
    const projectList = [
        { name: '1CRM Customization', desc: 'Gestion CRM complète', url: '#' },
        { name: 'WordPress Portfolio', desc: 'Site portfolio Dockerisé', url: '#' },
        { name: 'Delivery App', desc: 'Application de gestion de colis', url: '#' },
    ];


    return (
        <section className="mt-16 px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Projets</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {projectList.map((p, i) => (
                    <motion.a
                        key={i}
                        href={p.url}
                        target="_blank"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
                    >
                        <h3 className="text-xl font-bold mb-2">{p.name}</h3>
                        <p className="text-gray-600">{p.desc}</p>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}