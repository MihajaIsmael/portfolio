import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';


export default function App() {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <Hero />
            <Skills />
            <Projects />
            <About />
            <Footer />
        </div>
    );
}