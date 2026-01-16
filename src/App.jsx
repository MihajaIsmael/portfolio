import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main>
                <Hero
                    title="Développeur Backend PHP & Symfony"
                    subtitle="Interventions rapides sur vos applications web"
                    description={`Un bug bloque votre équipe ? Une fonctionnalité urgente à développer ?
J'interviens rapidement avec 7 ans d'expérience backend.

Mes interventions :
✓ Résolution de bugs critiques
✓ Développement de nouvelles features
✓ Refactoring et optimisations
✓ Maintenance et mises à jour de sécurité`}
                    badge="Freelance – missions, corrections & améliorations"
                    ctaContact="#contact"
                    ctaProjects="#projects"
                />

                <Skills />
                <Projects />
                <Contact />
                <About />
            </main>

            <Footer />
        </div>
    );
}
