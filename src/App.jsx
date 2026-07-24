import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
    const startYear = 2018;
    const startMonth = 10;

    const today = new Date();
    let yearsOfExperience = today.getFullYear() - startYear;

    if (today.getMonth() < startMonth) {
        yearsOfExperience--;
    }
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />

            <main>
                <Hero
                    title="Tech Lead & Développeur Backend Senior PHP"
                    subtitle="Expertise Architectures Complexes, Optimisation & Évolutions Applicatives"
                    description={`Un bug critique, une dette technique qui ralentit votre plateforme, ou un système complexe à faire évoluer ?

Fort de ${yearsOfExperience}+ ans d'expérience backend sur des architectures d'entreprise à fort volume, j'interviens pour sécuriser, optimiser et faire évoluer vos applications PHP.`}
                    badge="Stabilisation, Performance & Évolutions"
                    ctaContact="#contact"
                    ctaProjects="#projects"
                />

                <Projects />
                <Skills />
                <Services />
                <Contact />
                <About />
            </main>

            <Footer />
        </div>
    );
}
